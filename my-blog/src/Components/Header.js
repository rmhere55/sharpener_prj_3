import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';

const Header = ({ postCount }) => {
  return (
    <Box textAlign="center" mb={4}>
      <Heading as="h1">My Blog</Heading>
      <Text mt={2}>Posts Count: {postCount}</Text>
    </Box>
  );
};

export default Header;
