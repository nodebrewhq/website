// TeamCarousel.js
import React from 'react';
import { Box, Flex, Heading, Avatar, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'; // Your custom CSS for styling

const teamMembers = [
  {
    name: 'Radhika Singhal',
    position: 'Curator @ TEDxIGDTU',
    avatar: 'files/mentor/radhika.jpeg',
  },
  {
    name: 'Raksha Pahariya',
    position: 'Summer Intern @ Wells Fargo',
    avatar: 'files/mentor/raksha.jpeg',
  },
  {
    name: 'Sanskriti Gupt',
    position: 'Open Source Lead @ GDSC IIMT',
    avatar: 'files/mentor/sanskriti.jpeg',
  },
  {
    name: 'Saumya Gupta',
    position: 'SDE Intern @ Expedia',
    avatar: 'files/mentor/saumya.jpeg',
  },
  {
    name: 'Apoorva Kaushal',
    position: 'Ex-SDE Intern @ Amazon, Atlassian',
    avatar: 'files/mentor/apoorva.jpeg',
  },
  {
    name: 'Ishani Verma',
    position: 'Technology Summer Intern @ Barclays',
    avatar: 'files/mentor/ishani.jpeg',
  },
  {
    name: 'Anvesha Dixit',
    position: 'Ex-SDE Intern @ Essentia.dev',
    avatar: 'files/mentor/anvesha.jpeg',
  },
  {
    name: 'Dhani Harshini',
    position: 'Intern Software Engineer @ IBM ISDL',
    avatar: 'files/mentor/harshini.jpeg',
  },
  {
    name: 'Nandana Santhosh',
    position: 'Intern @ Anachroni',
    avatar: 'files/mentor/nandana.jpeg',
  },
  // Add more team members here
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Slide every 3 seconds
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const TeamMember = ({ name, position, avatar }) => (
  <Flex direction="column" align="center" p="4" textAlign="center">
    <Avatar size="xl" src={avatar} mb="4" />
    <Box>
      <Heading as="h3" color="gray.800" size="md" mb="2">{name}</Heading>
      <Text fontSize="sm" color="gray.800">{position}</Text>
    </Box>
  </Flex>
);

const TeamCarousel = () => {
  return (
    <Box mx="auto" px={{ base: "8px", md: "30px" }} mb="40">
      <Heading color="gray.800" size="lg" as="h2" mb="4" textAlign="left">Meet Our <span className='highlight'>Mentors</span></Heading>
      <Text color="gray.800" size="md">The faces from the industry that are helping us change the world, one prograt at time </Text>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <Box key={index} p="2">
            <TeamMember
              name={member.name}
              position={member.position}
              avatar={member.avatar}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TeamCarousel;
