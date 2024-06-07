import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Button,
  Flex,
  Heading,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

const events = [
  {
    id: 1,
    date: 'June 10, 2024',
    title: 'Brew Bridge Mentorship',
    description: 'A 10 weeks immersvive program for hands-on programming with dedicated mentors',
  },
  {
    id: 2,
    date: 'July 30, 2024',
    title: 'Fall of Code',
    description: 'A month-long program to explore open source technologies with live projects',
  },
  {
    id: 3,
    date: 'September 15, 2024',
    title: 'Web Development Bootcamp',
    description: 'A week long bootcamp series where participants learn and make a project in web dev',
  },
];

const UpcomingEvents = () => {
  return (
    <Box bgGradient="linear(to-b, white, #F5F5F5)" py="50px">
      <Container maxW="8xl">
        <Heading size="s" as="h2" mb="4" textAlign="left">UPCOMING EVENTS</Heading>
        <Heading size="md" as="h2" mb="3" textAlign="left">What we are brewing for you</Heading>
        <Flex wrap="wrap" justifyContent="flex-start" spacing={4}>
          {events.map((event, index) => (
            <EventCard key={event.id} {...event} isFirst={index === 0} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

const EventCard = ({ date, title, description, isFirst }) => {
  const cardWidth = useBreakpointValue({ base: '100%', md: '30%' }); // Adjusted width for responsiveness
  const cardPadding = useBreakpointValue({ base: 4, md: 6 }); // Adjusted padding for responsiveness
  const dateFontSize = useBreakpointValue({ base: 'sm', md: 'md' }); // Adjusted font size for responsiveness
  const titleFontSize = useBreakpointValue({ base: 'md', md: 'lg' }); // Adjusted font size for responsiveness
  const descriptionFontSize = useBreakpointValue({ base: 'sm', md: 'md' }); // Adjusted font size for responsiveness
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' }); // Adjusted button size for responsiveness

  return (
    <Box 
      w={cardWidth} 
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow="lg"
      rounded="lg"
      p={cardPadding}
      m={4}
      ml={isFirst ? 0 : { base: 0, md: 4 }}
      textAlign="left"
    >
      <Text fontSize={dateFontSize} color="teal.500" mb={2}>
        {date}
      </Text>
      <Heading as="h3" fontSize={titleFontSize} mb={2}>
        {title}
      </Heading>
      <Text fontSize={descriptionFontSize}>{description}</Text>
      <Button size={buttonSize} color="White" mt="3" bg="teal.500">Register</Button> {/* Adjusted button size */}
    </Box>
  );
};

const App = () => (
  <div>
    <UpcomingEvents />
  </div>
);

export default App;
