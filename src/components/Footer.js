import React from "react";
import {
  Box,
  Container,
  Text,
  Flex,
  Divider,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

const Footer = () => {
  const showSections = useBreakpointValue({ base: false, md: true });
  return (
    <Box bg="gray.700" color="white" p={{ base: "6", md: "10" }}>
      <Container maxW="8xl">
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={{ base: "center", md: "flex-start" }}
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
        >
          <Flex
            direction="column"
            mb={{ base: "6", md: "0" }}
            textAlign={{ base: "center", md: "left" }}
            flex="1"
          >
            <Text fontSize="lg" fontWeight="bold" mb="2">
              Nodebrew
            </Text>
            <Text fontSize="md" mb="4">
              Empowering and building communities
            </Text>
            <Text fontSize="sm">hello@nodebrew.tech</Text>
          </Flex>

          {showSections && (
            <Flex
              direction="column"
              mb={{ base: "6", md: "0" }}
              textAlign={{ base: "center", md: "left" }}
              flex="1"
            >
              <Text fontSize="lg" fontWeight="bold" mb="2">
                Quick Links
              </Text>
              <Link href="#about" mt="2" fontSize="sm">
                About Us
              </Link>
              <Link mt="2" fontSize="sm">
                Contact Us
              </Link>
              <ChakraLink as={RouterLink} to="/privacy" mt="2" fontSize="sm">
  Privacy Policy
</ChakraLink>
            </Flex>
          )}

          {showSections && (
            <Flex
              direction="column"
              mb={{ base: "6", md: "0" }}
              textAlign={{ base: "center", md: "left" }}
              flex="1"
            >
              <Text fontSize="lg" fontWeight="bold" mb="2">
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
          )}
        </Flex>

        <Divider my="4" borderColor="teal.700" />

        <Flex justifyContent="center" alignItems="center">
          <Text fontSize="sm" textAlign="center">
            &copy; 2024 Nodebrew. All rights reserved. | Made with ❤️ in
            California and New Delhi
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
