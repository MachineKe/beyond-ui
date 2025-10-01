import { useState, useCallback } from 'react';
import type { Product, FilterOptions, CartItem } from '../types';

export interface MarketplaceState {
  sidebarCollapsed: boolean;
  currentView: 'dashboard' | 'products' | 'product' | 'checkout';
  selectedProduct: Product | null;
  searchQuery: string;
  cartItems: CartItem[];
  showCheckout: boolean;
  filters: FilterOptions;
}

export interface MarketplaceActions {
  setSidebarCollapsed: (collapsed: boolean) => void;
  setCurrentView: (view: MarketplaceState['currentView']) => void;
  setSelectedProduct: (product: Product | null) => void;
  setSearchQuery: (query: string) => void;
  setCartItems: (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => void;
  setShowCheckout: (show: boolean) => void;
  setFilters: (filters: FilterOptions) => void;
  toggleSidebar: () => void;
  clearCart: () => void;
  resetFilters: () => void;
}

const initialFilters: FilterOptions = {
  categories: [],
  brands: [],
  priceRange: [0, 1000],
  rating: 0,
  inStock: false,
  vendors: [],
};

/**
 * Custom hook for managing marketplace state and actions
 * Centralizes all state management for the marketplace interface
 */
export const useMarketplaceState = (): MarketplaceState & MarketplaceActions => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState<MarketplaceState['currentView']>('dashboard');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  return {
    // State
    sidebarCollapsed,
    currentView,
    selectedProduct,
    searchQuery,
    cartItems,
    showCheckout,
    filters,
    // Actions
    setSidebarCollapsed,
    setCurrentView,
    setSelectedProduct,
    setSearchQuery,
    setCartItems,
    setShowCheckout,
    setFilters,
    toggleSidebar,
    clearCart,
    resetFilters,
  };
};