import React, { useState, useMemo } from 'react';
import {
  PageLayout,
  PageHeader,
  PageLayoutContent,
  PageFooter,
} from '../PageLayout';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Input } from '../Input';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Calendar } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { cn } from '../../utils/cn';

export interface BlogFeedPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  author: {
    name: string;
    avatar?: string;
  };
}

export interface BlogFeedViewProps {
  posts: BlogFeedPost[];
  onPostClick?: (id: string) => void;
  enableSearch?: boolean;
  className?: string;
}

export const BlogFeedView: React.FC<BlogFeedViewProps> = ({
  posts,
  onPostClick,
  enableSearch = true,
  className,
}) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const filteredPosts = useMemo(() => {
    if (!debouncedSearch) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (p.categories && p.categories.some((c) => c.toLowerCase().includes(debouncedSearch.toLowerCase())))
    );
  }, [posts, debouncedSearch]);

  return (
    <PageLayout variant="centered" maxWidth="xl" className={cn(className)}>
      <PageHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="font-bold text-xl">Blog Feed</span>
          {enableSearch && (
            <Input
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64"
            />
          )}
        </div>
      </PageHeader>
      <PageLayoutContent layout="centered" spacing="lg">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredPosts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No blog posts found.
            </div>
          ) : (
            filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col h-full cursor-pointer hover:shadow-lg transition"
                onClick={() => onPostClick && onPostClick(post.id)}
              >
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="object-cover h-40 w-full rounded-t"
                  />
                )}
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex items-center space-x-2 mb-2">
                    {post.categories?.map((cat, i) => (
                      <Badge key={cat} variant={i === 0 ? 'default' : 'outline'}>
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-1">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center space-x-2 mt-auto">
                    <Avatar size="sm">
                      {post.author.avatar ? (
                        <AvatarImage src={post.author.avatar} />
                      ) : (
                        <AvatarFallback>
                          {post.author.name ? post.author.name[0] : 'A'}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <span className="text-xs text-gray-700">{post.author.name}</span>
                    <Calendar className="h-4 w-4 text-gray-400 ml-2" />
                    <span className="text-xs text-gray-500">{post.date}</span>
                    {post.readTime && (
                      <span className="text-xs text-gray-500 ml-2">{post.readTime}</span>
                    )}
                  </div>
                </CardContent>
                <div className="flex flex-wrap gap-1 p-2">
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))
          )}
        </div>
      </PageLayoutContent>
      <PageFooter variant="minimal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2024 Blog. All rights reserved.</p>
        </div>
      </PageFooter>
    </PageLayout>
  );
};