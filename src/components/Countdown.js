import React, { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Set the date for the countdown (August 11th, current year)
  const countdownDate = new Date(`${new Date().getFullYear()}-08-11T00:00:00`);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        clearInterval(interval);
        // Optionally: Handle when the countdown reaches zero
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" w="50%" mt={8} textAlign="center" border="1px solid #CBD5E0"> {/* Added border */}
      <Heading as="h2" size="lg" mb={4}>
        Project Showcasing 
      </Heading>
      <Text fontSize="xl" mb={2}>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </Text>
    </Box>
  );
};

export default CountdownTimer;
