import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { cn } from '../../utils/cn';

export interface BlogSidebarPost {
  id: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  categories?: string[];
  href?: string;
}

export interface BlogSidebarProps {
  posts: BlogSidebarPost[];
  title?: string;
  onPostClick?: (id: string) => void;
  className?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  posts,
  title = 'Recent Posts',
  onPostClick,
  className,
}) => (
  <Card className={cn('space-y-4', className)}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-gray-500 text-center py-4">No posts found.</div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center space-x-3 cursor-pointer hover:bg-primary-50 rounded px-2 py-2 transition"
              onClick={() => onPostClick && onPostClick(post.id)}
            >
              <Avatar size="sm">
                {post.author.avatar ? (
                  <AvatarImage src={post.author.avatar} />
                ) : (
                  <AvatarFallback>
                    {post.author.name ? post.author.name[0] : 'A'}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">{post.title}</div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{post.author.name}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                {post.categories && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {post.categories.map((cat) => (
                      <Badge key={cat} variant="outline" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </CardContent>
  </Card>
);