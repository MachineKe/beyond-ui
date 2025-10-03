import React, { useState } from 'react';
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Zap,
  Shield,
  Truck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  ThumbsUp
} from 'lucide-react';
import { Button } from '../Button';
import { Card, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Input } from '../Input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { showToast } from '../Toast';
import type { Product, Review } from './types';
import { sampleProducts, sampleReviews } from './data/sampleData';
import { useScrollToTop } from './hooks/useScrollToTop';

interface SingleProductViewProps {
  product?: Product;
  reviews?: Review[];
  relatedProducts?: Product[];
  onAddToCart?: (product: Product, quantity: number) => void;
  onBuyNow?: (product: Product, quantity: number) => void;
}

export const SingleProductView: React.FC<SingleProductViewProps> = ({
  product,
  reviews,
  relatedProducts,
  onAddToCart,
  onBuyNow,
}) => {
  const productsData = sampleProducts;
  const reviewsData = sampleReviews;

  // Fallbacks for backward compatibility
  // Defensive: If product is undefined, show a fallback UI instead of crashing
  if (!product && (!productsData || productsData.length === 0)) {
    return <div className="text-red-600">Product not found.</div>;
  }
  const productData = product ?? productsData[0];
  const reviewsList = reviews ?? reviewsData;
  const relatedProductsList = relatedProducts ?? productsData.slice(1, 5);
  
  // Defensive guards and fallbacks
  const images = Array.isArray(productData.images) && productData.images.length > 0
    ? productData.images
    : ["/images/placeholder-product.png"];
  const specifications = productData.specifications && Object.keys(productData.specifications).length > 0
    ? productData.specifications
    : { "Info": "No specifications available" };
  const vendor = productData.vendor && productData.vendor.name
    ? productData.vendor
    : { id: "unknown", name: "Unknown Vendor", rating: 0, logo: undefined };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedTab, setSelectedTab] = useState('description');

  // Scroll to top on product change/mount
  useScrollToTop([productData?.id]);

  const handleAddToCart = () => {
    onAddToCart?.(productData, quantity);
    showToast.success(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    onBuyNow?.(productData, quantity);
    showToast.info('Redirecting to checkout...');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast.success('Product link copied to clipboard!');
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === productData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? productData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/" className="hover:text-primary-600">Home</a>
        <span>/</span>
        <a href="/products" className="hover:text-primary-600">Products</a>
        <span>/</span>
        <a href={`/category/${productData.category.toLowerCase()}`} className="hover:text-primary-600">
          {productData.category}
        </a>
        <span>/</span>
        <span className="text-gray-900">{productData.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          {/* Main Image */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={images[selectedImageIndex] ?? "/images/placeholder-product.png"}
              alt={productData.name}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            {productData.discount && (
              <Badge variant="danger" className="absolute top-4 left-4">
                -{productData.discount}%
              </Badge>
            )}
          </div>

          {/* Thumbnail Images */}
          {images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index
                      ? 'border-primary-500'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          {/* Vendor */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm text-gray-600">Sold by</span>
            <div className="flex items-center space-x-2">
              {vendor.logo ? (
                <Avatar size="sm">
                  <AvatarImage src={vendor.logo} />
                  <AvatarFallback>{vendor.name[0]}</AvatarFallback>
                </Avatar>
              ) : (
                <Avatar size="sm">
                  <AvatarFallback>{vendor.name[0]}</AvatarFallback>
                </Avatar>
              )}
              <span className="font-medium text-primary-600">{vendor.name}</span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{vendor.rating}</span>
              </div>
            </div>
          </div>

          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData.name}</h1>

          {/* Rating and Reviews */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.floor(productData.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-lg font-medium text-gray-900 ml-2">
                {productData.rating}
              </span>
            </div>
            <span className="text-gray-600">({productData.reviewCount} reviews)</span>
            <Badge variant={productData.inStock ? 'success' : 'danger'}>
              {productData.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">
                ${productData.price.toFixed(2)}
              </span>
              {productData.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${productData.originalPrice.toFixed(2)}
                </span>
              )}
              {productData.discount && (
                <Badge variant="danger">Save {productData.discount}%</Badge>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">{productData.description}</p>

          {/* Quantity and Actions */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-900">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-50 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-0 focus:ring-0"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={!productData.inStock}
                className="flex-1"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleBuyNow}
                disabled={!productData.inStock}
                className="flex-1"
              >
                <Zap className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="flex-1"
              >
                <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </Button>
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Truck className="h-4 w-4 text-green-600" />
              <span>Free shipping</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <RotateCcw className="h-4 w-4 text-blue-600" />
              <span>30-day returns</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-purple-600" />
              <span>2-year warranty</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-600" />
              <span>Authentic product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({reviewsList.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {productData.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This premium product offers exceptional quality and performance, 
                    designed to meet the highest standards. With advanced features and 
                    reliable construction, it's perfect for both professional and personal use.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-600">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              {/* Reviews Summary */}
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          {productData.rating}
                        </span>
                        <div>
                          <div className="flex items-center space-x-1 mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-5 w-5 ${
                                  star <= Math.floor(productData.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-600">
                            Based on {productData.reviewCount} reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button variant="primary" className="w-full">
                        Write a Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Individual Reviews */}
              {reviewsList.map((review: Review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={review.userAvatar} />
                        <AvatarFallback>{review.userName[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-gray-900">{review.userName}</span>
                          {review.verified && (
                            <Badge variant="success" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star: number) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                        <p className="text-gray-600 mb-4">{review.comment}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Helpful ({review.helpful})</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProductsList.map((relatedProduct: Product) => (
            <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                  src={Array.isArray(relatedProduct.images) && relatedProduct.images.length > 0
                    ? relatedProduct.images[0]
                    : "/images/placeholder-product.png"}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">
                    {relatedProduct.rating} ({relatedProduct.reviewCount})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${relatedProduct.price.toFixed(2)}
                  </span>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};