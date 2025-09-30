import React from 'react';
import {
  PageLayout,
  PageHeader,
  PageLayoutContent,
  PageSidebar,
  PageFooter,
} from '../PageLayout';
import { BlogSidebar, BlogSidebarPost } from '../BlogSidebar/BlogSidebar';
import { BlogFeedView, BlogFeedPost } from '../BlogFeedView/BlogFeedView';
import { SingleBlogView, BlogPost } from '../SingleBlogView/SingleBlogView';
import { cn } from '../../utils/cn';

export interface BlogLayoutProps {
  posts: BlogFeedPost[];
  sidebarPosts: BlogSidebarPost[];
  selectedPost?: BlogPost;
  onPostClick?: (id: string) => void;
  children?: React.ReactNode;
  className?: string;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  posts,
  sidebarPosts,
  selectedPost,
  onPostClick,
  children,
  className,
}) => (
  <PageLayout variant="blog" maxWidth="xl" className={cn(className)}>
    <PageHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <span className="font-bold text-xl">Blog</span>
      </div>
    </PageHeader>
    <PageLayoutContent layout="sidebar" spacing="lg">
      <PageSidebar position="left" width="md">
        <BlogSidebar posts={sidebarPosts} onPostClick={onPostClick} />
      </PageSidebar>
      <main className="flex-1">
        {children ? (
          children
        ) : selectedPost ? (
          <SingleBlogView post={selectedPost} />
        ) : (
          <BlogFeedView posts={posts} onPostClick={onPostClick} />
        )}
      </main>
    </PageLayoutContent>
    <PageFooter variant="minimal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600">&copy; 2024 Blog. All rights reserved.</p>
      </div>
    </PageFooter>
  </PageLayout>
);