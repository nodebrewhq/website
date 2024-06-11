import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  Input,
  Button,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';

const SubscriptionSection = () => {
  const [state, handleSubmit] = useForm("mayrgkba"); // Replace "mayrgkba" with your actual Formspree form ID

  return (
    <Box bgGradient="linear(to-b, white, gray.100)" py="50px" color="black">
      <Container maxW="8xl">
        <VStack spacing={4} textAlign="center">
          <Heading fontSize="lg" fontWeight="bold">
            Get to know what we're doing, first
          </Heading>
          <Text>Subscribe to our newsletter to stay updated with our latest events and news.</Text>
          {state.succeeded ? (
            <Text color="green.500">We've received your email and we will not spam!</Text>
          ) : (
            <form onSubmit={handleSubmit}>
              <Flex align="center">
                <Input
                  flex="1"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  required
                  mr={2} // Margin right to create space between input and button
                  border="2px" // Adding border
                  borderColor="teal.500" // Border color
                  _hover={{ borderColor: 'teal.700' }} // Border color on hover
                  _focus={{ borderColor: 'teal.700', boxShadow: '0 0 0 1px teal.700' }} // Border and shadow on focus
                  _placeholder={{ color: 'black' }} // Placeholder text color
                />
                <Button
                  colorScheme="teal"
                  type="submit"
                  isLoading={state.submitting}
                >
                  {state.submitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </Flex>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </form>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default SubscriptionSection;
