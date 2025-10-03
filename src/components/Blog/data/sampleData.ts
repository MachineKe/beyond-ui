import type { BlogPost, BlogComment, BlogCategory } from '../types';

// Sample blog posts for demonstration
export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern React Applications with TypeScript',
    slug: 'building-modern-react-typescript',
    content: `# Building Modern React Applications with TypeScript

## Introduction

TypeScript has become an essential tool for React developers who want to build scalable, maintainable applications. In this comprehensive guide, we'll explore the best practices for combining React with TypeScript.

## Why TypeScript with React?

TypeScript brings several advantages to React development:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better Developer Experience**: Enhanced IntelliSense and autocomplete
- **Refactoring Confidence**: Safe code changes with compiler verification
- **Documentation**: Types serve as living documentation

## Setting Up Your Project

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

## Component Patterns

### Functional Components with Props

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## Advanced Patterns

### Custom Hooks

Custom hooks are a powerful way to share stateful logic between components:

\`\`\`tsx
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  
  return { count, increment, decrement, reset };
}
\`\`\`

## Best Practices

1. **Use strict TypeScript configuration**
2. **Define clear prop interfaces**
3. **Leverage union types for variants**
4. **Use generic types for reusable components**
5. **Implement proper error boundaries**

## Conclusion

TypeScript and React make a powerful combination for building modern web applications. By following these patterns and best practices, you can create applications that are both robust and maintainable.`,
    excerpt: 'Learn how to build scalable React applications using TypeScript with modern patterns and best practices.',
    author: {
      id: 'author1',
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64',
      bio: 'Senior Frontend Developer with 8+ years of experience in React and TypeScript.',
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T14:30:00Z',
    tags: ['React', 'TypeScript', 'Frontend', 'JavaScript'],
    category: 'Development',
    readingTime: 8,
    featured: true,
    status: 'published',
    seoMeta: {
      title: 'Building Modern React Applications with TypeScript - Complete Guide',
      description: 'Learn how to build scalable React applications using TypeScript with modern patterns and best practices.',
      keywords: ['React', 'TypeScript', 'Frontend Development', 'JavaScript'],
      ogImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    stats: {
      views: 1250,
      likes: 89,
      comments: 23,
      shares: 45,
    },
  },
  {
    id: '2',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    slug: 'css-grid-vs-flexbox',
    content: `# CSS Grid vs Flexbox: When to Use Each

## Understanding the Fundamentals

Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes and excel in different scenarios.

## CSS Grid: Two-Dimensional Layouts

CSS Grid is designed for two-dimensional layouts where you need to control both rows and columns simultaneously.

### Best Use Cases:
- Page layouts with header, sidebar, main content, and footer
- Card grids with consistent sizing
- Complex dashboard layouts
- Magazine-style layouts

### Example:
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "sidebar header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}
\`\`\`

## Flexbox: One-Dimensional Layouts

Flexbox excels at one-dimensional layouts, either in a row or column direction.

### Best Use Cases:
- Navigation bars
- Button groups
- Centering content
- Distributing space between items

### Example:
\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
\`\`\`

## Decision Framework

Choose **CSS Grid** when:
- You need to control both dimensions
- Creating overall page layouts
- Working with complex, overlapping designs

Choose **Flexbox** when:
- Working with one-dimensional layouts
- Aligning items within a container
- Creating responsive navigation

## Conclusion

Both CSS Grid and Flexbox are essential tools in modern web development. Understanding when to use each will help you create more efficient and maintainable layouts.`,
    excerpt: 'A comprehensive guide to understanding when to use CSS Grid versus Flexbox for your layout needs.',
    author: {
      id: 'author2',
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64',
      bio: 'CSS specialist and design systems architect with expertise in modern layout techniques.',
    },
    publishedAt: '2024-01-10T09:00:00Z',
    tags: ['CSS', 'Layout', 'Grid', 'Flexbox', 'Web Design'],
    category: 'Design',
    readingTime: 6,
    featured: false,
    status: 'published',
    seoMeta: {
      title: 'CSS Grid vs Flexbox: Complete Comparison Guide',
      description: 'Learn when to use CSS Grid versus Flexbox with practical examples and decision frameworks.',
      keywords: ['CSS Grid', 'Flexbox', 'CSS Layout', 'Web Design'],
    },
    stats: {
      views: 890,
      likes: 67,
      comments: 15,
      shares: 32,
    },
  },
  {
    id: '3',
    title: 'Accessibility in Modern Web Development',
    slug: 'accessibility-modern-web-development',
    content: `# Accessibility in Modern Web Development

## Why Accessibility Matters

Web accessibility ensures that websites and applications are usable by everyone, including people with disabilities. It's not just the right thing to do—it's also a legal requirement in many jurisdictions.

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content accessible:

### Four Principles:
1. **Perceivable**: Information must be presentable in ways users can perceive
2. **Operable**: Interface components must be operable
3. **Understandable**: Information and UI operation must be understandable
4. **Robust**: Content must be robust enough for various assistive technologies

## Practical Implementation

### Semantic HTML
Use proper HTML elements for their intended purpose:

\`\`\`html
<header>
  <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>
\`\`\`

### ARIA Labels
Enhance semantic meaning with ARIA attributes:

\`\`\`html
<button aria-label="Close dialog" aria-expanded="false">
  <span aria-hidden="true">×</span>
</button>
\`\`\`

### Keyboard Navigation
Ensure all interactive elements are keyboard accessible:

\`\`\`css
.button:focus {
  outline: 2px solid #007acc;
  outline-offset: 2px;
}
\`\`\`

## Testing Accessibility

### Tools:
- **axe-core**: Automated accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Built-in Chrome accessibility audit
- **Screen readers**: NVDA, JAWS, VoiceOver

## Conclusion

Building accessible websites benefits everyone and creates a more inclusive web. Start with semantic HTML, add ARIA where needed, and test with real users and assistive technologies.`,
    excerpt: 'Learn how to build accessible web applications that work for everyone, including users with disabilities.',
    author: {
      id: 'author3',
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64',
      bio: 'Accessibility advocate and UX engineer focused on inclusive design practices.',
    },
    publishedAt: '2024-01-05T11:30:00Z',
    tags: ['Accessibility', 'WCAG', 'UX', 'Inclusive Design'],
    category: 'Accessibility',
    readingTime: 7,
    featured: true,
    status: 'published',
    seoMeta: {
      title: 'Web Accessibility Guide - WCAG Compliance and Best Practices',
      description: 'Complete guide to web accessibility, WCAG compliance, and building inclusive web applications.',
      keywords: ['Web Accessibility', 'WCAG', 'Inclusive Design', 'Screen Readers'],
    },
    stats: {
      views: 2100,
      likes: 156,
      comments: 34,
      shares: 78,
    },
  },
];

