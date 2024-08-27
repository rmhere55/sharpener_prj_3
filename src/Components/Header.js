// src/Components/Header.js
import React from 'react';
import { Heading } from '@chakra-ui/react';

const Header = ({ blogCount }) => {
  return (
    <Heading as="h1" mb={4} textAlign="center">
      My Blog ({blogCount} {blogCount === 1 ? 'Post' : 'Posts'})
    </Heading>
  );
};

export default Header;
