import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeHighlight } from '../CodeHighlight/CodeHighlight';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Heart, 
  MessageCircle,
  Eye,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon
} from 'lucide-react';
import { Button } from '../Button';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { showToast } from '../Toast';
import { useBlogNavigation } from './hooks/useBlogNavigation';
import { BlogCommentSection } from './BlogCommentSection';
import { BlogSidebar } from './BlogSidebar';
import type { BlogPost } from './types';
import { sampleBlogPosts } from './data/sampleData';

interface SingleBlogViewProps {
  postId?: string;
  onBackClick?: () => void;
  className?: string;
}

export const SingleBlogView: React.FC<SingleBlogViewProps> = ({
  postId = '1',
  onBackClick,
  className = '',
}) => {
  const { generateTableOfContents } = useBlogNavigation();
  const { isAbove, isBelow } = useBreakpoint();
  
  // Get blog post data (in real app, this would come from API)
  const post = sampleBlogPosts.find(p => p.id === postId) || sampleBlogPosts[0];
  const relatedPosts = sampleBlogPosts.filter(p => 
    p.id !== post.id && 
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 3);

  useEffect(() => {
    generateTableOfContents(post.content);
  }, [post.content, generateTableOfContents]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        showToast.success('Link copied to clipboard!');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 ${className}`}>
      {/* Back Navigation - Mobile optimized */}
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <Button variant="ghost" onClick={onBackClick} className="mb-2 sm:mb-4 p-2 sm:p-3">
          <ChevronLeft className="h-4 w-4 mr-1 sm:mr-2" />
          <span className="text-sm sm:text-base">Back to Blog</span>
        </Button>
        
        {/* Breadcrumb - Hidden on mobile, visible on tablet+ */}
        {isAbove('md') && (
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-primary-600 transition-colors">Blog</a>
            <span>/</span>
            <a href={`/blog/category/${post.category.toLowerCase()}`} className="hover:text-primary-600 transition-colors">
              {post.category}
            </a>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{post.title}</span>
          </nav>
        )}
      </div>

      {/* Responsive Layout: Mobile stacked, Desktop with sidebars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Sidebar - Hidden on mobile/tablet, fixed on desktop */}
        {isAbove('lg') && (
          <div className="lg:col-span-3">
            <BlogSidebar 
              type="navigation"
              currentPost={post}
              relatedPosts={relatedPosts}
            />
          </div>
        )}

        {/* Main Content - Full width on mobile, centered on desktop */}
        <div className="lg:col-span-6">
          <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {/* Article Header */}
            <header className="mb-6 sm:mb-8 not-prose">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge 
                  variant="default"
                  className="text-xs sm:text-sm"
                  style={{ backgroundColor: post.category === 'Design' ? '#8b5cf6' : '#3b82f6' }}
                >
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge variant="warning" className="text-xs sm:text-sm">Featured</Badge>
                )}
                {post.tags.slice(0, isBelow('sm') ? 1 : 2).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Author and Meta Info - Responsive layout */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 sm:pb-6 border-b border-gray-200 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Avatar size={isBelow('sm') ? 'sm' : 'lg'}>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{post.author.name}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{post.readingTime} min read</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{post.stats.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Sharing - Responsive button sizes */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Button 
                    variant="ghost" 
                    size={isBelow('sm') ? 'sm' : 'md'} 
                    onClick={() => handleShare('twitter')}
                    className="p-2"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size={isBelow('sm') ? 'sm' : 'md'} 
                    onClick={() => handleShare('facebook')}
                    className="p-2"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size={isBelow('sm') ? 'sm' : 'md'} 
                    onClick={() => handleShare('linkedin')}
                    className="p-2"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size={isBelow('sm') ? 'sm' : 'md'} 
                    onClick={() => handleShare('copy')}
                    className="p-2"
                  >
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Featured Image - Responsive aspect ratio */}
              {post.seoMeta.ogImage && (
                <div className="aspect-video sm:aspect-[16/9] lg:aspect-video bg-gray-100 rounded-lg mb-6 sm:mb-8 overflow-hidden">
                  <img
                    src={post.seoMeta.ogImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>

            {/* Article Content with Enhanced Syntax Highlighting */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:scroll-mt-20">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => (
                    <h1
                      id={String(children).toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}
                      className="scroll-mt-20"
                      {...props}
                    >
                      {children}
                    </h1>
                  ),
                  h2: ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => (
                    <h2
                      id={String(children).toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}
                      className="scroll-mt-20"
                      {...props}
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => (
                    <h3
                      id={String(children).toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}
                      className="scroll-mt-20"
                      {...props}
                    >
                      {children}
                    </h3>
                  ),
                  code: (props: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
                    const { inline, className, children } = props;
                    if (inline) {
                      return (
                        <code
                          className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono border"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    // Extract language from className (e.g. language-js)
                    const match = /language-(\w+)/.exec(className || '');
                    return (
                      <div className="relative group">
                        <CodeHighlight
                          code={String(children).replace(/\n$/, '')}
                          language={match ? match[1] : 'javascript'}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600"
                          onClick={() => {
                            navigator.clipboard.writeText(String(children));
                            showToast.success('Code copied to clipboard!');
                          }}
                        >
                          Copy
                        </Button>
                      </div>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Article Footer */}
            <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 not-prose">
              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary-50 text-xs sm:text-sm">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mb-6 sm:mb-8">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Avatar size={isBelow('sm') ? 'md' : 'lg'} className="mx-auto sm:mx-0">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">About {post.author.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        {post.author.bio || 'Passionate writer and developer sharing insights about modern web development.'}
                      </p>
                      <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-4">
                        <Button variant="outline" size="sm">Follow</Button>
                        <Button variant="ghost" size="sm">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Article Stats - Responsive layout */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 rounded-lg space-y-4 sm:space-y-0">
                <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                    <span className="font-medium text-sm sm:text-base">{post.stats.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                    <span className="font-medium text-sm sm:text-base">{post.stats.comments}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    <span className="font-medium text-sm sm:text-base">{post.stats.shares}</span>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  size={isBelow('sm') ? 'sm' : 'md'}
                  onClick={() => showToast.success('Post liked!')}
                  className="w-full sm:w-auto"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Like this post
                </Button>
              </div>
            </footer>
          </article>

          {/* Comments Section */}
          <BlogCommentSection postId={post.id} />
        </div>

        {/* Right Sidebar - Table of Contents (Desktop only) */}
        {isAbove('lg') && (
          <div className="lg:col-span-3">
            <BlogSidebar 
              type="tableOfContents"
              currentPost={post}
            />
          </div>
        )}
      </div>

      {/* Mobile Navigation Sidebar - Show categories on mobile */}
      {isBelow('lg') && (
        <div className="mt-8 sm:mt-12">
          <BlogSidebar 
            type="navigation"
            currentPost={post}
            relatedPosts={relatedPosts}
          />
        </div>
      )}

      {/* Related Posts - Responsive grid */}
      {relatedPosts.length > 0 && (
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedPosts.map(relatedPost => (
              <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={relatedPost.seoMeta.ogImage || 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <span>{formatDate(relatedPost.publishedAt)}</span>
                    <span>{relatedPost.readingTime} min read</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};