import React from 'react';
import { CommerceSidebar, CommerceSidebarProduct } from './CommerceSidebar';

const demoProducts: CommerceSidebarProduct[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    price: 299.99,
    oldPrice: 399.99,
    discount: '25% OFF',
    inStock: true,
    categories: ['Audio', 'Electronics'],
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    price: 149.99,
    oldPrice: 199.99,
    discount: 'Save $50',
    inStock: true,
    categories: ['Wearables', 'Fitness'],
  },
  {
    id: '3',
    name: 'Wireless Bluetooth Speaker',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    price: 89.99,
    oldPrice: 129.99,
    discount: '30% OFF',
    inStock: false,
    categories: ['Audio', 'Portable'],
  },
];

export const CommerceSidebarExample: React.FC = () => (
  <CommerceSidebar
    products={demoProducts}
    onProductClick={id => alert(`View product ${id}`)}
    onAddToCart={id => alert(`Added ${id} to cart`)}
  />
);