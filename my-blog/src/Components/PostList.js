import React from 'react';
import { Box, Heading, Text, Button, VStack, Image } from '@chakra-ui/react';

const PostList = ({ posts, onEditPost, onDeletePost }) => {
  return (
    <VStack spacing={4} align="stretch">
      {posts.map(post => (
        <Box key={post.id} p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{post.title}</Heading>
          <Image 
            src={post.image} 
            alt={post.title} 
            boxSize="200px" 
            objectFit="cover" 
            mt={4} 
          />
          <Text mt={4} >{post.description}</Text>  
           <Box mt={4} display="flex" gap={4}>
            <Button onClick={() => onEditPost(post)}>Edit</Button>
            <Button colorScheme="red" onClick={() => onDeletePost(post.id)}>Delete</Button>
          </Box>
        </Box>
      ))}
    </VStack>
  );
};

export default PostList;
