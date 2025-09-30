import React from 'react';
import { AllProductsView } from './AllProductsView';
import { ProductData } from '../SingleProductView/SingleProductView';

const demoProducts: ProductData[] = [
  {
    id: 'prod-001',
    name: 'Premium Wireless Headphones',
    description:
      'Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium materials.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
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
    reviews: [],
  },
  {
    id: 'prod-002',
    name: 'Smart Fitness Watch',
    description:
      'Track your health and fitness with our latest smart watch. Features heart rate monitoring, GPS, and water resistance.',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    ],
    price: 149.99,
    oldPrice: 199.99,
    discount: 'Save $50',
    inStock: true,
    features: [
      'Heart Rate Monitoring',
      'GPS',
      'Water Resistant',
      'Sleep Tracking',
    ],
    colors: ['Black', 'Red'],
    reviews: [],
  },
  {
    id: 'prod-003',
    name: 'Wireless Bluetooth Speaker',
    description:
      'Enjoy music anywhere with our portable Bluetooth speaker. Long battery life and rich sound.',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    ],
    price: 89.99,
    oldPrice: 129.99,
    discount: '30% OFF',
    inStock: false,
    features: [
      'Portable',
      'Long Battery Life',
      'Rich Sound',
      'Bluetooth 5.0',
    ],
    colors: ['Blue', 'Gray'],
    reviews: [],
  },
];

export const AllProductsViewExample: React.FC = () => (
  <AllProductsView
    products={demoProducts}
    onProductClick={(id) => alert(`View product ${id}`)}
    onAddToCart={(id) => alert(`Added ${id} to cart`)}
    onWishlist={(id) => alert(`Wishlisted ${id}`)}
    onShare={(id) => alert(`Shared ${id}`)}
    enableSearch
    enableFilter
    enableSort
  />
);