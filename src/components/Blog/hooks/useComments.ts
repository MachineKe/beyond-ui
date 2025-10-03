import { useState, useCallback, useMemo } from 'react';
import type { BlogComment } from '../types';
import { sampleBlogComments } from '../data/sampleData';
import { showToast } from '../../Toast';

export interface UseCommentsProps {
  postId: string;
}

export interface UseCommentsReturn {
  comments: BlogComment[];
  loading: boolean;
  error: string | null;
  addComment: (content: string, parentId?: string) => Promise<void>;
  likeComment: (commentId: string) => void;
  dislikeComment: (commentId: string) => void;
  reportComment: (commentId: string) => void;
  deleteComment: (commentId: string) => void;
  getCommentCount: () => number;
}

/**
 * Custom hook for managing blog comments
 * Handles comment CRUD operations, moderation, and nested replies
 */
export const useComments = ({ postId }: UseCommentsProps): UseCommentsReturn => {
  const [comments, setComments] = useState<BlogComment[]>(
    sampleBlogComments.filter(comment => comment.postId === postId)
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Organize comments into tree structure
  const organizedComments = useMemo(() => {
    const commentMap = new Map<string, BlogComment>();
    const rootComments: BlogComment[] = [];

    // First pass: create map of all comments
    comments.forEach(comment => {
      commentMap.set(comment.id, { ...comment, replies: [] });
    });

    // Second pass: organize into tree structure
    comments.forEach(comment => {
      const commentWithReplies = commentMap.get(comment.id)!;
      
      if (comment.parentId) {
        const parent = commentMap.get(comment.parentId);
        if (parent) {
          parent.replies = parent.replies || [];
          parent.replies.push(commentWithReplies);
        }
      } else {
        rootComments.push(commentWithReplies);
      }
    });

    return rootComments;
  }, [comments]);

  const addComment = useCallback(async (content: string, parentId?: string) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newComment: BlogComment = {
        id: `c${Date.now()}`,
        postId,
        parentId,
        author: {
          id: 'current-user',
          name: 'Current User',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64',
        },
        content,
        createdAt: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
        isModerated: false,
        isReported: false,
      };

      setComments(prev => [...prev, newComment]);
      showToast.success('Comment added successfully!');
    } catch (err) {
      setError('Failed to add comment');
      showToast.error('Failed to add comment');
    } finally {
      setLoading(false);
    }
  }, [postId]);

  const likeComment = useCallback((commentId: string) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
    showToast.success('Comment liked!');
  }, []);

  const dislikeComment = useCallback((commentId: string) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === commentId
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : comment
      )
    );
  }, []);

  const reportComment = useCallback((commentId: string) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === commentId
          ? { ...comment, isReported: true }
          : comment
      )
    );
    showToast.info('Comment reported for moderation');
  }, []);

  const deleteComment = useCallback((commentId: string) => {
    setComments(prev => prev.filter(comment => comment.id !== commentId));
    showToast.info('Comment deleted');
  }, []);

  const getCommentCount = useCallback(() => {
    return comments.length;
  }, [comments.length]);

  return {
    comments: organizedComments,
    loading,
    error,
    addComment,
    likeComment,
    dislikeComment,
    reportComment,
    deleteComment,
    getCommentCount,
  };
};