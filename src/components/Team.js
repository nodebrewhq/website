import React from 'react';
import { Box, Flex, Heading, Avatar, Text, Link, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Anjali Chaturvedi',
    position: 'Lead',
    avatar: 'files/team/anjali.jpeg',
  },
  {
    name: 'Hasini Kanchetty',
    position: 'Program Team',
    avatar: 'files/team/hasini.jpeg',
  },
  {
    name: 'Tasmiya Khan',
    position: 'Technical Team',
    avatar: 'files/team/tasmiya.jpeg',
  },
  {
    name: 'Sanskruti Patke',
    position: 'Program Team',
    avatar: 'files/team/sanskruti.jpeg',
  },
  {
    name: 'Selorm Apeletey Mensah',
    position: 'Program Team',
    avatar: 'files/team/selorm.jpeg',
  },
  {
    name: 'Sharon Wainaina',
    position: 'Program Team',
    avatar: 'files/team/sharon.jpeg',
  },
  // Add more team members here
];

const TeamMember = ({ name, position, avatar, linkedin, github, website }) => (
  <Flex
    align="left"
    p=""
    mb=""
  >
    <Avatar size="sm" src={avatar} mr="4" />
    <Box>
      <Heading as="h3" size="s" mb="">{name}</Heading>
      <Text fontSize="sm" color="gray.600" mb="2">{position}</Text>
    </Box>
  </Flex>
);

const MeetTheTeam = () => {
  return (
    <Box mt="12" color="black" mx="auto" px={{ base: "20px", md: "150px" }} py="10"> {/* Added mx="auto" to center the box */}
      <Heading size="s" as="h2" mb="4" textAlign="left">Our Team</Heading>
      <Heading size="md" as="h2" mb="6" textAlign="left">Meet the people behind the change</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mx="auto"> {/* Adjusted number of columns */}
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name} 
            position={member.position}
            avatar={member.avatar}
            linkedin={member.linkedin}
            github={member.github}
            website={member.website}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default MeetTheTeam;
