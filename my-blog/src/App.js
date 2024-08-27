import React, { useState } from 'react';
import { Container, Heading, VStack, Button } from '@chakra-ui/react';
import Header from './Components/Header';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddPost = (post) => {
    setPosts([...posts, post]);
  };

  const handleEditPost = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
    setCurrentPost(null);
    setIsEditing(false);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <Container maxW="container.md" py={8}>
      <Header count={posts.length} />
      <PostForm
        onAddPost={handleAddPost}
        currentPost={currentPost}
        isEditing={isEditing}
        onUpdatePost={handleUpdatePost}
      />
      <PostList
        posts={posts}
        onEditPost={handleEditPost}
        onDeletePost={handleDeletePost}
      />
    </Container>
  );
}

export default App;
