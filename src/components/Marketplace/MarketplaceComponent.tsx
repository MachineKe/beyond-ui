import React, { useState } from 'react';
import { Search, ShoppingCart, User, Bell, Menu, TrendingUp, Star, Eye, Package, DollarSign, Users, BarChart3, Filter, Grid2x2 as Grid, List } from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { StatsCard } from '../StatsCard';
import { showToast } from '../Toast';
import { MarketplaceSidebar } from './MarketplaceSidebar';
import { AllProductsView } from './AllProductsView';
import { SingleProductView } from './SingleProductView';
import { CheckoutCompact } from './CheckoutCompact';
import type { Product, FilterOptions, CartItem } from './types';
import { sampleProducts } from './data/sampleData';

interface MarketplaceComponentProps {
  userRole?: 'buyer' | 'seller' | 'admin';
  onProductClick?: (product: Product) => void;
}

export const MarketplaceComponent: React.FC<MarketplaceComponentProps> = ({
  userRole = 'buyer',
  onProductClick,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'products' | 'product' | 'checkout'>('dashboard');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    brands: [],
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
    vendors: [],
  });

  const featuredProducts = sampleProducts.slice(0, 4);
  const trendingProducts = sampleProducts.slice(4, 8);
  const recentlyViewed = sampleProducts.slice(8, 12);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    onProductClick?.(product);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
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
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setCurrentView('products');
    }
  };

  const renderHeader = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">MarketPlace</h1>
                <p className="text-xs text-gray-500">Your digital marketplace</p>
              </div>
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCheckout(!showCheckout)}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <Badge 
                    variant="danger" 
                    className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
                  >
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge 
                variant="danger" 
                className="absolute -top-1 -right-1 h-4 w-4 text-xs p-0 flex items-center justify-center"
              >
                3
              </Badge>
            </Button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
              <Avatar size="sm">
                <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Products"
          value="2,543"
          trend={{
            direction: "up",
            value: "+12%",
            label: "from last month"
          }}
          icon={<Package className="h-6 w-6 text-primary-600" />}
        />
        <StatsCard
          title="Active Sellers"
          value="156"
          trend={{
            direction: "up",
            value: "+8%",
            label: "from last month"
          }}
          icon={<Users className="h-6 w-6 text-success-600" />}
        />
        <StatsCard
          title="Total Sales"
          value="$45,231"
          trend={{
            direction: "up",
            value: "+15%",
            label: "from last month"
          }}
          icon={<DollarSign className="h-6 w-6 text-warning-600" />}
        />
        <StatsCard
          title="Page Views"
          value="89,432"
          trend={{
            direction: "up",
            value: "+23%",
            label: "from last month"
          }}
          icon={<Eye className="h-6 w-6 text-danger-600" />}
        />
      </div>

      {/* Featured Categories */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>
          <Button variant="outline" onClick={() => setCurrentView('products')}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Electronics', count: 156, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Fashion', count: 234, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Home & Garden', count: 178, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Sports', count: 145, image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400' },
          ].map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} products</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Button variant="outline" onClick={() => setCurrentView('products')}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <div 
                className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.discount && (
                  <Badge variant="danger" className="absolute top-2 left-2">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Vendor Spotlight */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'TechWorld Store', rating: 4.8, products: 89, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=64' },
            { name: 'Fashion Hub', rating: 4.6, products: 76, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=64' },
            { name: 'Home Essentials', rating: 4.7, products: 65, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=64' },
          ].map((vendor) => (
            <Card key={vendor.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar size="lg" className="mx-auto mb-4">
                  <AvatarImage src={vendor.image} />
                  <AvatarFallback>{vendor.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-gray-900 mb-2">{vendor.name}</h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{vendor.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{vendor.products} products</p>
                <Button variant="outline" size="sm">
                  Visit Store
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentlyViewed.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div 
                  className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {renderHeader()}

      <div className="flex">
        {/* Sidebar */}
        {(currentView === 'products' || currentView === 'dashboard') && (
          <MarketplaceSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearFilters={() => setFilters({
              categories: [],
              brands: [],
              priceRange: [0, 1000],
              rating: 0,
              inStock: false,
              vendors: [],
            })}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {currentView === 'dashboard' && renderDashboard()}
          
          {currentView === 'products' && (
            <AllProductsView
              onProductClick={handleProductClick}
              onAddToCart={handleAddToCart}
            />
          )}
          
          {currentView === 'product' && selectedProduct && (
            <SingleProductView
              productId={selectedProduct.id}
              onAddToCart={handleAddToCart}
              onBuyNow={(product, quantity) => {
                handleAddToCart(product, quantity);
                setShowCheckout(true);
              }}
            />
          )}
        </main>

        {/* Checkout Sidebar */}
        {showCheckout && (
          <div className="fixed right-4 top-20 z-50">
            <CheckoutCompact
              cartItems={cartItems}
              onClose={() => setShowCheckout(false)}
              onCheckout={(items) => {
                showToast.success('Order placed successfully!');
                setCartItems([]);
                setShowCheckout(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};