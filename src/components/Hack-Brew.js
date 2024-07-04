import React from 'react';
import { Box, Heading, Text, Button, Flex, Grid, Link, VStack } from '@chakra-ui/react';
import './style.css';

const HackBrew = () => {

  return (
    <Box>
      <Flex mb="20" className="grid-background" align="center" justify="center" textAlign={{ base: 'center', md: 'center' }} p={{ base: 4, md: 8 }}>
        <Box maxW="600px" mt={20}>
          <Heading as="h1" size="2xl" mb={4} color="gray.700" lineHeight={1.2}>
          Fuel Your <span className="highlight-t">Innovation</span> & <span className="highlight-t">Creativity</span> at Hack Brew 2.0
          </Heading>
          <Text fontSize="xl" color="gray.700" mb={8}>
          Join us for a 48-hour hackathon where creativity meets collaboration. Empowering aspiring tech leaders with mentorship, cutting-edge resources, and the opportunity to turn your ideas into reality.
          </Text>
          <Button colorScheme="orange" size="lg">
            Registration starts on 1 August
          </Button>
        </Box>
      </Flex>
      </Box>
  );
};

export default HackBrew;
