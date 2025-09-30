import React, { useState } from 'react';
import {
  PageLayout,
  PageHeader,
  PageLayoutContent,
  PageFooter,
} from '../PageLayout';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card } from '../Card';
import { Input } from '../Input';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Modal } from '../Modal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { Star, ShoppingCart, Heart, Share2, CheckCircle } from 'lucide-react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useToggle } from '../../hooks/useToggle';
import { cn } from '../../utils/cn';

export interface ProductReview {
  user: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ProductData {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  oldPrice?: number;
  discount?: string;
  inStock: boolean;
  features: string[];
  colors?: string[];
  reviews?: ProductReview[];
}

export interface SingleProductViewProps {
  product: ProductData;
  onAddToCart?: (productId: string) => void;
  onWishlist?: (productId: string) => void;
  onShare?: (productId: string) => void;
  showReviews?: boolean;
  showColorOptions?: boolean;
  className?: string;
}

export const SingleProductView: React.FC<SingleProductViewProps> = ({
  product,
  onAddToCart,
  onWishlist,
  onShare,
  showReviews = true,
  showColorOptions = true,
  className,
}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [imageModalOpen, toggleImageModal] = useToggle(false);
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0] : undefined
  );
  const { currentBreakpoint, isBelow } = useBreakpoint();
  const isMobile = isBelow('md');

  return (
    <PageLayout variant="product" maxWidth="xl" className={cn(className)}>
      {/* Header */}
      <PageHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-primary-600" />
              <span className="font-bold text-xl">Store</span>
            </div>
            <div className="flex items-center space-x-4">
              <Input placeholder="Search products..." className="w-64" />
              <Button variant="outline">Cart</Button>
            </div>
          </div>
        </div>
      </PageHeader>

      {/* Product Content */}
      <PageLayoutContent layout="centered" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div
              className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center cursor-pointer"
              onClick={toggleImageModal}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="object-contain h-64 w-64 mx-auto"
                />
              ) : (
                <div className="text-center text-gray-500">
                  <ShoppingCart className="h-16 w-16 mx-auto mb-2" />
                  <p>Product Image</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <div
                  key={img}
                  className={cn(
                    'aspect-square bg-gray-100 rounded border-2 border-transparent hover:border-primary-500 cursor-pointer',
                    selectedImage === img && 'border-primary-500'
                  )}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="object-cover h-full w-full rounded"
                  />
                </div>
              ))}
            </div>
            <Modal open={imageModalOpen} onOpenChange={toggleImageModal}>
              <div className="flex items-center justify-center p-4">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="object-contain h-96 w-96"
                />
              </div>
            </Modal>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant={product.inStock ? 'success' : 'danger'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>
              <Badge variant="outline">Free Shipping</Badge>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      'h-5 w-5',
                      product.reviews && product.reviews.length > 0
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    )}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                ({product.reviews ? product.reviews.length : 0} reviews)
              </span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <Badge variant="danger" className="ml-2">
                  {product.discount}
                </Badge>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {showColorOptions && product.colors && product.colors.length > 0 && (
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={cn(
                          'px-4 py-2 border border-gray-300 rounded-lg hover:border-primary-500 focus:border-primary-500',
                          selectedColor === color && 'border-primary-500'
                        )}
                        onClick={() => setSelectedColor(color)}
                        type="button"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex space-x-4 mb-6">
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                onClick={() => onAddToCart && onAddToCart(product.id)}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onWishlist && onWishlist(product.id)}
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onShare && onShare(product.id)}
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs for Details/Reviews */}
        <div className="mt-12">
          {(() => {
            const [tabValue, setTabValue] = useState('details');
            return (
              <Tabs value={tabValue} onValueChange={setTabValue}>
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  {showReviews && <TabsTrigger value="reviews">Reviews</TabsTrigger>}
                </TabsList>
                <TabsContent value="details">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Product Details
                    </h4>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </TabsContent>
                {showReviews && (
                  <TabsContent value="reviews">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Customer Reviews
                      </h4>
                      {product.reviews && product.reviews.length > 0 ? (
                        <div className="space-y-6">
                          {product.reviews.map((review, idx) => (
                            <Card key={idx} className="p-4">
                              <div className="flex items-center space-x-3 mb-2">
                                <Avatar size="sm">
                                  {review.avatar ? (
                                    <AvatarImage src={review.avatar} />
                                  ) : (
                                    <AvatarFallback>
                                      {review.user[0]}
                                    </AvatarFallback>
                                  )}
                                </Avatar>
                                <span className="font-medium text-gray-900">
                                  {review.user}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {review.date}
                                </span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={cn(
                                      'h-4 w-4',
                                      review.rating >= star
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    )}
                                  />
                                ))}
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                      )}
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            );
          })()}
        </div>
      </PageLayoutContent>

      {/* Footer */}
      <PageFooter variant="simple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2024 Store. All rights reserved.</p>
        </div>
      </PageFooter>
    </PageLayout>
  );
};