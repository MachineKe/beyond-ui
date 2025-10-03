import React from 'react';
import { Package, Users, DollarSign, Eye, TrendingUp, Star, ShoppingCart } from 'lucide-react';
import { Button } from '../../Button';
import { Card, CardContent } from '../../Card';
import { Badge } from '../../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../../Avatar';
import { StatsCard } from '../../StatsCard';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';

export interface MarketplaceDashboardProps {
  featuredProducts: Product[];
  trendingProducts: Product[];
  recentlyViewed: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onViewAllProducts: () => void;
  className?: string;
}

/**
 * Marketplace dashboard component showing overview, featured products, and vendor spotlight
 * Extracted from main marketplace component for better modularity
 */
export const MarketplaceDashboard: React.FC<MarketplaceDashboardProps> = ({
  featuredProducts,
  trendingProducts,
  recentlyViewed,
  onProductClick,
  onAddToCart,
  onViewAllProducts,
  className = '',
}) => {
  const categories = [
    { name: 'Electronics', count: 156, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Fashion', count: 234, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Home & Garden', count: 178, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Sports', count: 145, image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const vendors = [
    { name: 'TechWorld Store', rating: 4.8, products: 89, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=64' },
    { name: 'Fashion Hub', rating: 4.6, products: 76, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=64' },
    { name: 'Home Essentials', rating: 4.7, products: 65, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=64' },
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Featured Categories */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>
          <Button variant="outline" onClick={onViewAllProducts}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
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
          <Button variant="outline" onClick={onViewAllProducts}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard
                product={product}
                onProductClick={onProductClick}
                onAddToCart={onAddToCart}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Spotlight */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
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
              <div key={product.id} className="w-full">
                <ProductCard
                  product={product}
                  onProductClick={onProductClick}
                  onAddToCart={onAddToCart}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};