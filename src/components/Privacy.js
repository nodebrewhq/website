import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box bg="#F5F5F5" py="12">
      <Container maxW="container.lg" textAlign="left" color="gray.700">
        <Heading as="h1" size="xl" mb="6">
          Privacy Policy
        </Heading>
        <Text fontSize="lg" mb="4">
          Last updated: June 19, 2024
        </Text>
        <Text mb="4">
          Nodebrew ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information we receive from users of our website, events, and services (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance with this policy.
        </Text>

        <Heading as="h2" size="lg" mt="8" mb="4">
          Information We Collect
        </Heading>
        <Text mb="4">
          <strong>Personal Information:</strong> While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postal address</li>
            <li>Professional details (e.g., job title, company)</li>
          </ul>
        </Text>
        <Text mb="4">
          <strong>Usage Data:</strong> We may also collect information on how our Services are accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Services that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
        </Text>

        <Heading as="h2" size="lg" mt="8" mb="4">
          How We Use Your Information
        </Heading>
        <Text mb="4">
          Nodebrew uses the collected data for various purposes, including but not limited to:
          <ul>
            <li>To provide and maintain our Services</li>
            <li>To notify you about changes to our Services</li>
            <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Services, and for marketing and promotional purposes</li>
            <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested</li>
          </ul>
        </Text>

        <Heading as="h2" size="lg" mt="8" mb="4">
          How We Protect Your Information
        </Heading>
        <Text mb="4">
          We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Services.
        </Text>

        <Heading as="h2" size="lg" mt="8" mb="4">
          Changes to This Privacy Policy
        </Heading>
        <Text mb="4">
          Nodebrew may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </Text>

        <Text fontSize="sm" color="gray.500">
          If you have any questions about this Privacy Policy, please contact us at hello@nodebrew.tech.
        </Text>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
