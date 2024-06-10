import React from "react";
import { Box, Flex, Heading, Avatar, Text, SimpleGrid } from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Anjali Chaturvedi",
    position: "Lead",
    avatar: "https://bit.ly/broken-link",
  },
  {
    name: "Hasini Kanchetty",
    position: "Program Team",
    avatar: "https://bit.ly/broken-link",
  },
  {
    name: "Tasmiya Khan",
    position: "Technical Team",
    avatar: "https://bit.ly/broken-link",
  },
  {
    name: "Shriya Reddy Vundhyala",
    position: "Marketing Team",
    avatar: "https://bit.ly/broken-link",
  },
  {
    name: "Priyanka Chitikela",
    position: "Financial Team",
    avatar: "https://bit.ly/broken-link",
  },
  {
    name: "Selorm Apeletey Mensah",
    position: "Program Team",
    avatar: "https://bit.ly/broken-link",
  },
  {
    name: "Sharon Wainaina",
    position: "Program Team",
    avatar: "https://bit.ly/broken-link",
  },
  // Add more team members here
];

const TeamMember = ({ name, position, avatar }) => (
  <Flex
    align="center"
    p={5}
    bg="gray.800"
    borderRadius="md"
    boxShadow="md"
    _hover={{ boxShadow: "lg" }}
  >
    <Avatar size="lg" src={avatar} mr={4} />
    <Box>
      <Heading as="h3" size="md" mb={1}>
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {position}
      </Text>
    </Box>
  </Flex>
);

const MeetTheTeam = () => {
  return (
    <Box mx={{ base: "10px", md: "150px" }} py={{ base: "20px", md: "50px" }}>
      <Heading size="lg" mb={6} textAlign="left">
        Meet The Team
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            avatar={member.avatar}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MeetTheTeam;
