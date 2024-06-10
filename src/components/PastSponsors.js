import React from "react";
import { Box, SimpleGrid, Image, Heading } from "@chakra-ui/react";

const PastSponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", imageUrl: "/files/sponsor/bal.png" },
    { name: "Sponsor 2", imageUrl: "/files/sponsor/jane.svg.png" },
    { name: "Sponsor 3", imageUrl: "/files/sponsor/crimson.jpg" },
    { name: "Sponsor 4", imageUrl: "/files/sponsor/r.png" },
    { name: "Sponsor 5", imageUrl: "/files/sponsor/qoom.png" },
    { name: "Sponsor 6", imageUrl: "/files/sponsor/sas.png" },
    { name: "Sponsor 7", imageUrl: "/files/sponsor/linode.png" },
    { name: "Sponsor 8", imageUrl: "/files/sponsor/pass.jpeg" },
    { name: "Sponsor 9", imageUrl: "/files/sponsor/magoosh.png" },
    { name: "Sponsor 10", imageUrl: "/files/sponsor/mlh.png" },
    { name: "Sponsor 11", imageUrl: "/files/sponsor/interview-cake.jpg" },
    { name: "Sponsor 12", imageUrl: "/files/sponsor/taskade.png" },
    { name: "Sponsor 13", imageUrl: "/files/sponsor/wolfram.png" },
  ];

  return (
    <Box
      mt={{ base: "20px", md: "50px" }}
      mx="auto"
      px={{ base: "20px", md: "150px" }}
    >
      <Heading as="h2" mb="4" size="s" textAlign="center">
        HISTORY
      </Heading>
      <Heading as="h2" mb="3" size="md" textAlign="center">
        We're really proud
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 5 }}
        spacing={4}
        justifyContent="center"
      >
        {sponsors.map((sponsor, index) => (
          <Box
            key={index}
            borderRadius="s"
            overflow="hidden"
            textAlign="center"
          >
            <Image
              src={sponsor.imageUrl}
              alt={sponsor.name}
              maxWidth="150px"
              maxHeight="150px"
              objectFit="cover"
              mb="3"
              mx="auto" // Center the image horizontally
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PastSponsors;
