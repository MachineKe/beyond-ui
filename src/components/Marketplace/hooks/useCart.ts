import { useCallback } from 'react';
import { showToast } from '../../Toast';
import type { Product, CartItem } from '../types';

export interface UseCartProps {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[] | ((prev: CartItem[]) => CartItem[])) => void;
}

export interface UseCartReturn {
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  isInCart: (productId: string) => boolean;
  getCartItem: (productId: string) => CartItem | undefined;
}

/**
 * Custom hook for cart management functionality
 * Handles adding, removing, and updating cart items with proper state management
 */
export const useCart = ({ cartItems, setCartItems }: UseCartProps): UseCartReturn => {
  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast.success(`${product.name} added to cart!`);
  }, [setCartItems]);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prev => {
      const item = prev.find(item => item.product.id === productId);
      if (item) {
        showToast.info(`${item.product.name} removed from cart`);
      }
      return prev.filter(item => item.product.id !== productId);
    });
  }, [setCartItems]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }, [setCartItems, removeFromCart]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const isInCart = useCallback((productId: string) => {
    return cartItems.some(item => item.product.id === productId);
  }, [cartItems]);

  const getCartItem = useCallback((productId: string) => {
    return cartItems.find(item => item.product.id === productId);
  }, [cartItems]);

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    isInCart,
    getCartItem,
  };
};