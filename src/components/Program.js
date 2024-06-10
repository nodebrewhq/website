import React from "react";
import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "September 2020",
    title: "Nodebrew Founded",
    description:
      "Nodebrew was founded with one mission: to empower underrepresented communities",
  },
  {
    id: 2,
    date: "March 2021",
    title: "Startup Pitch Launched",
    description:
      "After 5 months of preparation, our first event was launched on Devpost which experienced a footfall of 350 women across the world",
  },
  {
    id: 3,
    date: "July 2021",
    title: "First Hackathon Launched",
    description:
      "Taking over the success of the startup pitch, we organized our first hackathon with 400 hackers and the rest is history",
  },
  {
    id: 4,
    date: "September 2021",
    title: "India's Largest All-Women Hackathon",
    description:
      "Hack Wizard was organized while onboarding prominent sponsors like Balsamiq and Jane Street to become the largest all-women hackathon in India with 700 participants",
  },
  {
    id: 5,
    date: "November 2022",
    title: "MLH Season Hackathon",
    description:
      "Hack Concode became MLH Season 2022 hackathon and bought a footfall of 800 hackers from 26 countries",
  },
  {
    id: 6,
    date: "February 2024",
    title: "Flagship Hackathon: Hack Brew",
    description:
      "Nodebrew rebranded to present the best hackathon of the season-Hack Brew, with the best mentors, resources and prizes and is our flagship hackathon",
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box mx={{ base: "10px", md: "150px" }} mt={{ base: "20px", md: "50px" }}>
      <Container maxWidth="6xl">
        <Heading size="md" fontWeight="bold" mb={18} textAlign="left">
          Milestones
        </Heading>
        {milestones.map((milestone) => (
          <Flex key={milestone.id} mb="10px">
            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}
            {isMobile && (
              <>
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}
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
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <Heading
            as="h1"
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </Heading>
          <Text fontSize="md">{description}</Text>
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
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <Box
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
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
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Milestones;
