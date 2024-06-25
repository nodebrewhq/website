import React, { useState } from 'react';
import {Link, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from '@chakra-ui/react';

const FAQAccordion = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:hello@nodebrew.tech';
      };
  const faqs = [
    {
      question: 'What is the College Chapter Program?',
      answer:
        'The College Chapter Program is an initiative designed to empower students to create and lead local chapters focused on specific topics or interests. It provides resources, mentorship, and a platform for students to collaborate and make an impact in their communities.',
    },
    {
      question: 'Who can join the College Chapter Program?',
      answer:
        'The program is open to undergraduate and graduate students from accredited colleges and universities worldwide. Students passionate about specific topics or interests and eager to initiate positive change are encouraged to apply.',
    },
    {
      question: 'What are the benefits of joining?',
      answer:
        'Joining the College Chapter Program offers numerous benefits, including access to exclusive resources, networking opportunities with industry professionals, skill development workshops, and the chance to implement impactful projects within your community.',
    },
    {
      question: 'How can my college start a chapter?',
      answer:
        'Starting a chapter is straightforward. Interested students can apply to become chapter leaders, gather a team of motivated peers, and follow the program\'s guidelines for chapter formation. Guidance and support will be provided throughout the process.',
    },
    {
      question: 'Is there a fee to join?',
      answer:
        'No, there is no fee to join the College Chapter Program. It is free for students accepted into the program. However, chapters may seek funding for specific projects or events through grants and sponsorships.',
    },
    {
      question: 'How are chapters supported?',
      answer:
        'Chapters receive ongoing support through webinars, mentorship sessions, networking events, and access to an online community platform where they can collaborate, share resources, and showcase their initiatives.',
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <Accordion allowToggle 
    color="gray.600"
    padding={20}>
        <Heading as="h2" size="lg" mb={3} color="gray.700">
            Frequently Asked <span className="highlight-green">Questions</span> 
          </Heading>
          <Text as="h2" size="lg" mb={6} color="gray.700">
          Can't find what you were looking for? Reach out at{' '}
          <Link color="green" onClick={handleEmailClick}>
            hello@nodebrew.tech
          </Link>
          </Text>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton padding={4} onClick={() => toggleAccordion(index)}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">{faq.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={isOpen === index ? 'block' : 'none'}>
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
