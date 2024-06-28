import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import BlogPost from './BlogPost';

// Simulated data for blog posts
const posts = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    content: 'Learn about useState, useEffect, and more.',
    author: 'John Doe',
    date: 'June 25, 2024',
  },
  {
    id: 2,
    title: 'Styling in React with Chakra UI',
    content: 'Explore Chakra UI for easy and beautiful styling.',
    author: 'Jane Smith',
    date: 'June 26, 2024',
  },
  // Add more posts as needed
];

const BlogList = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Welcome to My Blog
      </Heading>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </VStack>
  );
};

export default BlogList;
