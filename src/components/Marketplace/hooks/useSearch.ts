import { useState, useCallback, useMemo } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import type { Product } from '../types';

export interface UseSearchProps {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setCurrentView: (view: 'dashboard' | 'products' | 'product' | 'checkout') => void;
}

export interface UseSearchReturn {
  searchResults: Product[];
  isSearching: boolean;
  handleSearch: (query: string) => void;
  clearSearch: () => void;
}

/**
 * Custom hook for search functionality
 * Handles product searching with debouncing and result filtering
 */
export const useSearch = ({
  products,
  searchQuery,
  setSearchQuery,
  setCurrentView,
}: UseSearchProps): UseSearchReturn => {
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const searchResults = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return products;
    }

    const query = debouncedSearchQuery.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [products, debouncedSearchQuery]);

  const handleSearch = useCallback((query: string) => {
    setIsSearching(true);
    setSearchQuery(query);
    
    if (query.trim()) {
      setCurrentView('products');
    }
    
    // Reset searching state after debounce period
    setTimeout(() => setIsSearching(false), 300);
  }, [setSearchQuery, setCurrentView]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setIsSearching(false);
  }, [setSearchQuery]);

  return {
    searchResults,
    isSearching,
    handleSearch,
    clearSearch,
  };
};