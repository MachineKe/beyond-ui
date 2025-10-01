import React, { useState } from "react";
import { MarketplaceComponent } from './MarketplaceComponent';
import type { Product, CartItem, FilterOptions } from "./types";




const MarketplaceSection = () => {
  const myProducts: Product[] = [
    // ... (same as before)
    {
      id: "p1",
      name: "Custom Laptop",
      description: "A high-end laptop for professionals.",
      price: 1999.99,
      originalPrice: 2499.99,
      discount: 20,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.8,
      reviewCount: 42,
      inStock: true,
      specifications: { CPU: "Intel i9", RAM: "32GB", Storage: "1TB SSD" },
      tags: ["laptop", "electronics", "premium"],
      vendor: { id: "v1", name: "MyVendor", rating: 4.9, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    // ... (rest of products unchanged)
    {
      id: "p2",
      name: "Custom Phone",
      description: "A high-end phone for professionals.",
      price: 999.99,
      originalPrice: 1499.99,
      discount: 25,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.7,
      reviewCount: 35,
      inStock: true,
      specifications: { CPU: "Snapdragon 888", RAM: "16GB", Storage: "512GB" },
      tags: ["phone", "electronics", "premium"],
      vendor: { id: "v2", name: "MyVendor", rating: 4.8, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    // ... (rest of products unchanged)
    {
      id: "p10",
      name: "Custom Monitor",
      description: "A high-end monitor for professionals.",
      price: 499.99,
      originalPrice: 699.99,
      discount: 15,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.0,
      reviewCount: 6,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["monitor", "electronics", "premium"],
      vendor: { id: "v10", name: "MyVendor", rating: 4.1, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
  ];

  // Cart state managed with useState
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add to cart handler
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + (quantity || 1) }
            : item
        );
      }
      return [...prev, { product, quantity: quantity || 1 }];
    });
  };

  // Example filter state (optional)
  const myFilters: FilterOptions = {
    categories: ["Electronics"],
    brands: ["MyBrand"],
    priceRange: [1000, 3000],
    rating: 4,
    inStock: true,
    vendors: ["MyVendor"]
  };

  return (
    <MarketplaceComponent
      products={myProducts}
      cartItems={cartItems}
      filters={myFilters}
      onAddToCart={handleAddToCart}
      onProductClick={product => {
        // Your product click logic here
        console.log("Product clicked:", product);
      }}
      // ...other props as needed
    />
  );
};



export default MarketplaceSection;
