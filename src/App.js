import React from 'react';
import { Box } from "@chakra-ui/react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
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
import PrivacyPolicy from './components/Privacy';
import BrewBridge from './components/BrewBridge';
import ChapterApplicationForm from './components/Chapter';
import NotFound from './components/NotFound';
import HackBrew from './components/Hack-Brew'
import theme from './theme'; // Ensure you have the theme file set up
import { Element } from 'react-scroll'; // Import Element from react-scroll


function App() {
  return (
    <Box minHeight="100vh" bg="white" overflowX="hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/get-involved" element={<GetInvolvedSection />} />
        <Route path="/sponsors" element={<Sponsor />} />
        <Route path="/subscribe" element={<SubscriptionSection />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/brewbridge" element={<BrewBridge />} />
        <Route path="/hack-brew" element={<HackBrew />} />
        <Route path="/chapter" element={<ChapterApplicationForm />} />
        <Route component={NotFound} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
