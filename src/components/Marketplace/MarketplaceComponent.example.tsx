import React, { useState } from "react";
import { MarketplaceComponent } from './MarketplaceComponent';
import type { Product, CartItem, FilterOptions } from "./types";




const MarketplaceSection = () => {
  const myProducts: Product[] = [
    // Agricultural products
    {
      id: "p1",
      name: "Maize (Corn)",
      description: "High-quality maize, perfect for milling and animal feed. Harvested fresh from local farms.",
      price: 30.00,
      originalPrice: 35.00,
      discount: 14,
      images: ["https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"],
      category: "Cereals",
      brand: "GreenFields Cooperative",
      rating: 4.7,
      reviewCount: 120,
      inStock: true,
      specifications: { Variety: "Hybrid", Moisture: "13%", Weight: "90kg bag" },
      tags: ["maize", "corn", "cereal", "grain"],
      vendor: { id: "v1", name: "GreenFields Cooperative", rating: 4.8, logo: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg" }
    },
    {
      id: "p2",
      name: "Beans",
      description: "Premium dry beans, sorted and cleaned, ready for cooking or resale.",
      price: 80.00,
      originalPrice: 90.00,
      discount: 11,
      images: ["https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"],
      category: "Legumes",
      brand: "Harvesters Union",
      rating: 4.6,
      reviewCount: 85,
      inStock: true,
      specifications: { Variety: "Rosecoco", Weight: "50kg bag" },
      tags: ["beans", "legume", "protein"],
      vendor: { id: "v2", name: "Harvesters Union", rating: 4.7, logo: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg" }
    },
    {
      id: "p3",
      name: "Coffee Beans",
      description: "Aromatic Arabica coffee beans, sun-dried and handpicked from Kenyan highlands.",
      price: 400.00,
      originalPrice: 450.00,
      discount: 11,
      images: ["https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg"],
      category: "Beverages",
      brand: "Highland Coffee Growers",
      rating: 4.9,
      reviewCount: 200,
      inStock: true,
      specifications: { Type: "Arabica", Grade: "AA", Weight: "60kg bag" },
      tags: ["coffee", "arabica", "beverage"],
      vendor: { id: "v3", name: "Highland Coffee Growers", rating: 4.9, logo: "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg" }
    },
    {
      id: "p4",
      name: "Tea Leaves",
      description: "Freshly plucked green tea leaves, ideal for export or local processing.",
      price: 250.00,
      originalPrice: 280.00,
      discount: 11,
      images: ["https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg"],
      category: "Beverages",
      brand: "Kericho Tea Estates",
      rating: 4.8,
      reviewCount: 150,
      inStock: true,
      specifications: { Type: "Green Tea", Weight: "50kg sack" },
      tags: ["tea", "green tea", "beverage"],
      vendor: { id: "v4", name: "Kericho Tea Estates", rating: 4.8, logo: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg" }
    },
    {
      id: "p5",
      name: "Rice (Pishori)",
      description: "Aromatic Pishori rice, grown in Mwea, Kenya. Soft, fluffy, and perfect for all meals.",
      price: 120.00,
      originalPrice: 140.00,
      discount: 14,
      images: ["https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"],
      category: "Cereals",
      brand: "Mwea Rice Growers",
      rating: 4.7,
      reviewCount: 90,
      inStock: true,
      specifications: { Variety: "Pishori", Weight: "50kg bag" },
      tags: ["rice", "pishori", "cereal"],
      vendor: { id: "v5", name: "Mwea Rice Growers", rating: 4.7, logo: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg" }
    },
    {
      id: "p6",
      name: "Tomatoes",
      description: "Fresh, juicy tomatoes, handpicked and packed for delivery.",
      price: 50.00,
      originalPrice: 60.00,
      discount: 17,
      images: ["https://images.pexels.com/photos/839725/pexels-photo-839725.jpeg"],
      category: "Vegetables",
      brand: "Sunrise Farms",
      rating: 4.5,
      reviewCount: 60,
      inStock: true,
      specifications: { Variety: "Roma", Weight: "20kg crate" },
      tags: ["tomato", "vegetable", "fresh"],
      vendor: { id: "v6", name: "Sunrise Farms", rating: 4.6, logo: "https://images.pexels.com/photos/839725/pexels-photo-839725.jpeg" }
    },
    {
      id: "p7",
      name: "Potatoes",
      description: "Premium ware potatoes, ideal for chips and home cooking.",
      price: 70.00,
      originalPrice: 80.00,
      discount: 13,
      images: ["https://images.pexels.com/photos/162670/potatoes-vegetables-vegetable-basket-162670.jpeg"],
      category: "Vegetables",
      brand: "Mountain View Farms",
      rating: 4.6,
      reviewCount: 75,
      inStock: true,
      specifications: { Variety: "Shangi", Weight: "50kg bag" },
      tags: ["potato", "vegetable", "root"],
      vendor: { id: "v7", name: "Mountain View Farms", rating: 4.7, logo: "https://images.pexels.com/photos/162670/potatoes-vegetables-vegetable-basket-162670.jpeg" }
    },
    {
      id: "p8",
      name: "Avocados",
      description: "Export-grade Hass avocados, creamy and nutritious, packed for freshness.",
      price: 150.00,
      originalPrice: 170.00,
      discount: 12,
      images: ["https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg"],
      category: "Fruits",
      brand: "Avocado Exporters Ltd",
      rating: 4.8,
      reviewCount: 110,
      inStock: true,
      specifications: { Variety: "Hass", Weight: "10kg carton" },
      tags: ["avocado", "fruit", "export"],
      vendor: { id: "v8", name: "Avocado Exporters Ltd", rating: 4.8, logo: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg" }
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

  // Remove static myFilters, let MarketplaceComponent manage filters state
  return (
    <MarketplaceComponent
      products={myProducts}
      cartItems={cartItems}
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
