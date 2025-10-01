import type { Product } from "../types";

/**
 * Ensures a Product object has all required fields and valid defaults.
 * Returns a sanitized copy of the product.
 */
export function sanitizeProduct(product: Partial<Product>): Product {
  return {
    id: product.id ?? "unknown",
    name: product.name ?? "Unnamed Product",
    description: product.description ?? "No description available.",
    price: typeof product.price === "number" ? product.price : 0,
    originalPrice: typeof product.originalPrice === "number" ? product.originalPrice : undefined,
    discount: typeof product.discount === "number" ? product.discount : undefined,
    images: Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : ["https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"],
    category: product.category ?? "Misc",
    brand: product.brand ?? "Unknown",
    rating: typeof product.rating === "number" ? product.rating : 0,
    reviewCount: typeof product.reviewCount === "number" ? product.reviewCount : 0,
    inStock: typeof product.inStock === "boolean" ? product.inStock : false,
    specifications: product.specifications && Object.keys(product.specifications).length > 0
      ? product.specifications
      : { "Info": "No specifications available" },
    tags: Array.isArray(product.tags) ? product.tags : [],
    vendor: product.vendor && product.vendor.name
      ? {
          id: product.vendor.id ?? "unknown",
          name: product.vendor.name,
          rating: typeof product.vendor.rating === "number" ? product.vendor.rating : 0,
          logo: product.vendor.logo,
        }
      : {
          id: "unknown",
          name: "Unknown Vendor",
          rating: 0,
          logo: undefined,
        },
  };
}