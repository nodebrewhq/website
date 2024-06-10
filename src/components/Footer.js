import React from "react";
import {
  Box,
  Container,
  Text,
  Link,
  Flex,
  Divider,
  Stack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mb="0" bg="gray.700" color="white" p={{ base: "5", md: "10" }}>
      <Container mb="0" maxW="8xl">
        <Stack spacing={{ base: "6", md: "10" }}>
          <Flex
            mb="0"
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex mb={{ base: "4", md: "0" }} direction="column">
              <Text fontSize="lg" fontWeight="bold">
                Nodebrew
              </Text>
              <Text fontSize="md" fontWeight="semi-bold">
                Empowering and building communities
              </Text>
              <Text fontSize="sm">hello@nodebrew.tech</Text>
            </Flex>
            <Flex mb={{ base: "4", md: "0" }} direction="column">
              <Text fontSize="lg" fontWeight="bold">
                Quick Links
              </Text>
              <Link mt="2" fontSize="sm">
                About Us
              </Link>
              <Link mt="2" fontSize="sm">
                Contact Us
              </Link>
              <Link mt="2" fontSize="sm">
                Privacy Policy
              </Link>
            </Flex>
            <Flex mb={{ base: "4", md: "0" }} direction="column">
              <Text fontSize="lg" fontWeight="bold">
                Services
              </Text>
              <Link mt="2" fontSize="sm">
                Web Design
              </Link>
              <Link mt="2" fontSize="sm">
                Graphic Design
              </Link>
              <Link mt="2" fontSize="sm">
                Digital Marketing
              </Link>
            </Flex>
            <Flex mb={{ base: "4", md: "0" }} direction="column">
              <Text fontSize="lg" fontWeight="bold">
                Resources
              </Text>
              <Link mt="2" fontSize="sm">
                Blog
              </Link>
              <Link mt="2" fontSize="sm">
                FAQs
              </Link>
              <Link mt="2" fontSize="sm">
                Tutorials
              </Link>
            </Flex>
          </Flex>
          <Divider borderColor="teal.700" />
          <Flex mb="0" justifyContent="center" alignItems="center">
            <Text fontSize="sm" textAlign="center">
              &copy; 2024 Nodebrew. All rights reserved. | Made with ❤️ in Cali
              and New Delhi
            </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
