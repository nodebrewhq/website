import React from 'react';
import { Flex, Heading, Button, ScaleFade, Box, Text, Image } from '@chakra-ui/react';

function LandingPage() {
  return (
    <Flex bg="#F5F5F5" minHeight="100vh" alignItems="center" justifyContent="center" color="white" pb={{ base: "0", md: "50px" }}>
      <Box mb="150" textAlign="center">
        <ScaleFade initialScale={0.9} in={true}>
          <Flex mt="5" justifyContent="center"> {/* Center the image horizontally */}
            <Image src="files/images/header.png" alt="Header" maxW={{ base: "80%", md: "50%" }} height="auto" /> {/* Add the image */}
          </Flex>
          <Heading size="2xl" mt="10" mb="8" fontWeight="600" color="black">
            <Text>
              Making tech <Text as="span" borderRadius="5px" bg="linear-gradient(to top, #37A69B 30%, transparent 10%)">accessible</Text> for<br />
              <Text display="block" mt="4px">underrepresented communities</Text>
            </Text>
          </Heading>
          <Button
            bg="teal.400"
            mr="4"
            size="lg"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(0.95)" }}
          >
            Get Started
          </Button>
          <Button
            bg="gray.300"
            color="black"
            ml="4"
            size="lg"
            _hover={{ transform: "scale(1.05)", bg: "gray.400" }}
            _active={{ transform: "scale(0.95)" }}
          >
            Learn More
          </Button>
        </ScaleFade>
      </Box>
    </Flex>
  );
}

export default LandingPage;
