import React from 'react';
import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Heading, // Correct import for Heading component
} from '@chakra-ui/react';

const milestones = [
  {
    id: 1,
    date: 'September 2020',
    title: 'Nodebrew Founded',
    description: 'Nodebrew was founded with one mission: to empower underrepresented communities'
  },
  {
    id: 2,
    date: 'March 2021',
    title: 'Startup Pitch Launched',
    description: 'After 5 months of preparation, our first event was launched on Devpost which experienced a footfall of 350 women across the world'
  },
  {
    id: 3,
    date: 'July 2021',
    title: 'First Hackathon Launched',
    description:
      'Taking over the success of the startup pitch, we organized our first hackathon with 400 hackers and the rest is history',
  },
  {
    id: 4,
    date: 'September 2021',
    title: "India's Largest All-Women Hackathon",
    description:
      'Hack Wizard was organized while onboarding prominent sponsors like Balsamiq and Jane Street to become the largest all-women hackathon in India with 700 participants'
  },
  {
    id: 5,
    date: 'November 2022',
    title: "MLH Season Hackathon",
    description:
      'Hack Concode became MLH Season 2022 hackathon and bought a footfall of 800 hackers from 26 countries'
  },
  {
    id: 6,
    date: 'Febraury 2024',
    title: "Flagship Hackathon: Hack Brew",
    description:
      'Nodebrew rebranded to present the best hackathon of the season-Hack Brew, with the best mentors, resources and prizes and is our flagship hackathon'
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box mx={{ base: "0px", md: "150px" }} mt="50">
      <Container maxWidth="6xl">
        <Heading size="m" fontWeight="bold" mb={18} textAlign="left">
        </Heading>
        {milestones.map((milestone) => (
          <Flex key={milestone.id} mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Desktop view(right card) */}
            {isDesktop && milestone.id % 2 !== 0 && (
              <>
                <Card {...milestone} />
                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </Container>
    </Box>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Card = ({ id, title, description, date }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '10px 10px 10px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 4 }} // Adjusted padding for mobile
      bg="gray.700" // Changed background color to gray.800
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block',
      }}
    >
      <Box>
        <Text fontSize="sm" color={isEvenId ? 'teal.400' : 'blue.400'}> {/* Adjusted font size for mobile */}
          {date}
        </Text>

        <VStack spacing={1} mb={2} textAlign="left">
          <Heading as="h1" fontSize="md" lineHeight={1.2} fontWeight="bold" w="100%"> {/* Adjusted font size for mobile */}
            {title}
          </Heading>
          <Text fontSize="sm">{description}</Text> {/* Adjusted font size for mobile */}
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '30px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <Box
        position="absolute"
        bg="gray.700"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></Box>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="80%"
          height="100%"
          bg="gray.700"
          borderRadius="100px"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 4 }} bg="transparent"></Box>; {/* Adjusted padding for mobile */}
};

export default Milestones;
