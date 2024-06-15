import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Program from './components/Program';
import Team from './components/Team';
import Sponsor from './components/PastSponsors';
import Upcoming from './components/Upcoming';
import GetInvolvedSection from './components/GetInvolved';
import Footer from './components/Footer';
import SubscriptionSection from './components/Email';
import theme from './theme'; // Ensure you have the theme file set up

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh" bg="white" overflowX="hidden">
        <Navbar />
        <LandingPage />
        <About />
        <Program />
        <Upcoming />
        <GetInvolvedSection />
        <Sponsor />
        <Team />
        <SubscriptionSection />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
