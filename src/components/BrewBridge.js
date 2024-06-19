import React from 'react';
import { Box, Heading, Text, Button, Flex, Grid, Link, VStack } from '@chakra-ui/react';
import './style.css';
import Schedule from './Schedule';
import MentorCarousel from './Mentor';

const CustomPageWithGrid = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:anjali@nodebrew.tech';
  };

  const faqs = [
    {
      question: 'What is Brew Bridge?',
      answer: 'Our undergraduate women-centric mentorship program to help them explore tech domains.'
    },
    {
      question: 'How long is the program?',
      answer: 'The program will last for 10-weeks where there will be workshops, mentor sessions and project showcasing.'
    },
    {
      question: 'Do we have to travel to attend the program?',
      answer: 'No, the program is 100% virtual. You can join from anywhere in the world.'
    },
    {
      question: 'What can a mentee expect?',
      answer: 'A mentee can expect workshops on various tech domains and non-tech domains, resume reviews, LinkedIn profile building and a final project.'
    },
    {
      question: 'How is the program divided?',
      answer: 'It is divided into three phases - Research and Designing Phase, Development Phase, and Deployment Phase.'
    },
    {
      question: 'How can I register?',
      answer: 'We have closed the registrations for this cohort. Check back later!'
    }
  ];

  return (
    <Box>
      <Flex className="grid-background" align="center" justify="center" textAlign={{ base: 'center', md: 'center' }} p={{ base: 4, md: 8 }}>
        <Box maxW="600px" mt={20}>
          <Heading as="h1" size="2xl" mb={4} color="gray.700" lineHeight={1.2}>
            Personalized <span className="highlight">Mentorship</span> & <span className="highlight">Guidance</span> From Industry Experts
          </Heading>
          <Text fontSize="xl" color="gray.700" mb={8}>
            Fueling innovation and opportunity by empowering the next generation of diverse tech leaders with mentorship and access to cutting-edge resources and educational opportunities.
          </Text>
          <Button colorScheme="blue" size="lg">
            Registration Closed
          </Button>
        </Box>
      </Flex>

      <Box className="no-background" color="gray.700" mx={{ base: 4, md: 20 }} mt={20}>
        <MentorCarousel />
      </Box>

      <Schedule />

      <Box className="no-background" color="gray.700" mx={{ base: 4, md: 20 }} mt={20}>
        <Heading as="h1" size="lg" mb={4} textAlign="left" pl={4}>
          Frequently Asked Questions
        </Heading>
        <Text mb={8} textAlign="left" pl={4}>
          Can't find what you were looking for? Reach out at{' '}
          <Link color="rgb(103, 177, 224)" className="highlight" onClick={handleEmailClick}>
            anjali@nodebrew.tech
          </Link>
        </Text>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
          {faqs.map((faq, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{faq.question}</Text>
              <Text mt={{base: '2', md: '0'}}>{faq.answer}</Text>
            </Box>
          ))}
        </Grid>

        <Box py={10} color="black" mt={20}>
          <Flex alignItems="center" justifyContent="center">
            <VStack spacing={6} textAlign="center" maxW="600px" mx="auto">
              <Heading size="xl" fontWeight="bold" color="gray.700">
                Join our <span className="highlight">Community</span>
              </Heading>
              <Text fontSize="md" color="gray.500">
                We strive to bridge the gap in technology access and education for underrepresented communities, empowering them to achieve their goals. We would love to have you and help you join build the future that you deserve.
              </Text>
              <Button
                as="a"
                href="https://chat.whatsapp.com/GorR5Pw4UsPLWuxK330aXM"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="blue"
                size="lg"
                _hover={{ transform: 'scale(1.05)' }}
                _active={{ transform: 'scale(0.95)' }}
              >
                Get Involved
              </Button>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomPageWithGrid;
