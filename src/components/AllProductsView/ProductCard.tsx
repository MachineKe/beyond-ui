import React from 'react';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Heart, ShoppingCart, Share2 } from 'lucide-react';
import { ProductData } from '../SingleProductView/SingleProductView';
import { cn } from '../../utils/cn';

export interface ProductCardProps {
  product: ProductData;
  onClick?: () => void;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  onShare?: () => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
  onAddToCart,
  onWishlist,
  onShare,
  className,
}) => (
  <Card
    className={cn(
      'p-4 flex flex-col h-full w-full min-w-0 transition-all',
      // Remove max-w-* to allow grid to control width, and add shadow/rounded for separation
      'shadow-md rounded-lg',
      className
    )}
  >
    <div
      className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center cursor-pointer w-full"
      onClick={onClick}
      title={product.name}
    >
      {product.images && product.images[0] ? (
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-contain w-full h-full max-h-32 max-w-full"
        />
      ) : (
        <ShoppingCart className="h-12 w-12 text-gray-400" />
      )}
    </div>
    <div className="flex items-center space-x-2 mb-2">
      <Badge variant={product.inStock ? 'success' : 'danger'}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </Badge>
      {product.discount && (
        <Badge variant="danger">{product.discount}</Badge>
      )}
    </div>
    <h2 className="text-lg font-bold text-gray-900 mb-1 truncate">{product.name}</h2>
    <p className="text-gray-600 text-sm mb-2 line-clamp-2 break-words">{product.description}</p>
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
      {product.oldPrice && (
        <span className="text-sm text-gray-500 line-through">
          ${product.oldPrice.toFixed(2)}
        </span>
      )}
    </div>
    <div className="mt-auto flex flex-col sm:flex-row gap-2">
      <Button
        variant="primary"
        size="sm"
        className="flex-1"
        onClick={onAddToCart}
        disabled={!product.inStock}
      >
        <ShoppingCart className="mr-1 h-4 w-4" />
        Add
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onWishlist}
        aria-label="Wishlist"
      >
        <Heart className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onShare}
        aria-label="Share"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  </Card>
);