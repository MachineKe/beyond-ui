import React, { useState } from 'react';
import { PenTool, BookOpen, MessageCircle, LayoutGrid as Layout, Code, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { BlogLayout } from './BlogLayout';
import { AllBlogsView } from './AllBlogsView';
import { SingleBlogView } from './SingleBlogView';
import { showToast } from '../Toast';
import type { BlogPost } from './types';

export const BlogShowcase: React.FC = () => {
  const [currentView, setCurrentView] = useState<'allBlogs' | 'singleBlog'>('allBlogs');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('singleBlog');
    showToast.info(`Viewing: ${post.title}`);
  };

  const handleBackClick = () => {
    setCurrentView('allBlogs');
    setSelectedPost(null);
  };

  const codeExamples = {
    singleBlog: `import { SingleBlogView } from '@/components/Blog';

function BlogPost({ postId }) {
  return (
    <SingleBlogView
      postId={postId}
      onBackClick={() => navigate('/blog')}
    />
  );
}`,
    allBlogs: `import { AllBlogsView } from '@/components/Blog';

function BlogIndex() {
  return (
    <AllBlogsView
      onPostClick={(post) => navigate(\`/blog/\${post.slug}\`)}
    />
  );
}`,
    layout: `import { BlogLayout } from '@/components/Blog';

function BlogApp() {
  return (
    <BlogLayout currentView="allBlogs">
      <AllBlogsView />
    </BlogLayout>
  );
}`,
    hooks: `import { useBlog, useComments } from '@/components/Blog/hooks';

function BlogComponent() {
  const { posts, loading, searchPosts } = useBlog();
  const { comments, addComment } = useComments({ postId: '1' });
  
  return (
    <div>
      {/* Use blog data and functionality */}
    </div>
  );
}`,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog System</h1>
          <p className="text-gray-600 mt-1">
            Comprehensive blog components with markdown support, comments, and navigation
          </p>
        </div>
        <Badge variant="outline" className="flex items-center">
          <PenTool className="h-4 w-4 mr-1" />
          Blog System
        </Badge>
      </div>

      {/* Tabs */}
      <Tabs value="demo" onValueChange={() => {}}>
        <TabsList>
          <TabsTrigger value="demo">
            <Eye className="h-4 w-4 mr-2" />
            Live Demo
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code className="h-4 w-4 mr-2" />
            Code Examples
          </TabsTrigger>
          <TabsTrigger value="features">
            <Layout className="h-4 w-4 mr-2" />
            Features
          </TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="h-[800px] overflow-auto border border-gray-200 rounded-lg">
                <BlogLayout
                  currentView={currentView}
                  currentPost={selectedPost || undefined}
                  onNavigate={(view, data) => {
                    if (view === 'search') {
                      showToast.info(`Searching for: ${data.query}`);
                    }
                  }}
                >
                  {currentView === 'allBlogs' ? (
                    <AllBlogsView onPostClick={handlePostClick} />
                  ) : (
                    <SingleBlogView
                      postId={selectedPost?.id}
                      onBackClick={handleBackClick}
                    />
                  )}
                </BlogLayout>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-6">
          <div className="space-y-6">
            {Object.entries(codeExamples).map(([key, code]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="capitalize">{key.replace(/([A-Z])/g, ' $1')} Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>SingleBlogView Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Markdown rendering with syntax highlighting</li>
                  <li>• Social sharing buttons (Twitter, Facebook, LinkedIn)</li>
                  <li>• Reading time estimation</li>
                  <li>• SEO-friendly meta tags</li>
                  <li>• Author bio and profile integration</li>
                  <li>• Related posts recommendations</li>
                  <li>• Article statistics and engagement metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AllBlogsView Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Responsive grid and list view modes</li>
                  <li>• Advanced search and filtering</li>
                  <li>• Category and tag-based filtering</li>
                  <li>• Multiple sorting options</li>
                  <li>• Infinite scroll pagination</li>
                  <li>• Loading states and error handling</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>BlogSidebar Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Table of contents with smooth scrolling</li>
                  <li>• Active section highlighting</li>
                  <li>• Recent and popular posts</li>
                  <li>• Category navigation</li>
                  <li>• Newsletter signup integration</li>
                  <li>• Responsive sidebar behavior</li>
                  <li>• Sticky positioning for better UX</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comment System Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Nested comment replies support</li>
                  <li>• Like/dislike functionality</li>
                  <li>• Comment moderation and reporting</li>
                  <li>• Real-time comment validation</li>
                  <li>• User authentication integration</li>
                  <li>• Responsive comment threading</li>
                  <li>• Comment statistics and engagement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Hooks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>useBlog:</strong> Blog data management and filtering</li>
                  <li>• <strong>useComments:</strong> Comment CRUD operations</li>
                  <li>• <strong>useBlogNavigation:</strong> Table of contents and scrolling</li>
                  <li>• Debounced search functionality</li>
                  <li>• Pagination and infinite scroll support</li>
                  <li>• Error handling and loading states</li>
                  <li>• TypeScript support throughout</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• React 18+ with modern hooks patterns</li>
                  <li>• Complete TypeScript support</li>
                  <li>• Markdown rendering with react-markdown</li>
                  <li>• Syntax highlighting for code blocks</li>
                  <li>• SEO optimization with meta tags</li>
                  <li>• Responsive design with mobile-first approach</li>
                  <li>• Accessibility features (ARIA labels, keyboard nav)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};