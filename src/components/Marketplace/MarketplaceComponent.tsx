import React from 'react';
import { sampleProducts } from './data/sampleData';
import { MarketplaceHeader } from './components/MarketplaceHeader';
import { MarketplaceDashboard } from './components/MarketplaceDashboard';
import { MarketplaceSidebar } from './MarketplaceSidebar';
import { AllProductsView } from './AllProductsView';
import { SingleProductView } from './SingleProductView';
import { CheckoutCompact } from './CheckoutCompact';
import { CheckoutComponent } from './CheckoutComponent';
import { Modal } from '../Modal/Modal';
import { useMarketplaceState } from './hooks/useMarketplaceState';
import { useCart } from './hooks/useCart';
import { useProductNavigation } from './hooks/useProductNavigation';
import { useSearch } from './hooks/useSearch';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import type { Product, CartItem, FilterOptions } from './types';
import { sanitizeProduct } from "./utils/sanitizeProduct";


export interface MarketplaceComponentProps {
  userRole?: 'buyer' | 'seller' | 'admin';
  products?: Product[];
  cartItems?: CartItem[];
  filters?: FilterOptions;
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product, quantity?: number) => void;
  onRemoveFromCart?: (productId: string) => void;
  onFiltersChange?: (filters: FilterOptions) => void;
  onClearFilters?: () => void;
  className?: string;
}

/**
 * Main marketplace component orchestrating all marketplace functionality
 * Refactored to use modular components and custom hooks for better maintainability
 */
export const MarketplaceComponent: React.FC<MarketplaceComponentProps> = ({
  userRole = 'buyer',
  products,
  cartItems: cartItemsProp,
  filters: filtersProp,
  onProductClick,
  onAddToCart,
  onRemoveFromCart,
  onFiltersChange,
  onClearFilters,
  className = '',
}) => {
  // Responsive sidebar initial state (mobile = collapsed)
  const { currentBreakpoint, isBelow } = useBreakpoint();
  const [sidebarInitialized, setSidebarInitialized] = React.useState(false);

  // State management hook (fallbacks for backward compatibility)
  const {
    sidebarCollapsed,
    currentView,
    selectedProduct,
    searchQuery,
    cartItems: cartItemsState,
    showCheckout,
    filters: filtersState,
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

  // On mount, collapse sidebar if mobile and not already initialized
  React.useEffect(() => {
    if (!sidebarInitialized && isBelow('md')) {
      setSidebarCollapsed(true);
      setSidebarInitialized(true);
    } else if (!sidebarInitialized) {
      setSidebarInitialized(true);
    }
  }, [sidebarInitialized, isBelow, setSidebarCollapsed]);

  // State for full checkout modal
  const [showFullCheckoutModal, setShowFullCheckoutModal] = React.useState(false);

  // Use props if provided, otherwise fallback to internal state/sample data
  
  const rawProductsData: Product[] = products ?? sampleProducts;
  const productsData: Product[] = Array.isArray(rawProductsData)
    ? rawProductsData.map(sanitizeProduct)
    : [];
  const cartItems = cartItemsProp ?? cartItemsState;
  const filters = filtersProp ?? filtersState;

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
    products: productsData,
    searchQuery,
    setSearchQuery,
    setCurrentView,
  });

  // Derived data
  const featuredProducts = productsData.slice(0, 4);
  const trendingProducts = productsData.slice(4, 8);
  const recentlyViewed = productsData.slice(8, 12);
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
    (onAddToCart ?? addToCart)(product, quantity);
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
            onFiltersChange={onFiltersChange ?? setFilters}
            onClearFilters={onClearFilters ?? resetFilters}
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
              onAddToCart={onAddToCart ?? addToCart}
              onViewAllProducts={navigateToProducts}
            />
          )}
          
          {currentView === 'products' && (
            <AllProductsView
              onProductClick={navigateToProduct}
              onAddToCart={onAddToCart ?? addToCart}
              products={productsData}
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={resetFilters}
            />
          )}
          
          {currentView === 'product' && selectedProduct && (
            <SingleProductView
              product={
                (() => {
                  const found = productsData.find((p: Product) => String(p.id).trim() === String(selectedProduct.id).trim());
                  if (!found) {
                    console.error(
                      "MarketplaceComponent: No product found for selectedProduct.id:",
                      selectedProduct.id,
                      "Available ids:",
                      productsData.map((p: Product) => p.id)
                    );
                  }
                  return found;
                })()
              }
              onAddToCart={onAddToCart ?? addToCart}
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
              onViewFullCheckout={() => {
                setShowFullCheckoutModal(true);
                setShowCheckout(false);
              }}
            />
          </div>
        )}

        {/* Full Checkout Modal */}
        <Modal
          open={showFullCheckoutModal}
          onOpenChange={(open) => setShowFullCheckoutModal(open)}
          size="xl"
        >
          <CheckoutComponent
            cartItems={cartItems}
            onOrderComplete={() => {
              clearCart();
              setShowFullCheckoutModal(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};