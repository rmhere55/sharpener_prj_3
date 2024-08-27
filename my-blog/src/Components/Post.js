// src/Components/Post.js
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Post = ({ posts }) => {
  const MotionBox = motion(Box);

  return (
    <VStack spacing={8} align="stretch">
      {posts.map(post => (
        <MotionBox
          key={post.id}
          p={5}
          shadow="md"
          borderWidth="1px"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading fontSize="xl">{post.title}</Heading>
          <Text mt={4}>{post.content}</Text>
        </MotionBox>
      ))}
    </VStack>
  );
};

export default Post;
