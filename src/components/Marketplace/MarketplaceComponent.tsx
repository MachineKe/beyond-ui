import React from 'react';
import { sampleProducts } from './data/sampleData';
import { MarketplaceHeader } from './components/MarketplaceHeader';
import { MarketplaceDashboard } from './components/MarketplaceDashboard';
import { MarketplaceSidebar } from './MarketplaceSidebar';
import { AllProductsView } from './AllProductsView';
import { SingleProductView } from './SingleProductView';
import { CheckoutCompact } from './CheckoutCompact';
import { useMarketplaceState } from './hooks/useMarketplaceState';
import { useCart } from './hooks/useCart';
import { useProductNavigation } from './hooks/useProductNavigation';
import { useSearch } from './hooks/useSearch';
import type { Product } from './types';

export interface MarketplaceComponentProps {
  userRole?: 'buyer' | 'seller' | 'admin';
  onProductClick?: (product: Product) => void;
  className?: string;
}

/**
 * Main marketplace component orchestrating all marketplace functionality
 * Refactored to use modular components and custom hooks for better maintainability
 */
export const MarketplaceComponent: React.FC<MarketplaceComponentProps> = ({
  userRole = 'buyer',
  onProductClick,
  className = '',
}) => {
  // State management hook
  const {
    sidebarCollapsed,
    currentView,
    selectedProduct,
    searchQuery,
    cartItems,
    showCheckout,
    filters,
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
  } = useMarketplaceState();

  // Cart management hook
  const {
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    isInCart,
    getCartItem,
  } = useCart({ cartItems, setCartItems });

  // Navigation hook
  const {
    navigateToProduct,
    navigateToProducts,
    navigateToDashboard,
    navigateToCheckout,
  } = useProductNavigation({
    setSelectedProduct,
    setCurrentView,
    onProductClick,
  });

  // Search hook
  const {
    searchResults,
    isSearching,
    handleSearch,
    clearSearch,
  } = useSearch({
    products: sampleProducts,
    searchQuery,
    setSearchQuery,
    setCurrentView,
  });

  // Derived data
  const featuredProducts = sampleProducts.slice(0, 4);
  const trendingProducts = sampleProducts.slice(4, 8);
  const recentlyViewed = sampleProducts.slice(8, 12);
  const cartItemCount = getCartItemCount();

  // Event handlers
  const handleCartClick = () => {
    setShowCheckout(!showCheckout);
  };

  const handleCheckoutComplete = (items: any[]) => {
    clearCart();
    setShowCheckout(false);
  };

  const handleBuyNow = (product: Product, quantity: number) => {
    addToCart(product, quantity);
    setShowCheckout(true);
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header */}
      <MarketplaceHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        cartItemCount={cartItemCount}
        onCartClick={handleCartClick}
        onMenuToggle={toggleSidebar}
        userRole={userRole}
      />

      <div className="flex">
        {/* Sidebar */}
        {(currentView === 'products' || currentView === 'dashboard') && (
          <MarketplaceSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearFilters={resetFilters}
            collapsed={sidebarCollapsed}
            onToggleCollapse={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {currentView === 'dashboard' && (
            <MarketplaceDashboard
              featuredProducts={featuredProducts}
              trendingProducts={trendingProducts}
              recentlyViewed={recentlyViewed}
              onProductClick={navigateToProduct}
              onAddToCart={addToCart}
              onViewAllProducts={navigateToProducts}
            />
          )}
          
          {currentView === 'products' && (
            <AllProductsView
              onProductClick={navigateToProduct}
              onAddToCart={addToCart}
            />
          )}
          
          {currentView === 'product' && selectedProduct && (
            <SingleProductView
              productId={selectedProduct.id}
              onAddToCart={addToCart}
              onBuyNow={handleBuyNow}
            />
          )}
        </main>

        {/* Checkout Sidebar */}
        {showCheckout && (
          <div className="fixed right-4 top-20 z-50">
            <CheckoutCompact
              cartItems={cartItems}
              onClose={() => setShowCheckout(false)}
              onCheckout={handleCheckoutComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
};