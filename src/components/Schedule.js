// CalendarComponent.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useMediaQuery, Box } from '@chakra-ui/react';

const localizer = momentLocalizer(moment);

const events = [
    {
      title: 'Induction + Team Building',
      start: new Date(2024, 5, 9, 9, 0), // Month is 0-based, June is 5
      end: new Date(2024, 5, 9, 12, 0),
      details: [
        'Introduction and ice-breaking activities',
        'Team-building exercises to foster collaboration'
      ],
      tasks: []
    },
    {
      title: 'Familiarization with Git, GitHub, Figma',
      start: new Date(2024, 5, 16, 9, 0),
      end: new Date(2024, 5, 16, 12, 0),
      details: [
        'Introduction to version control using Git and GitHub',
        'Overview of Figma for design collaboration'
      ],
      tasks: [
        'Complete a beginner\'s tutorial on GitHub and create a sample project in Figma'
      ]
    },
    {
      title: 'Researching Projects and Domains',
      start: new Date(2024, 5, 23, 9, 0),
      end: new Date(2024, 5, 23, 12, 0),
      details: [
        'Strategies for effective project and domain research'
      ],
      tasks: [
        'Conduct a literature review on your domain of interest'
      ]
    },
    {
      title: 'Group Formation and UX/UI Session',
      start: new Date(2024, 5, 30, 9, 0),
      end: new Date(2024, 5, 30, 12, 0),
      details: [
        'Forming groups based on domain interests',
        'Session on wireframes, UX/UI principles',
        'Discussing potential projects and team-building within groups'
      ],
      tasks: [
        'Draft the initial version of your project wireframe'
      ]
    },
    {
      title: 'Product-Market Fit and Product Development',
      start: new Date(2024, 6, 7, 9, 0),
      end: new Date(2024, 6, 7, 12, 0),
      details: [
        'Discussion on product-market fit and key product development considerations'
      ],
      tasks: [
        'Identify target users and create a preliminary product-market fit analysis'
      ]
    },
    {
      title: 'Meeting with Development Mentor',
      start: new Date(2024, 6, 14, 9, 0),
      end: new Date(2024, 6, 14, 12, 0),
      details: [
        'Initial meeting with a development mentor'
      ],
      tasks: [
        'Commence coding your project'
      ]
    },
    {
      title: 'Mentor Session + Resume Building',
      start: new Date(2024, 6, 21, 9, 0),
      end: new Date(2024, 6, 21, 12, 0),
      details: [
        'Continuing mentor session with development mentor',
        'Workshop on building your resume'
      ],
      tasks: [
        'Progress in coding and review of your resume'
      ]
    },
    {
      title: 'Mentor Session + LinkedIn Building',
      start: new Date(2024, 6, 28, 9, 0),
      end: new Date(2024, 6, 28, 12, 0),
      details: [
        'Further guidance from development mentor',
        'Session on optimizing your LinkedIn profile'
      ],
      tasks: [
        'Continuing coding and updating your LinkedIn profile'
      ]
    },
    {
      title: 'Finalizing Project and Deployment',
      start: new Date(2024, 7, 4, 9, 0),
      end: new Date(2024, 7, 4, 12, 0),
      details: [
        'Final mentor meeting to finalize the project and plan deployment',
        'Commencing work on project presentation'
      ],
      tasks: [
        'Prepare for project deployment and commence creation of your presentation'
      ]
    },
    {
      title: 'Project Showcasing',
      start: new Date(2024, 7, 11, 9, 0),
      end: new Date(2024, 7, 11, 12, 0),
      details: [
        'Showcasing completed projects',
        'Presentations and feedback session',
        'Celebrating achievements and wrapping up'
      ],
      tasks: []
    }
  ];
  

  const CalendarComponent = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  
    const handleSelectEvent = (event) => {
      setSelectedEvent(event);
    };
  
    const handleCloseModal = () => {
      setSelectedEvent(null);
    };
  
    return (
      <Box height={{ base: '70vh', md: '90vh' }} padding={{ base: '10px', md: '0' }}>
        {isLargerThan768 ? (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%', margin: isLargerThan768 ? '50px' : '10px' }}
            onSelectEvent={handleSelectEvent}
            components={{
              event: Event
            }}
            eventPropGetter={eventStyleGetter}
          />
        ) : (
          <Text fontStyle="italic" textAlign="center" color="gray.700">
            To view the calendar, please switch to a desktop.
          </Text>
        )}
  
        <Modal isOpen={!!selectedEvent} onClose={handleCloseModal} size={isLargerThan768 ? "xl" : "full"}>
          <ModalOverlay />
          {selectedEvent && (
            <ModalContent backgroundColor="#3174ad" color="white">
              <ModalHeader>{selectedEvent.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box padding="10px">
                  <p><strong>Details:</strong></p>
                  <ul>
                    {selectedEvent.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  {selectedEvent.tasks.length > 0 && (
                    <>
                      <p style={{ marginTop: '10px' }}><strong>Tasks:</strong></p>
                      <ul>
                        {selectedEvent.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </Box>
              </ModalBody>
             </ModalContent>
          )}
        </Modal>
      </Box>
    );
  };
  
  const Event = ({ event }) => {
    return (
      <div>
        <strong>{event.title}</strong>
      </div>
    );
  };
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '#3174ad';
    let style = {
      padding: '5px',
      backgroundColor: backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'inline-block'
    };
    return {
      style: style
    };
  };
  
  export default CalendarComponent;