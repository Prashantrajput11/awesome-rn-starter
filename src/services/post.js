// services/posts.ts
import api from './api';

export const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async post => {
  const response = await api.post('/posts', post);
  return response.data;
};
