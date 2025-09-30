import React from 'react';
import { BlogSidebar, BlogSidebarPost } from './BlogSidebar';

const demoPosts: BlogSidebarPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    date: 'March 15, 2024',
    author: {
      name: 'John Doe',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
    categories: ['Technology', 'React'],
  },
  {
    id: '2',
    title: 'Getting Started with Next.js',
    date: 'March 10, 2024',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
    categories: ['Technology', 'Next.js'],
  },
  {
    id: '3',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    date: 'March 11, 2024',
    author: {
      name: 'Alex Lee',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
    categories: ['Web Design', 'CSS'],
  },
];

export const BlogSidebarExample: React.FC = () => (
  <BlogSidebar posts={demoPosts} />
);