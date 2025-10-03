import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '../../Button';
import { Card, CardContent } from '../../Card';
import { Badge } from '../../Badge';
import type { Product } from '../types';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

export interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isWishlisted?: boolean;
  showQuickActions?: boolean;
  className?: string;
}

/** Quick Actions Subcomponent */
const ProductQuickActions: React.FC<{
  isWishlisted: boolean;
  onToggleWishlist: (e: React.MouseEvent) => void;
  onQuickView: (e: React.MouseEvent) => void;
  isMobile: boolean;
}> = ({ isWishlisted, onToggleWishlist, onQuickView, isMobile }) => (
  <div
    className={`flex ${isMobile ? 'flex-row gap-2 absolute bottom-2 left-2 z-10' : ''}`}
    aria-label="Product quick actions"
  >
    <Button
      variant="ghost"
      size={isMobile ? 'md' : 'sm'}
      onClick={onToggleWishlist}
      className={`bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
        isMobile ? '' : 'opacity-0 group-hover:opacity-100 absolute top-2 right-2'
      }`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      tabIndex={0}
    >
      <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
    </Button>
    <Button
      variant="ghost"
      size={isMobile ? 'md' : 'sm'}
      onClick={onQuickView}
      className={`bg-white/80 hover:bg-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
        isMobile ? '' : 'opacity-0 group-hover:opacity-100 absolute bottom-2 right-2'
      }`}
      aria-label="Quick view"
      tabIndex={0}
    >
      <Eye className="h-5 w-5" />
    </Button>
  </div>
);

/** Overlay Subcomponent */
const ProductOverlay: React.FC<{
  discount?: number;
  inStock: boolean;
}> = ({ discount, inStock }) => (
  <>
    {discount && (
      <Badge variant="danger" className="absolute top-2 left-2 text-xs px-2 py-1">
        -{discount}%
      </Badge>
    )}
    {!inStock && (
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
        <Badge variant="secondary" className="text-xs px-2 py-1">Out of Stock</Badge>
      </div>
    )}
  </>
);

/**
 * Reusable product card component for displaying product information
 * Used across different marketplace views (grid, list, featured, etc.)
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  isWishlisted = false,
  showQuickActions = true,
  className = '',
}) => {
  const { isBelow } = useBreakpoint();
  const isMobile = isBelow('md');

  const handleProductClick = () => {
    onProductClick?.(product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView?.(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist?.(product.id);
  };

  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col max-h-[28rem] ${className}`}
      tabIndex={0}
      aria-label={`Product card for ${product.name}`}
    >
      <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onClick={handleProductClick}
          loading="lazy"
          draggable={false}
        />

        {/* Overlays */}
        <ProductOverlay discount={product.discount} inStock={product.inStock} />

        {/* Quick Actions */}
        {showQuickActions && (
          <ProductQuickActions
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={handleQuickView}
            isMobile={isMobile}
          />
        )}
      </div>

      <CardContent className="p-3 sm:p-4 flex-1 flex flex-col overflow-y-auto">
        <div className="mb-2">
          <h3
            className="font-medium text-gray-900 line-clamp-2 cursor-pointer hover:text-primary-600 text-base sm:text-lg"
            onClick={handleProductClick}
            tabIndex={0}
            aria-label={`View details for ${product.name}`}
          >
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-1">{product.brand}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
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
        </div>

        <div className="mt-auto">
          {/* Add to Cart Button */}
          <Button
            variant="primary"
            size={isMobile ? 'md' : 'sm'}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full"
            aria-label="Add to cart"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};