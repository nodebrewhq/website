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
  useBreakpointValue,
} from '@chakra-ui/react';

const events = [
  {
    id: 1,
    date: 'June 10, 2024',
    title: 'Brew Bridge Mentorship',
    description: 'A 10 weeks immersive program for hands-on programming with dedicated mentors',
  },
  {
    id: 2,
    date: 'July 30, 2024',
    title: 'Fall of Code',
    description: 'A month-long program to explore open source technologies with live projects',
  },
];

const UpcomingEvents = () => {
  return (
    <Box bgGradient="linear(to-b, white, #F5F5F5)" py="50px">
      <Container maxW="8xl" mx={useBreakpointValue({ base: 0, lg: 150 })}> {/* Center the container */}
        <Heading size="s" as="h2" mb="4" textAlign="left" color="black">UPCOMING EVENTS</Heading>
        <Heading size="md" as="h2" mb="3" textAlign="left" color="black">What we are brewing for you</Heading>
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
  const cardWidth = useBreakpointValue({ base: '100%', md: '30%' });
  const cardPadding = useBreakpointValue({ base: 4, md: 6 });
  const dateFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const titleFontSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const descriptionFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const buttonSize = useBreakpointValue({ base: 'sm', sm: 'sm' });
  const marginX = useBreakpointValue({ base: 0, lg: 4 }); // 0 margin on small screens, 4 on larger screens

  return (
    <Box 
      w={cardWidth} 
      bg="#F5F5F5"
      border="2px"
      borderColor="gray.200"
      color="black"
      rounded="lg"
      p={cardPadding}
      m={4}
      mx={marginX} // Apply marginX for both left and right margins
      ml={isFirst ? 0 : marginX} // Conditional margin on the left side
      textAlign="left"
    >
      <Text fontSize={dateFontSize} color="black" mb={2}>
        {date}
      </Text>
      <Heading as="h3" fontSize={titleFontSize} mb={2} color="black">
        {title}
      </Heading>
      <Text fontSize={descriptionFontSize} color="black">{description}</Text>
      <Button 
        size={buttonSize} 
        color="white" 
        mt="3" 
        bg="teal.500" 
        _hover={{ color: 'black' }}
        w="100%" // Full width on small screens
      >
        Register
      </Button>
    </Box>
  );
};

const App = () => (
  <div>
    <UpcomingEvents />
  </div>
);

export default App;