export const sampleBlogComments: BlogComment[] = [
  {
    id: 'c1',
    postId: '1',
    author: {
      id: 'u1',
      name: 'John Doe',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
    content: 'Great article! I\'ve been using TypeScript with React for a while now and these patterns are exactly what I recommend to my team.',
    createdAt: '2024-01-16T08:30:00Z',
    likes: 12,
    dislikes: 0,
    isModerated: false,
    isReported: false,
    replies: [
      {
        id: 'c1-r1',
        postId: '1',
        parentId: 'c1',
        author: {
          id: 'author1',
          name: 'Sarah Johnson',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64',
        },
        content: 'Thanks John! I\'m glad you found the patterns useful. Have you tried the new React 18 features with TypeScript?',
        createdAt: '2024-01-16T10:15:00Z',
        likes: 5,
        dislikes: 0,
        isModerated: false,
        isReported: false,
      },
    ],
  },
  {
    id: 'c2',
    postId: '1',
    author: {
      id: 'u2',
      name: 'Alice Smith',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64',
    },
    content: 'The custom hooks section was particularly helpful. I\'ve been struggling with sharing state logic between components.',
    createdAt: '2024-01-16T12:45:00Z',
    likes: 8,
    dislikes: 0,
    isModerated: false,
    isReported: false,
  },
];

export const sampleBlogCategories: BlogCategory[] = [
  {
    id: 'dev',
    name: 'Development',
    slug: 'development',
    description: 'Programming tutorials, frameworks, and development best practices',
    postCount: 45,
    color: '#3b82f6',
  },
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    description: 'UI/UX design, CSS techniques, and design systems',
    postCount: 32,
    color: '#8b5cf6',
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    slug: 'accessibility',
    description: 'Web accessibility, inclusive design, and WCAG compliance',
    postCount: 18,
    color: '#10b981',
  },
  {
    id: 'performance',
    name: 'Performance',
    slug: 'performance',
    description: 'Web performance optimization and best practices',
    postCount: 24,
    color: '#f59e0b',
  },
];