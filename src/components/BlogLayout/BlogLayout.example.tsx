import React, { useState } from 'react';
import { BlogLayout } from './BlogLayout';
import type { BlogFeedPost } from '../BlogFeedView/BlogFeedView';
import type { BlogSidebarPost } from '../BlogSidebar/BlogSidebar';
import type { BlogPost } from '../SingleBlogView/SingleBlogView';

const feedPosts: BlogFeedPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'Explore best practices for building scalable, maintainable web apps using React and TypeScript. From project setup to deployment strategies.',
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
    excerpt: 'A beginner-friendly guide to building your first Next.js application, covering routing, data fetching, and deployment.',
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
];

const sidebarPosts: BlogSidebarPost[] = feedPosts.map(post => ({
  id: post.id,
  title: post.title,
  date: post.date,
  author: post.author,
  categories: post.categories,
}));

const singlePost: BlogPost = {
  title: feedPosts[0].title,
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
  date: feedPosts[0].date,
  readTime: feedPosts[0].readTime,
  featuredImage: feedPosts[0].featuredImage,
  categories: feedPosts[0].categories,
  tags: feedPosts[0].tags,
  author: feedPosts[0].author,
  relatedPosts: [
    { title: feedPosts[1].title, date: feedPosts[1].date },
  ],
};

export const BlogLayoutExample: React.FC = () => {
  const [selected, setSelected] = useState<BlogPost | undefined>(undefined);

  return (
    <BlogLayout
      posts={feedPosts}
      sidebarPosts={sidebarPosts}
      selectedPost={selected}
      onPostClick={id => {
        if (id === feedPosts[0].id) setSelected(singlePost);
        else setSelected(undefined);
      }}
    />
  );
};