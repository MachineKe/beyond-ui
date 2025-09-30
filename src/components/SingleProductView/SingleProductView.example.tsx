import React from 'react';
import { SingleProductView, ProductData } from './SingleProductView';

const demoProduct: ProductData = {
  id: 'prod-001',
  name: 'Premium Wireless Headphones',
  description:
    'Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium materials.',
  images: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  ],
  price: 299.99,
  oldPrice: 399.99,
  discount: '25% OFF',
  inStock: true,
  features: [
    'Active Noise Cancellation',
    '30-Hour Battery Life',
    'Premium Build Quality',
    'Bluetooth 5.2',
    'Fast Charging',
  ],
  colors: ['Black', 'White', 'Blue'],
  reviews: [
    {
      user: 'Alice',
      avatar: '',
      rating: 5,
      comment: 'Amazing sound quality and battery life!',
      date: '2025-09-01',
    },
    {
      user: 'Bob',
      avatar: '',
      rating: 4,
      comment: 'Very comfortable, but wish it had more color options.',
      date: '2025-09-10',
    },
  ],
};

export const SingleProductViewExample: React.FC = () => (
  <SingleProductView
    product={demoProduct}
    onAddToCart={(id) => alert(`Added ${id} to cart`)}
    onWishlist={(id) => alert(`Wishlisted ${id}`)}
    onShare={(id) => alert(`Shared ${id}`)}
    showReviews
    showColorOptions
  />
);