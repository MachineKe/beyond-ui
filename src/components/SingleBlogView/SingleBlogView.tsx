import React from 'react';
import {
  PageLayout,
  PageHeader,
  PageLayoutContent,
  PageContent,
  PageSidebar,
  PageFooter,
} from '../PageLayout';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Input } from '../Input';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Calendar, Mail, Tag } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface BlogAuthor {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface BlogPost {
  title: string;
  content: React.ReactNode;
  date: string;
  readTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  author: BlogAuthor;
  relatedPosts?: { title: string; date: string; href?: string }[];
}

export interface SingleBlogViewProps {
  post: BlogPost;
  className?: string;
}

export const SingleBlogView: React.FC<SingleBlogViewProps> = ({ post, className }) => (
  <PageLayout variant="blog" maxWidth="xl" className={cn(className)}>
    <PageHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>
                {post.author.name ? post.author.name[0] : 'A'}
              </AvatarFallback>
            </div>
            <span className="font-bold text-xl">Blog</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary-600">Categories</a>
            <a href="#" className="text-gray-700 hover:text-primary-600">About</a>
          </nav>
        </div>
      </div>
    </PageHeader>

    <PageLayoutContent layout="sidebar" spacing="lg">
      {/* Main Content */}
      <PageContent maxWidth="full" className="lg:flex-1">
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              {post.categories?.map((cat, i) => (
                <Badge key={cat} variant={i === 0 ? 'default' : 'outline'}>
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Avatar size="sm">
                  {post.author.avatar ? (
                    <AvatarImage src={post.author.avatar} />
                  ) : (
                    <AvatarFallback>
                      {post.author.name ? post.author.name[0] : 'A'}
                    </AvatarFallback>
                  )}
                </Avatar>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              {post.readTime && <span>{post.readTime}</span>}
            </div>
          </header>
          {post.featuredImage && (
            <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
              <img
                src={post.featuredImage}
                alt="Featured"
                className="object-cover h-full w-full rounded"
              />
            </div>
          )}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </article>
        {/* Author Bio */}
        {post.author.bio && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <Avatar size="lg">
                {post.author.avatar ? (
                  <AvatarImage src={post.author.avatar} />
                ) : (
                  <AvatarFallback>
                    {post.author.name ? post.author.name[0] : 'A'}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{post.author.name}</h3>
                <p className="text-gray-600 mb-3">{post.author.bio}</p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">Follow</Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageContent>
      {/* Sidebar */}
      <PageSidebar position="right" width="md">
        <div className="space-y-6">
          {/* Search */}
          <Card>
            <CardHeader>
              <CardTitle>Search</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Search articles..." />
            </CardContent>
          </Card>
          {/* Categories */}
          {post.categories && (
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {post.categories.map((cat) => (
                    <div key={cat} className="flex items-center justify-between">
                      <a href="#" className="text-gray-700 hover:text-primary-600">
                        {cat}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          {/* Related Posts */}
          {post.relatedPosts && (
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {post.relatedPosts.map((rel, idx) => (
                    <div key={idx}>
                      <a
                        href={rel.href || '#'}
                        className="text-gray-900 hover:text-primary-600 font-medium block mb-1"
                      >
                        {rel.title}
                      </a>
                      <p className="text-sm text-gray-500">{rel.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          {/* Tags */}
          {post.tags && (
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary-50">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </PageSidebar>
    </PageLayoutContent>
    <PageFooter variant="minimal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600">&copy; 2024 Blog. All rights reserved.</p>
      </div>
    </PageFooter>
  </PageLayout>
);