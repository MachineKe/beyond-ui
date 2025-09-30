import React from 'react';
import { SingleBlogView, BlogPost } from './SingleBlogView';

const demoPost: BlogPost = {
  title: 'Building Modern Web Applications with React and TypeScript',
  content: (
    <>
      <p>
        Modern web development has evolved significantly over the past few years.
        With the introduction of React and TypeScript, developers now have powerful
        tools to build scalable, maintainable applications.
      </p>
      <p>
        In this comprehensive guide, we'll explore the best practices for building
        modern web applications using React and TypeScript. We'll cover everything
        from project setup to deployment strategies.
      </p>
      <h2>Getting Started</h2>
      <p>
        The first step in building any React application is setting up your
        development environment. We recommend using Create React App with
        TypeScript template for beginners.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
        <p className="font-medium text-gray-900 mb-2">Pro Tip:</p>
        <p className="text-gray-700">
          Always start with a solid project structure. This will save you
          countless hours as your application grows.
        </p>
      </div>
    </>
  ),
  date: 'March 15, 2024',
  readTime: '8 min read',
  featuredImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
  categories: ['Technology', 'React'],
  tags: ['React', 'TypeScript', 'JavaScript', 'Web', 'Frontend'],
  author: {
    name: 'John Doe',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64',
    bio: 'Senior Frontend Developer with 8+ years of experience building scalable web applications. Passionate about React, TypeScript, and modern web technologies.',
  },
  relatedPosts: [
    { title: 'Getting Started with Next.js', date: 'March 10, 2024' },
    { title: 'CSS Grid vs Flexbox: When to Use Each', date: 'March 11, 2024' },
    { title: 'Building Accessible Web Components', date: 'March 12, 2024' },
  ],
};

export const SingleBlogViewExample: React.FC = () => (
  <SingleBlogView post={demoPost} />
);