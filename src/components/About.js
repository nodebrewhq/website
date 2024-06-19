import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import MetricsSection from "./Metrics";

function AboutSection() {
  const bgColor = useColorModeValue("white");

  return (
    <Box id="about"
      mt={{ base: "-50px", md: "-100px" }}
      mx={{ base: "20px", md: "150px" }}
      p={{ base: "2", md: "4" }}
      bg={bgColor}
      borderRadius="lg"
      border="1px solid #ccc"
      maxWidth="100%"
      overflow="hidden"
    >
      <Heading as="h4" size="s" mb="4" color="black">
        About
      </Heading>
      <Heading as="h3" size="md" mb="2" color="black">
        Our Story
      </Heading>
      <Text mb="4" color="black">
      At Nodebrew, we believe in the transformative power of technology and the importance of inclusivity within the tech community. As an international non-profit organization, our mission is to foster an inclusive environment through education and networking, providing opportunities for everyone to thrive in the tech industry.
      <br /> <br />
Our journey began with a simple yet powerful idea: to create spaces where underrepresented communities, particularly women, can showcase their talents and develop their skills. This vision led to the birth of our bi-yearly hackathons, including the renowned Hack Brew. Today, Hack Brew stands as India's largest all-women hackathon, empowering talented female coders to push boundaries and innovate fearlessly.
<br /> <br />
Nodebrew's impact extends far beyond hackathons. Over the years, we have organized three major hackathons and numerous workshops, touching the lives of over 70,000 individuals. Our events are more than just competitions; they are platforms for growth, learning, and collaboration. We aim to bridge the gender gap in technology by offering a supportive and dynamic environment where everyone can excel.
<br /> <br />
Innovation and community support are at the heart of Nodebrew. We are dedicated to driving meaningful change in the tech landscape by creating opportunities for individuals to connect, learn, and innovate together. Our efforts have sparked a revolution, inspiring many to pursue careers in technology and contribute to a more inclusive industry.
      </Text>
      <MetricsSection />
    </Box>
  );
}

export default AboutSection;
