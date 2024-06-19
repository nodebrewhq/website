import React from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Program from './Program';
import Team from './Team';
import Sponsor from './PastSponsors';
import Upcoming from './Upcoming';
import GetInvolvedSection from './GetInvolved';
import SubscriptionSection from './Email';
import PrivacyPolicy from './Privacy';

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <About />
      <Program />
      <Upcoming />
      <GetInvolvedSection />
      <Sponsor />
      <Team />
      <SubscriptionSection />

    </>
  );
};

export default HomePage;
