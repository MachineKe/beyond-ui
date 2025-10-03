import React, { useState } from 'react';
import { Search, Filter, Grid2x2 as Grid, List, Calendar, User, Tag, Eye, Heart, MessageCircle, X } from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Skeleton } from '../Skeleton';
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from '../Modal';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useBlog } from './hooks/useBlog';
import type { BlogPost, BlogFilters } from './types';
import { sampleBlogCategories } from './data/sampleData';

interface AllBlogsViewProps {
  onPostClick?: (post: BlogPost) => void;
  className?: string;
}

export const AllBlogsView: React.FC<AllBlogsViewProps> = ({
  onPostClick,
  className = '',
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { isAbove, isBelow } = useBreakpoint();
  
  const {
    posts,
    loading,
    error,
    filters,
    pagination,
    updateFilters,
    clearFilters,
    loadMore,
    searchPosts,
  } = useBlog({ pageSize: 12 });

  const handleFilterChange = (filterType: keyof BlogFilters, value: any) => {
    updateFilters({ [filterType]: value });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Responsive grid columns based on screen size and view mode
  const getGridColumns = () => {
    if (viewMode === 'list') return 'grid-cols-1';
    if (isBelow('sm')) return 'grid-cols-1';
    if (isBelow('lg')) return 'grid-cols-2';
    return 'grid-cols-2 xl:grid-cols-3';
  };

  const BlogPostCard: React.FC<{ post: BlogPost; viewMode: 'grid' | 'list' }> = ({ post, viewMode }) => (
    <Card 
      className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
        viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
      }`}
      onClick={() => onPostClick?.(post)}
    >
      <div className={`${
        viewMode === 'list' 
          ? 'w-full sm:w-64 sm:flex-shrink-0 aspect-video sm:aspect-square' 
          : 'aspect-video'
      } bg-gray-100 rounded-t-lg ${viewMode === 'list' ? 'sm:rounded-l-lg sm:rounded-tr-none' : ''} overflow-hidden`}>
        <img
          src={post.seoMeta.ogImage || 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge 
              variant="primary"
              className="text-xs"
              style={{ backgroundColor: post.category === 'Design' ? '#8b5cf6' : '#3b82f6' }}
            >
              {post.category}
            </Badge>
            {post.featured && (
              <Badge variant="warning" className="text-xs">Featured</Badge>
            )}
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <Avatar size="sm">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">{post.stats.views.toLocaleString()}</span>
                <span className="sm:hidden">{post.stats.views > 999 ? `${Math.floor(post.stats.views/1000)}k` : post.stats.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{post.stats.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{post.stats.comments}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, isBelow('sm') ? 1 : 2).map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {post.tags.length > (isBelow('sm') ? 1 : 2) && (
                <Badge variant="outline" className="text-xs">
                  +{post.tags.length - (isBelow('sm') ? 1 : 2)}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 ${className}`}>
      {/* Header - Responsive layout */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Blog Posts</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover insights, tutorials, and stories from our community
          </p>
        </div>
        
        {/* Search and Controls - Responsive layout */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search posts..."
              value={filters.search}
              onChange={(e) => searchPosts(e.target.value)}
              className="pl-10 w-full sm:w-64"
            />
          </div>
          
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm sm:text-base"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="trending">Trending</option>
          </select>

          {/* View Mode Toggle - Hidden on mobile */}
          {isAbove('sm') && (
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          )}

          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex gap-6 lg:gap-8">
        {/* Filters Sidebar - Fixed on desktop, modal on mobile */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 lg:flex-shrink-0`}>
          <div 
            className="lg:sticky lg:top-4"
            style={{
              maxHeight: isAbove('lg') ? 'calc(100vh - 2rem)' : 'auto',
              overflowY: isAbove('lg') ? 'auto' : 'visible',
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span>Filters</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                    {isBelow('lg') && (
                      <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-sm">Categories</h4>
                  <div className="space-y-2">
                    {sampleBlogCategories.map(category => (
                      <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category.id)}
                          onChange={(e) => {
                            const newCategories = e.target.checked
                              ? [...filters.categories, category.id]
                              : filters.categories.filter(c => c !== category.id);
                            handleFilterChange('categories', newCategories);
                          }}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">{category.name}</span>
                        <Badge variant="outline" className="text-xs ml-auto">
                          {category.postCount}
                        </Badge>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-sm">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'CSS', 'JavaScript', 'Design', 'Performance'].map(tag => (
                      <Badge
                        key={tag}
                        variant={filters.tags.includes(tag) ? 'primary' : 'outline'}
                        className="cursor-pointer text-xs hover:bg-primary-50 transition-colors"
                        onClick={() => {
                          const newTags = filters.tags.includes(tag)
                            ? filters.tags.filter(t => t !== tag)
                            : [...filters.tags, tag];
                          handleFilterChange('tags', newTags);
                        }}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Blog Posts - Responsive grid */}
        <div className="flex-1 min-w-0">
          {loading ? (
            <div className={`grid gap-4 sm:gap-6 ${getGridColumns()}`}>
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <div className="aspect-video bg-gray-100 rounded-t-lg">
                    <Skeleton className="w-full h-full" />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <Skeleton className="h-4 w-20 mb-3" />
                    <Skeleton className="h-6 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-500 mb-4">
                <MessageCircle className="h-12 sm:h-16 w-12 sm:w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Posts</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{error}</p>
              <Button variant="primary" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 sm:h-16 w-12 sm:w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Try adjusting your search or filter criteria
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className={`grid gap-4 sm:gap-6 ${getGridColumns()}`}>
                {posts.map(post => (
                  <BlogPostCard key={post.id} post={post} viewMode={viewMode} />
                ))}
              </div>

              {/* Load More / Pagination - Responsive button */}
              {pagination.hasNext && (
                <div className="text-center mt-8 sm:mt-12">
                  <Button
                    variant="outline"
                    onClick={loadMore}
                    disabled={loading}
                    size={isBelow('sm') ? 'sm' : 'md'}
                    className="w-full sm:w-auto"
                  >
                    {loading ? 'Loading...' : 'Load More Posts'}
                  </Button>
                </div>
              )}

              {/* Results Info */}
              <div className="mt-6 sm:mt-8 text-center text-sm text-gray-600">
                Showing {posts.length} of {pagination.total} posts
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <Modal open={showFilters && isBelow('lg')} onOpenChange={setShowFilters}>
        <ModalHeader>
          <ModalTitle>Filter Posts</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
              <div className="space-y-2">
                {sampleBlogCategories.map(category => (
                  <label key={category.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={(e) => {
                        const newCategories = e.target.checked
                          ? [...filters.categories, category.id]
                          : filters.categories.filter(c => c !== category.id);
                        handleFilterChange('categories', newCategories);
                      }}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {category.postCount}
                    </Badge>
                  </label>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'CSS', 'JavaScript', 'Design', 'Performance'].map(tag => (
                  <Badge
                    key={tag}
                    variant={filters.tags.includes(tag) ? 'primary' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => {
                      const newTags = filters.tags.includes(tag)
                        ? filters.tags.filter(t => t !== tag)
                        : [...filters.tags, tag];
                      handleFilterChange('tags', newTags);
                    }}
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={clearFilters}>
            Clear All
          </Button>
          <Button variant="primary" onClick={() => setShowFilters(false)}>
            Apply Filters
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};