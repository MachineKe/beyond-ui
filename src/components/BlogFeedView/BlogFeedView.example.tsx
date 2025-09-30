import React from 'react';
import { BlogFeedView, BlogFeedPost } from './BlogFeedView';

const demoPosts: BlogFeedPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt:
      'Explore best practices for building scalable, maintainable web apps using React and TypeScript. From project setup to deployment strategies.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    featuredImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    categories: ['Technology', 'React'],
    tags: ['React', 'TypeScript', 'JavaScript', 'Web', 'Frontend'],
    author: {
      name: 'John Doe',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
  },
  {
    id: '2',
    title: 'Getting Started with Next.js',
    excerpt:
      'A beginner-friendly guide to building your first Next.js application, covering routing, data fetching, and deployment.',
    date: 'March 10, 2024',
    readTime: '6 min read',
    featuredImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    categories: ['Technology', 'Next.js'],
    tags: ['Next.js', 'React', 'SSR'],
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
  },
  {
    id: '3',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt:
      'Understand the differences between CSS Grid and Flexbox, and learn when to use each for responsive layouts.',
    date: 'March 11, 2024',
    readTime: '5 min read',
    featuredImage: 'https://images.pexels.com/photos/1103535/pexels-photo-1103535.jpeg?auto=compress&cs=tinysrgb&w=800',
    categories: ['Web Design', 'CSS'],
    tags: ['CSS', 'Grid', 'Flexbox', 'Responsive'],
    author: {
      name: 'Alex Lee',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
  },
];

export const BlogFeedViewExample: React.FC = () => (
  <BlogFeedView posts={demoPosts} />
);