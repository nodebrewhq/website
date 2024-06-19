import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, Text } from '@chakra-ui/react';

const AccordionExample = () => {
  return (
    <Accordion textAlign="left" allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text as="h3" fontSize="lg">
                What is Hack Brew?
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontSize="lg">
            Hack Brew is a pioneering hackathon dedicated to fostering inclusivity within the tech community. It provides a platform for participants to innovate, collaborate, and showcase their talents.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            <Text as="h3" fontSize="lg">
                How can I participate?
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontSize="lg">
            Participation in Hack Brew is open to all tech enthusiasts. You can register on our website during the registration period and join us for an exciting journey of innovation and collaboration.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            <Text as="h3" fontSize="lg">
                What are the themes?
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontSize="lg">
            Hack Brew explores themes such as Social Enterprise, Sustainability, Accessibility and Inclusion, and Open Innovation with AI/ML. These themes inspire participants to create impactful solutions.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionExample;
