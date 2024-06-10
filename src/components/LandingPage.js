import React from "react";
import {
  Flex,
  Heading,
  Button,
  ScaleFade,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

function LandingPage() {
  return (
    <Flex
      bg="#F5F5F5"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      color="white"
      mb="50px"
      p={4}
    >
      <Box
        mt={{ base: "0", md: "-40px" }} // Adjusted top margin for responsiveness
        textAlign="center"
        width={{ base: "100%", md: "auto" }}
      >
        <ScaleFade initialScale={0.9} in={true}>
          <Flex justifyContent="center" mb={8}>
            <Box maxWidth={{ base: "90%", md: "70%" }}>
              <Image
                src="files/images/header.png"
                alt="Header"
                maxWidth="100%"
                height="auto"
              />
            </Box>
          </Flex>
          <Heading
            size={{ base: "xl", md: "2xl" }}
            mt={4}
            mb={8}
            fontWeight="600"
            color="black"
          >
            <Text>
              Making tech{" "}
              <Text
                as="span"
                style={{
                  borderRadius: "5px",
                  background:
                    "linear-gradient(to top, #AAC3F4 30%, transparent 10%)",
                }}
              >
                accessible
              </Text>{" "}
              for
              <br />
              <Text display="block" marginTop="4px">
                underrepresented communities
              </Text>
            </Text>
          </Heading>
          <Button
            bg="#AAC3F4"
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
            size="lg"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(0.95)" }}
            width={{ base: "full", md: "auto" }}
          >
            Get Started
          </Button>
          <Button
            bg="gray.300"
            color="black"
            ml={{ base: 0, md: 4 }}
            size="lg"
            _hover={{ transform: "scale(1.05)", bg: "gray.400" }}
            _active={{ transform: "scale(0.95)" }}
            width={{ base: "full", md: "auto" }}
          >
            Learn More
          </Button>
        </ScaleFade>
      </Box>
    </Flex>
  );
}

export default LandingPage;
