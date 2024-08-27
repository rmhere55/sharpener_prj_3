import React, { useState, useEffect } from 'react';
import { Box, Input, Textarea, Button, VStack } from '@chakra-ui/react';

const PostForm = ({ onAddPost, currentPost, isEditing, onUpdatePost }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEditing && currentPost) {
      setTitle(currentPost.title);
      setImage(currentPost.image);
      setDescription(currentPost.description);
    }
  }, [currentPost, isEditing]);

  const handleSubmit = () => {
    const post = {
      id: isEditing ? currentPost.id : Date.now(),
      title,
      image,
      description,
    };

    if (isEditing) {
      onUpdatePost(post);
    } else {
      onAddPost(post);
    }

    setTitle('');
    setImage('');
    setDescription('');
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleSubmit}>
          {isEditing ? 'Update Post' : 'Add Post'}
        </Button>
      </VStack>
    </Box>
  );
};

export default PostForm;
