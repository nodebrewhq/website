import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import MetricsSection from "./Metrics"; // Assuming you have the MetricsSection component

function AboutSection() {
  const bgColor = useColorModeValue("white", "gray.700");

  return (
    <Box
      mt={{ base: "0", md: "-100px" }}
      mx={{ base: "10px", md: "150px" }}
      p={{ base: "4", md: "6" }}
      bg={bgColor}
      borderRadius="lg"
      border="1px solid"
      borderColor={useColorModeValue("#ccc", "gray.600")}
    >
      <Heading
        as="h4"
        size="md"
        mb="4"
        color={useColorModeValue("black", "white")}
      >
        About
      </Heading>
      <Heading
        as="h3"
        size="lg"
        mb="2"
        color={useColorModeValue("black", "white")}
      >
        Our Story
      </Heading>
      <Text mb="4" color={useColorModeValue("black", "white")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisi
        vitae elit gravida rhoncus. Donec sit amet nibh nec urna dignissim
        tempor. Quisque euismod arcu vel massa pulvinar, at ultrices elit
        congue. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.
      </Text>
      <MetricsSection />
    </Box>
  );
}

export default AboutSection;
