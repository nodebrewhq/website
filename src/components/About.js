import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import MetricsSection from './Metrics'; // Assuming you have the MetricsSection component

function AboutSection() {
  const bgColor = useColorModeValue("white"); // Using teal as a complimentary color in light and dark mode

  return (
    <Box mt={{ base: "-50px", md: "-100px" }} mx={{ base: "20px", md: "150px" }} p={{ base: "2", md: "4" }} bg={bgColor} borderRadius="lg" border="1px solid #ccc">
      <Heading as="h4" size="s" mb="4" color="black">About</Heading>
      <Heading as="h3" size="md" mb="2" color="black">Our Story</Heading>
      <Text mb="4" color="black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisi vitae elit gravida rhoncus. 
        Donec sit amet nibh nec urna dignissim tempor. Quisque euismod arcu vel massa pulvinar, at ultrices 
        elit congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </Text>
      <MetricsSection />
    </Box>
  );
}

export default AboutSection;
