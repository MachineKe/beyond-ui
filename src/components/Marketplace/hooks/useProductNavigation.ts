import { useCallback } from 'react';
import type { Product } from '../types';

export interface UseProductNavigationProps {
  setSelectedProduct: (product: Product | null) => void;
  setCurrentView: (view: 'dashboard' | 'products' | 'product' | 'checkout') => void;
  onProductClick?: (product: Product) => void;
}

export interface UseProductNavigationReturn {
  navigateToProduct: (product: Product) => void;
  navigateToProducts: () => void;
  navigateToDashboard: () => void;
  navigateToCheckout: () => void;
}

/**
 * Custom hook for handling product navigation and view changes
 * Centralizes navigation logic for the marketplace interface
 */
export const useProductNavigation = ({
  setSelectedProduct,
  setCurrentView,
  onProductClick,
}: UseProductNavigationProps): UseProductNavigationReturn => {
  const navigateToProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    onProductClick?.(product);
  }, [setSelectedProduct, setCurrentView, onProductClick]);

  const navigateToProducts = useCallback(() => {
    setCurrentView('products');
  }, [setCurrentView]);

  const navigateToDashboard = useCallback(() => {
    setCurrentView('dashboard');
  }, [setCurrentView]);

  const navigateToCheckout = useCallback(() => {
    setCurrentView('checkout');
  }, [setCurrentView]);

  return {
    navigateToProduct,
    navigateToProducts,
    navigateToDashboard,
    navigateToCheckout,
  };
};