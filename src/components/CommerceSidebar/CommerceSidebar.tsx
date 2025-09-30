import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Button } from '../Button';
import { cn } from '../../utils/cn';

export interface CommerceSidebarProduct {
  id: string;
  name: string;
  image?: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  inStock: boolean;
  categories?: string[];
  href?: string;
}

export interface CommerceSidebarProps {
  products: CommerceSidebarProduct[];
  title?: string;
  onProductClick?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  className?: string;
}

export const CommerceSidebar: React.FC<CommerceSidebarProps> = ({
  products,
  title = 'Featured Products',
  onProductClick,
  onAddToCart,
  className,
}) => (
  <Card className={cn('space-y-4', className)}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {products.length === 0 ? (
          <div className="text-gray-500 text-center py-4">No products found.</div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center space-x-3 cursor-pointer hover:bg-primary-50 rounded px-2 py-2 transition"
              onClick={() => onProductClick && onProductClick(product.id)}
            >
              <Avatar size="sm">
                {product.image ? (
                  <AvatarImage src={product.image} />
                ) : (
                  <AvatarFallback>
                    {product.name ? product.name[0] : 'P'}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">{product.name}</div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span className={product.inStock ? 'text-success-600' : 'text-danger-600'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  {product.discount && (
                    <Badge variant="danger">{product.discount}</Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-xs mt-1">
                  <span className="font-bold text-primary-700">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="line-through text-gray-400">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                {product.categories && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.categories.map((cat) => (
                      <Badge key={cat} variant="outline" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={e => {
                  e.stopPropagation();
                  onAddToCart && onAddToCart(product.id);
                }}
                disabled={!product.inStock}
                aria-label="Add to cart"
              >
                +
              </Button>
            </div>
          ))
        )}
      </div>
    </CardContent>
  </Card>
);