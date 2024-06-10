import React from "react";
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
} from "@chakra-ui/react";

const events = [
  {
    id: 1,
    date: "June 10, 2024",
    title: "Brew Bridge Mentorship",
    description:
      "A 10 weeks immersive program for hands-on programming with dedicated mentors",
  },
  {
    id: 2,
    date: "July 30, 2024",
    title: "Fall of Code",
    description:
      "A month-long program to explore open source technologies with live projects",
  },
  {
    id: 3,
    date: "September 15, 2024",
    title: "Web Development Bootcamp",
    description:
      "A week-long bootcamp series where participants learn and make a project in web dev",
  },
];

const UpcomingEvents = () => {
  return (
    <Box
      bgGradient="linear(to-b, white, #F5F5F5)"
      py={{ base: "20px", md: "50px" }}
    >
      <Container maxW="8xl">
        <Heading size="s" as="h2" mb="4" textAlign="left">
          UPCOMING EVENTS
        </Heading>
        <Heading size="md" as="h2" mb="3" textAlign="left">
          What we are brewing for you
        </Heading>
        <Flex flexWrap="wrap" justifyContent="flex-start" spacing={4}>
          {events.map((event, index) => (
            <EventCard key={event.id} {...event} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

const EventCard = ({ date, title, description }) => {
  return (
    <Box
      w={{ base: "100%", md: "30%" }}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="lg"
      rounded="lg"
      p={6}
      m={4}
      textAlign="left"
    >
      <Text fontSize={{ base: "sm", md: "md" }} color="teal.500" mb={2}>
        {date}
      </Text>
      <Heading as="h3" fontSize={{ base: "md", md: "lg" }} mb={2}>
        {title}
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
      <Button color="white" mt="5" bg="teal.500" size="sm">
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
