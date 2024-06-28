import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

const BlogPost = ({ post }) => {
  const { title, content, author, date } = post;

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        Posted by {author} on {date}
      </Text>
      <Text>{content}</Text>
      <Divider mt={4} />
    </Box>
  );
};

export default BlogPost;
