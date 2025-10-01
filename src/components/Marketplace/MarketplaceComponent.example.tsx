import { MarketplaceComponent } from './MarketplaceComponent';
import type { Product, CartItem, FilterOptions } from "./types";



const MarketplaceSection = () => {
  const myProducts: Product[] = [
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
    {
      id: "p3",
      name: "Custom Tablet",
      description: "A high-end tablet for professionals.",
      price: 499.99,
      originalPrice: 699.99,
      discount: 15,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.6,
      reviewCount: 28,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["tablet", "electronics", "premium"],
      vendor: { id: "v3", name: "MyVendor", rating: 4.7, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    {
      id: "p4",
      name: "Custom Watch",
      description: "A high-end watch for professionals.",
      price: 299.99,
      originalPrice: 399.99,
      discount: 10,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.5,
      reviewCount: 22,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["watch", "electronics", "premium"],
      vendor: { id: "v4", name: "MyVendor", rating: 4.6, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    {
      id: "p5",
      name: "Custom Headphones",
      description: "A high-end headphones for professionals.",
      price: 199.99,
      originalPrice: 299.99,
      discount: 15,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.4,
      reviewCount: 18,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["headphones", "electronics", "premium"],
      vendor: { id: "v5", name: "MyVendor", rating: 4.5, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    {
      id: "p6",
      name: "Custom Keyboard",
      description: "A high-end keyboard for professionals.",
      price: 149.99,
      originalPrice: 199.99,
      discount: 20,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.3,
      reviewCount: 15,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["keyboard", "electronics", "premium"],
      vendor: { id: "v6", name: "MyVendor", rating: 4.4, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    {
      id: "p7",
      name: "Custom Mouse",
      description: "A high-end mouse for professionals.",
      price: 99.99,
      originalPrice: 149.99,
      discount: 25,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.2,
      reviewCount: 12,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["mouse", "electronics", "premium"],
      vendor: { id: "v7", name: "MyVendor", rating: 4.3, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    {
      id: "p8",
      name: "Custom Speaker",
      description: "A high-end speaker for professionals.",
      price: 299.99,
      originalPrice: 399.99,
      discount: 10,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.1,
      reviewCount: 10,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["speaker", "electronics", "premium"],
      vendor: { id: "v8", name: "MyVendor", rating: 4.2, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
    {
      id: "p9",
      name: "Custom Headset",
      description: "A high-end headset for professionals.",
      price: 199.99,
      originalPrice: 299.99,
      discount: 15,
      images: ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
      category: "Electronics",
      brand: "MyBrand",
      rating: 4.0,
      reviewCount: 8,
      inStock: true,
      specifications: { CPU: "Snapdragon 865", RAM: "8GB", Storage: "256GB" },
      tags: ["headset", "electronics", "premium"],
      vendor: { id: "v9", name: "MyVendor", rating: 4.1, logo: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg" }
    },
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
    // ...more products
  ];
  
  // Example cart state
  const myCart: CartItem[] = [
    { product: myProducts[0], quantity: 1 }
  ];
  
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
    cartItems={myCart}
    filters={myFilters}
    onAddToCart={(product, quantity) => {
      // Your add-to-cart logic here
      console.log("Add to cart:", product, quantity);
    }}
    onProductClick={product => {
      // Your product click logic here
      console.log("Product clicked:", product);
    }}
    // ...other props as needed
  />
  );
}


export default MarketplaceSection;
