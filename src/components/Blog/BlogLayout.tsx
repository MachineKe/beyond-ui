import React, { useState } from 'react';
import { Menu, X, Search, PenTool, BookOpen, User, Home } from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Badge } from '../Badge';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { cn } from '../../utils/cn';
import type { BlogPost } from './types';

interface BlogLayoutProps {
  children: React.ReactNode;
  currentView?: 'allBlogs' | 'singleBlog' | 'category' | 'author';
  currentPost?: BlogPost;
  onNavigate?: (view: string, data?: any) => void;
  className?: string;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  currentView = 'allBlogs',
  currentPost,
  onNavigate,
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isAbove, isBelow } = useBreakpoint();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onNavigate?.('search', { query });
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'blog', label: 'All Posts', icon: BookOpen, href: '/blog' },
    { id: 'categories', label: 'Categories', icon: PenTool, href: '/blog/categories' },
    { id: 'authors', label: 'Authors', icon: User, href: '/blog/authors' },
  ];

  return (
    <div className={cn('min-h-screen bg-gray-50', className)}>
      {/* Fixed Header with responsive design */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Brand - Responsive sizing */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <PenTool className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg sm:text-xl text-gray-900">Beyond Blog</span>
                <div className="text-xs text-primary-600 font-medium hidden sm:block">Insights & Tutorials</div>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            {isAbove('lg') && (
              <nav className="flex items-center space-x-8">
                {navigationItems.map(item => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            )}

            {/* Search and User - Responsive layout */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search - Hidden on mobile, visible on tablet+ */}
              {isAbove('md') && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 w-48 lg:w-64 text-sm"
                  />
                </div>
              )}

              {/* User Profile - Responsive sizing */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Button variant="outline" size={isBelow('sm') ? 'sm' : 'md'}>
                  <PenTool className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Write</span>
                </Button>
                <Avatar size="sm">
                  <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu - Responsive dropdown */}
          {mobileMenuOpen && isBelow('lg') && (
            <div className="border-t border-gray-200 py-4">
              <div className="space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 text-sm"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map(item => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Page Title for Single Post - Responsive design */}
      {currentView === 'singleBlog' && currentPost && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="text-center">
              <Badge variant="default" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                {currentPost.category}
              </Badge>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {currentPost.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentPost.excerpt}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Responsive padding */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer - Responsive design */}
      <footer className="bg-gray-900 text-white mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <span className="font-bold text-lg sm:text-xl">Beyond Blog</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Sharing insights, tutorials, and stories about modern web development and design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/blog" className="hover:text-white transition-colors">All Posts</a></li>
                <li><a href="/blog/categories" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="/blog/authors" className="hover:text-white transition-colors">Authors</a></li>
                <li><a href="/blog/archive" className="hover:text-white transition-colors">Archive</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Categories</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/blog/development" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="/blog/design" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="/blog/accessibility" className="hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="/blog/performance" className="hover:text-white transition-colors">Performance</a></li>
              </ul>
            </div>

            {/* Newsletter - Responsive form */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Stay Updated</h4>
              <p className="text-gray-300 mb-4 text-xs sm:text-sm">
                Get the latest posts delivered to your inbox.
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
                />
                <Button variant="primary" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
            <p className="text-xs sm:text-sm">&copy; 2024 Beyond Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};