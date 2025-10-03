import React from 'react';
import { Calendar, Clock, Eye, Hash, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Button } from '../Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useBlogNavigation } from './hooks/useBlogNavigation';
import type { BlogPost } from './types';
import { sampleBlogPosts, sampleBlogCategories } from './data/sampleData';

interface BlogSidebarProps {
  type: 'navigation' | 'tableOfContents';
  currentPost?: BlogPost;
  relatedPosts?: BlogPost[];
  className?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  type,
  currentPost,
  relatedPosts = [],
  className = '',
}) => {
  const { tableOfContents, activeSection, scrollToSection } = useBlogNavigation();
  const { isAbove } = useBreakpoint();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  // Fixed sidebar styles with responsive behavior
  const sidebarStyles = {
    position: isAbove('lg') ? 'sticky' as const : 'static' as const,
    top: isAbove('lg') ? '1rem' : 'auto',
    maxHeight: isAbove('lg') ? 'calc(100vh - 2rem)' : 'auto',
    overflowY: isAbove('lg') ? 'auto' as const : 'visible' as const,
  };

  if (type === 'tableOfContents') {
    return (
      <div className={`space-y-6 ${className}`} style={sidebarStyles}>
        {/* Table of Contents - Fixed on desktop, static on mobile */}
        <Card className="lg:sticky lg:top-4">
          <CardHeader>
            <CardTitle className="flex items-center text-base">
              <Hash className="h-4 w-4 mr-2" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent className="max-h-80 lg:max-h-96 overflow-y-auto">
            {tableOfContents.length > 0 ? (
              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.anchor)}
                    className={`
                      block w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200
                      ${activeSection === item.anchor
                        ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                      ${item.level === 1 ? 'font-medium' : ''}
                      ${item.level === 2 ? 'ml-4 text-xs' : ''}
                      ${item.level === 3 ? 'ml-8 text-xs' : ''}
                      ${item.level >= 4 ? 'ml-12 text-xs' : ''}
                    `}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            ) : (
              <p className="text-sm text-gray-500 italic">
                No headings found in this article
              </p>
            )}
          </CardContent>
        </Card>

        {/* Article Stats - Only show on desktop */}
        {currentPost && isAbove('lg') && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Article Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Views</span>
                <span className="font-medium text-sm">{currentPost.stats.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Likes</span>
                <span className="font-medium text-sm">{currentPost.stats.likes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Comments</span>
                <span className="font-medium text-sm">{currentPost.stats.comments}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Shares</span>
                <span className="font-medium text-sm">{currentPost.stats.shares}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Navigation sidebar with fixed positioning on desktop
  const recentPosts = sampleBlogPosts.slice(0, 5);
  const popularPosts = [...sampleBlogPosts]
    .sort((a, b) => b.stats.views - a.stats.views)
    .slice(0, 5);

  return (
    <div className={`space-y-6 ${className}`} style={sidebarStyles}>
      {/* Categories - Fixed on desktop */}
      <Card className="lg:sticky lg:top-4">
        <CardHeader>
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sampleBlogCategories.map(category => (
              <div key={category.id} className="flex items-center justify-between group">
                <a 
                  href={`/blog/category/${category.slug}`}
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm font-medium group-hover:underline"
                >
                  {category.name}
                </a>
                <Badge variant="outline" className="text-xs">{category.postCount}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="max-h-80 overflow-y-auto">
          <div className="space-y-4">
            {recentPosts.map(post => (
              <div key={post.id} className="group cursor-pointer">
                <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2 text-sm leading-tight">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime} min</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts - Only show on larger screens */}
      {isAbove('md') && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Popular Posts</CardTitle>
          </CardHeader>
          <CardContent className="max-h-80 overflow-y-auto">
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-600">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2 text-sm leading-tight">
                      {post.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Eye className="h-3 w-3" />
                      <span>{post.stats.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Newsletter Signup - Only show on desktop */}
      {isAbove('lg') && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest posts delivered right to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
              <Button variant="primary" className="w-full" size="sm">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};