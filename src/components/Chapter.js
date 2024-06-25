import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Stack,
  Center,
  Link,
  Icon,
  Grid,
  GridItem,
  Button,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import ScrollRevealComponent from './ScrollReveal';
import './style.css'; // Custom CSS file for hover effect
import { FaBalanceScale, FaCreditCard, FaFileSignature, FaCode, FaHeadset, FaHandshake } from 'react-icons/fa';
import FAQAccordion from './ChapterFAQ';

const ChapterApplicationPage = () => {
  return (
    <Box>
      <Container maxW="7xl" >
        <VStack py={10} className="grid-background" spacing={8} textAlign="center">
          <Box mt={"10"}
            bg="gray.50"
            borderRadius="50px"
            border="1px solid"
            borderColor="gray.400"
            p={1} // Reduced padding to make it smaller
            display="inline-block"
          >
            <Text fontSize="sm" color="gray.700" display="flex" alignItems="center" gap={1}>
              Want more info? <Link href="mailto:info@example.com" color="green.500" fontSize="sm">Email us <Icon as={FaArrowRight} ml={1} w={3} h={3} /></Link>
            </Text>
          </Box>
          <Heading mb={-5} as="h1" size="2xl" fontWeight="bold" color="gray.700">
            College Chapters
          </Heading>
          <Text fontSize="lg" color="gray.700">
          Empowering student chapters to champion diversity, equity, <br /> and inclusivity initiatives on campus and beyond.  
          </Text>
          <Button
                as="a"
                href="https://tally.so/r/mOPMR7"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="green"
                size="lg"
                _hover={{ transform: 'scale(1.05)' }}
                _active={{ transform: 'scale(0.95)' }}
              >
                Apply to Lead 
              </Button>
        </VStack>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#37a169" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,96C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
        <Box bg="#37a169" margin={(0)} padding={(0)}>
        <div className="section-with-sag">

      <Box mx={{ base: 10, md: 20 }}>
      <Heading mb={3} px={10} as="h2" size="lg" color="white.700">
        Truly full-service community
      </Heading>
      <Text mt={0} px={10} size="lg" color="white.700">
        Whether you are just starting with workshops or aiming to have a national level hackathons, we will have your back!
      </Text>
      <Grid

        templateColumns="1fr"
        gap={6}
        justifyContent="left"
        alignItems="left"
        textAlign="left"
      >
        
        <Grid padding={4} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
            
            <GridItem className="gridItem" p={6} >
            <FaBalanceScale size={30} />
              <Heading mt={4} mb={4} as="h3" size="md" color="white.700">Legal & financial backend</Heading>
              <Text fontSize="md" color="white.600">You reap the benefits of 501(c)(3) nonprofit status—with none of the boring paperwork. Included is free FDIC-insured banking¹ backed by Wells Fargo, and payment processing backed by Stripe.</Text>
            </GridItem>
            <GridItem className="gridItem" p={6} borderRadius="md">
            <FaCreditCard size={30} />
              <Heading mt={4} mb={4} as="h3" size="md"  color="white.700">Visa credit cards
</Heading>
              <Text fontSize="md" color="white.600">Avoid long, complex reimbursement processes. We'll provide unlimited, free Visa credit cards for your team that allow for spending directly from your balance. We'll manage the accounting—just snap a picture of your receipts.</Text>
            </GridItem>
            <GridItem className="gridItem" p={6} borderRadius="md">
            <FaCode size={30} />
              <Heading mt={4} mb={4} as="h3" size="md"  color="white.700">$25k+ in free software</Heading>
              <Text fontSize="md" color="white.600">Google Workspace (including Gmail, Calendar, Drive) at your custom domain? We got it. AWS credits? You betcha. We're constantly finding new corporate partners to bring you the best software, all for free.
              </Text>
            </GridItem>
            <GridItem className="gridItem" p={6} borderRadius="md">
            <FaFileSignature size={30} />
              <Heading mt={4} mb={4} as="h3" size="md"  color="white.700">Liability waiver management</Heading>
              <Text fontSize="md" color="white.600">We'll automatically handle liability waivers, photo release forms, and other legal stuff. It's all integrated into Dash's registration platform, so you'll never even need to think about boring paperwork. We have your back.
              </Text>
            </GridItem>
            <GridItem className="gridItem" p={6} borderRadius="md">
            <FaHeadset size={30} />
              <Heading mt={4} mb={4} as="h3" size="md"  color="white.700">24-hours support</Heading>
              <Text fontSize="md" color="white.600">We have designed the program for each chapter to have dedicated support. We'll be responding back in 24 hours and in the days leading to your event, we'll respond back in 12 hours.
              </Text>
            </GridItem>
            <GridItem className="gridItem" p={6} borderRadius="md">
            <FaHandshake size={30} />
              <Heading mt={4} mb={4} as="h3" size="md"  color="white.700">Corporate partner support</Heading>
              <Text fontSize="md" color="white.600">We're backed by 19 corporate sponsors that help us in making this community better. We will help you get in touch with our corporate sponsors for the events you will be hosting.
              </Text>
            </GridItem>
          </Grid>
        {/* Add more GridItems for additional content */}
      </Grid>
      </Box>
    </div>
        </Box>
        <Box mx={{ base: 10, md: 20 }} mt={20} textAlign="left">
          <Heading as="h2" size="lg" mb={6} color="gray.700">
            Why Should You Start a <span className="highlight-green">Chapter?</span> 
          </Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
            <GridItem className="gridItem" border="1px" borderColor="gray.300" p={6} borderRadius="md">
              <Heading mb={4} as="h3" size="md" color="gray.700">Forge Connections</Heading>
              <Text fontSize="md" color="gray.600">Build lasting community networks and foster meaningful relationships within your campus community.</Text>
            </GridItem>
            <GridItem className="gridItem" border="1px" borderColor="gray.300" p={6} borderRadius="md">
              <Heading  mb={4} as="h3" size="md"  color="gray.700">Drive Change</Heading>
              <Text fontSize="md" color="gray.600">Effect positive, impactful change on campus by advocating for causes that matter to you and your peers.</Text>
            </GridItem>
            <GridItem className="gridItem" border="1px" borderColor="gray.300" p={6} borderRadius="md">
              <Heading  mb={4} as="h3" size="md"  color="gray.700">Develop Leadership</Heading>
              <Text fontSize="md" color="gray.600">Gain valuable leadership skills and inspire others to take initiative and make a difference in your community.
              </Text>
            </GridItem>
          </Grid>
        </Box>
        < FAQAccordion />
        <Box>
        <Flex padding={10} alignItems="center" justifyContent="center">
            <VStack spacing={6} textAlign="center" maxW="600px" mx="auto">
              <Heading size="xl" fontWeight="bold" color="gray.700">
                Join our <span className="highlight-green">Community</span>
              </Heading>
              <Text fontSize="md" color="gray.500">
                We strive to bridge the gap in technology access and education for underrepresented communities, empowering them to achieve their goals. We would love to have you and help you join build the future that you deserve.
              </Text>
              <Button
                as="a"
                href="https://chat.whatsapp.com/GorR5Pw4UsPLWuxK330aXM"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="green"
                size="lg"
                _hover={{ transform: 'scale(1.05)' }}
                _active={{ transform: 'scale(0.95)' }}
              >
                Get Involved
              </Button>
            </VStack>
          </Flex>
        </Box>
    </Box>
  );
};

export default ChapterApplicationPage;
