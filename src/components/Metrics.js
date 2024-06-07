import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';

function MetricBox({ title, count, description, duration }) {
  return (
    <Box p={{ base: "2", md: "4" }} borderRadius="lg" textAlign="center" m="2"> {/* Added border */}
      <Heading size="md" mb="2" fontWeight="bold">
        <CountUp end={count} duration={duration} />
      </Heading>
      <Text fontSize="sm" color="gray.600" mb="2">{title}</Text>
      <Text fontSize="md">{description}</Text>
    </Box>
  );
}

function MetricsSection() {
  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" flexWrap="wrap">
      <MetricBox title="People Impacted" count={70000} duration={7} description="" />
      <MetricBox title="Countries Reached" count={46} duration={7} description="" />
      <MetricBox title="Sponsors" count={19} duration={7} description="" />
      <MetricBox title="Hackathons" count={4} duration={7} description="" />
    </Flex>
  );
}

export default MetricsSection;
