import { useState, useCallback, useEffect } from 'react';
import type { TableOfContentsItem } from '../types';

export interface UseBlogNavigationReturn {
  tableOfContents: TableOfContentsItem[];
  activeSection: string;
  scrollToSection: (anchor: string) => void;
  generateTableOfContents: (content: string) => void;
}

/**
 * Custom hook for blog navigation and table of contents
 * Handles smooth scrolling and active section tracking
 */
export const useBlogNavigation = (): UseBlogNavigationReturn => {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
  const [activeSection, setActiveSection] = useState('');

  // Generate table of contents from markdown content
  const generateTableOfContents = useCallback((content: string) => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const toc: TableOfContentsItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const anchor = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');

      toc.push({
        id: `toc-${toc.length}`,
        title,
        level,
        anchor,
      });
    }

    setTableOfContents(toc);
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(anchor);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headings = tableOfContents.map(item => ({
        anchor: item.anchor,
        element: document.getElementById(item.anchor),
      })).filter(item => item.element);

      let currentActive = '';
      
      for (const heading of headings) {
        const rect = heading.element!.getBoundingClientRect();
        if (rect.top <= 100) {
          currentActive = heading.anchor;
        } else {
          break;
        }
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents, activeSection]);

  return {
    tableOfContents,
    activeSection,
    scrollToSection,
    generateTableOfContents,
  };
};