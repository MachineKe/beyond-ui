import React from "react";
import { ProductCard } from "../src/components/Marketplace/components/ProductCard";
import type { Product } from "../src/components/Marketplace/types";

export default {
  title: "Marketplace/ProductCard",
  component: ProductCard,
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
  argTypes: {
    onProductClick: { action: "productClick" },
    onAddToCart: { action: "addToCart" },
    onQuickView: { action: "quickView" },
    onToggleWishlist: { action: "toggleWishlist" },
    isWishlisted: { control: "boolean" },
    showQuickActions: { control: "boolean" },
    className: { control: "text" },
  },
};

const sampleProduct: Product = {
  id: "1",
  name: "Wireless Headphones",
  brand: "Sony",
  description: "High-quality wireless headphones with noise cancellation.",
  price: 199.99,
  originalPrice: 249.99,
  discount: 20,
  rating: 4.7,
  reviewCount: 128,
  images: [
    "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=400",
  ],
  category: "electronics",
  vendor: { id: "v1", name: "TechWorld Store", rating: 4.8 },
  inStock: true,
  specifications: {},
  tags: [],
};

export const Default = (args) => (
  <div style={{ maxWidth: 320 }}>
    <ProductCard {...args} product={sampleProduct} />
  </div>
);

Default.args = {
  isWishlisted: false,
  showQuickActions: true,
  className: "",
};

export const Mobile = (args) => (
  <div style={{ maxWidth: 375 }}>
    <ProductCard {...args} product={sampleProduct} />
  </div>
);

Mobile.parameters = {
  viewport: { defaultViewport: "mobile1" },
};

export const Tablet = (args) => (
  <div style={{ maxWidth: 768 }}>
    <ProductCard {...args} product={sampleProduct} />
  </div>
);

Tablet.parameters = {
  viewport: { defaultViewport: "tablet" },
};

export const OutOfStock = (args) => (
  <div style={{ maxWidth: 320 }}>
    <ProductCard
      {...args}
      product={{ ...sampleProduct, inStock: false }}
      isWishlisted={true}
    />
  </div>
);

OutOfStock.args = {
  showQuickActions: true,
  className: "",
};