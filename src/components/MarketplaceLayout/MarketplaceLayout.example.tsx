import React, { useState } from 'react';
import { MarketplaceLayout } from './MarketplaceLayout';
import { SingleProductView } from '../SingleProductView/SingleProductView';
import type { ProductData } from '../SingleProductView/SingleProductView';
import type { CartItem } from '../Checkout/types';

const demoProducts: ProductData[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience premium sound quality with our latest wireless headphones.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    ],
    price: 299.99,
    oldPrice: 399.99,
    discount: '25% OFF',
    inStock: true,
    features: ['Active Noise Cancellation', '30-Hour Battery Life', 'Premium Build Quality'],
    colors: ['Black', 'White'],
    reviews: [],
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness with our latest smart watch.',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    ],
    price: 149.99,
    oldPrice: 199.99,
    discount: 'Save $50',
    inStock: true,
    features: ['Heart Rate Monitoring', 'GPS', 'Water Resistant'],
    colors: ['Black', 'Red'],
    reviews: [],
  },
];

const demoCart: CartItem[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    price: 299.99,
    quantity: 1,
    discount: '25% OFF',
  },
];

export const MarketplaceLayoutExample: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(demoCart);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);

  return (
    <MarketplaceLayout
      products={demoProducts}
      cartItems={cart}
      selectedProduct={selectedProduct}
      onProductClick={id => {
        const product = demoProducts.find(p => p.id === id);
        if (product) setSelectedProduct(product);
      }}
      onAddToCart={id => {
        const product = demoProducts.find(p => p.id === id);
        if (!product) return;
        setCart(c =>
          c.some(item => item.id === id)
            ? c.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
              )
            : [
                ...c,
                {
                  id: product.id,
                  name: product.name,
                  image: product.images[0],
                  price: product.price,
                  quantity: 1,
                  discount: product.discount,
                },
              ]
        );
      }}
      onRemoveFromCart={id => setCart(c => c.filter(item => item.id !== id))}
      onProceedToCheckout={() => alert('Proceeding to checkout')}
    >
      {selectedProduct ? (
        <SingleProductView
          product={selectedProduct}
          onAddToCart={id => {
            setCart(c =>
              c.some(item => item.id === id)
                ? c.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                  )
                : [
                    ...c,
                    {
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      image: selectedProduct.images[0],
                      price: selectedProduct.price,
                      quantity: 1,
                      discount: selectedProduct.discount,
                    },
                  ]
            );
          }}
          onWishlist={id => alert(`Wishlisted ${id}`)}
          onShare={id => alert(`Shared ${id}`)}
          showReviews
          showColorOptions
        />
      ) : null}
    </MarketplaceLayout>
  );
};