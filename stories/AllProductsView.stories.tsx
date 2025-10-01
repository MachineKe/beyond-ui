import React, { useState } from "react";
import { AllProductsView } from "../src/components/Marketplace/AllProductsView";
import type { Product, FilterOptions } from "../src/components/Marketplace/types";

export default {
  title: "Marketplace/AllProductsView",
  component: AllProductsView,
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

const sampleProducts: Product[] = [
  {
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
  },
  {
    id: "2",
    name: "Smart Watch",
    brand: "Apple",
    description: "Latest Apple Watch with fitness tracking.",
    price: 399.99,
    originalPrice: 449.99,
    discount: 11,
    rating: 4.8,
    reviewCount: 210,
    images: [
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400",
    ],
    category: "electronics",
    vendor: { id: "v2", name: "Apple Store", rating: 4.9 },
    inStock: true,
    specifications: {},
    tags: [],
  },
];

const defaultFilters: FilterOptions = {
  categories: [],
  brands: [],
  vendors: [],
  priceRange: [0, 1000],
  rating: 0,
  inStock: false,
};

export const Default = () => {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <AllProductsView
        products={sampleProducts}
        filters={filters}
        onFiltersChange={setFilters}
        onClearFilters={() => setFilters(defaultFilters)}
      />
    </div>
  );
};

export const Mobile = () => {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <div style={{ maxWidth: 375, margin: "0 auto" }}>
      <AllProductsView
        products={sampleProducts}
        filters={filters}
        onFiltersChange={setFilters}
        onClearFilters={() => setFilters(defaultFilters)}
      />
    </div>
  );
};

Mobile.parameters = {
  viewport: { defaultViewport: "mobile1" },
};

export const Tablet = () => {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <div style={{ maxWidth: 768, margin: "0 auto" }}>
      <AllProductsView
        products={sampleProducts}
        filters={filters}
        onFiltersChange={setFilters}
        onClearFilters={() => setFilters(defaultFilters)}
      />
    </div>
  );
};

Tablet.parameters = {
  viewport: { defaultViewport: "tablet" },
};