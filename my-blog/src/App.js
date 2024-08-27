// src/App.js
import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from './Components/Header';
import Post from './Components/Post';

function App() {
  // Create an array of posts to pass to the Post component
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post. You can write anything here.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post. Add as many posts as you like!' },
  ];

  return (
    <Container maxW="container.md" py={8}>
      <Header blogCount={posts.length} />
      <Post posts={posts} />
    </Container>
  );
}

export default App;
