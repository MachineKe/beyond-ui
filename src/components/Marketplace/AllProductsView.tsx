import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid2x2 as Grid, List, Star, ShoppingCart } from 'lucide-react';
import { MarketplaceControls } from './components/MarketplaceControls';
import { Button } from '../Button';
import { Input } from '../Input';
import { Card, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from '../Modal';
import { Checkbox } from '../Checkbox';
import { showToast } from '../Toast';
import type { Product, FilterOptions, SortOption } from './types';
import { sampleProducts } from './data/sampleData';
import { ProductCard } from './components/ProductCard';

interface AllProductsViewProps {
  products?: Product[];
  filters: FilterOptions;
  searchQuery: string;
  setSearchQuery?: (query: string) => void;
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

const sortOptions: SortOption[] = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' },
  { value: 'popular', label: 'Most Popular' },
];

export const AllProductsView: React.FC<AllProductsViewProps> = ({
  products,
  filters: filtersProp,
  searchQuery,
  setSearchQuery,
  onProductClick,
  onAddToCart,
  onFiltersChange,
  onClearFilters,
}) => {
  const productsData = products ?? sampleProducts;
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  // Use filters and handlers from props only
  const filters = filtersProp;

  const itemsPerPage = 12;

  // Get unique filter options from products
  const filterOptions = useMemo(() => {
    const categories = [...new Set(productsData.map((p: Product) => p.category))];
    const brands = [...new Set(productsData.map((p: Product) => p.brand))];
    const vendors = [...new Set(productsData.map((p: Product) => p.vendor.name))];

    return { categories, brands, vendors };
  }, [productsData]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter((product: Product) => {
      // Search query
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Price range
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }

      // In stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }

      // Vendor filter
      if (filters.vendors.length > 0 && !filters.vendors.includes(product.vendor.name)) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a: Product, b: Product) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a: Product, b: Product) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a: Product, b: Product) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        filtered.sort((a: Product, b: Product) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'popular':
        filtered.sort((a: Product, b: Product) => b.reviewCount - a.reviewCount);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [productsData, searchQuery, filters, sortBy]);

  // Paginate products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleFilterChange = (filterType: keyof FilterOptions, value: any) => {
    const newFilters = {
      ...filters,
      [filterType]: value,
    };
    onFiltersChange(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    onClearFilters();
    setCurrentPage(1);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
        showToast.info('Removed from wishlist');
      } else {
        newWishlist.add(productId);
        showToast.success('Added to wishlist');
      }
      return newWishlist;
    });
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart?.(product);
    showToast.success(`${product.name} added to cart!`);
  };

  // Remove local ProductCard in favor of reusable ProductCard

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {productsData.length} products
          </p>
        </div>
        
        {/* Search and Controls */}
        <MarketplaceControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery ? setSearchQuery : () => {}}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onShowFilters={() => setShowFilters(true)}
          sortOptions={sortOptions}
        />
      </div>

      <div className="flex gap-8">

        {/* Products Grid */}
        <div className="flex-1">
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button variant="outline" onClick={handleClearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className={`grid gap-3 sm:gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
              }`}>
                {paginatedProducts.map((product: Product) => (
                  <div className="w-full max-w-xs mx-auto sm:max-w-none" key={product.id}>
                    <ProductCard
                      product={product}
                      onProductClick={onProductClick}
                      onAddToCart={handleAddToCart}
                      onQuickView={() => setQuickViewProduct(product)}
                      onToggleWishlist={toggleWishlist}
                      isWishlisted={wishlist.has(product.id)}
                      showQuickActions={true}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mt-8 sm:mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'primary' : 'outline'}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    );
                  })}
                  
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <Modal open={showFilters} onOpenChange={setShowFilters}>
        <ModalHeader>
          <ModalTitle>Filters</ModalTitle>
        </ModalHeader>
        <ModalContent>
          {/* Same filter content as sidebar but in modal */}
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
              <div className="space-y-2">
                {(filterOptions.categories as string[]).map((category, idx) => (
                  <label key={category} className="flex items-center space-x-2">
                    <Checkbox
                      checked={filters.categories.includes(category)}
                      onChange={(e) => {
                        const alreadyChecked = filters.categories.includes(category);
                        const newCategories = e.target.checked
                          ? alreadyChecked
                            ? filters.categories
                            : [...filters.categories, category]
                          : filters.categories.filter((c: string) => c !== category);
                        handleFilterChange('categories', newCategories);
                      }}
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Brands */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
              <div className="space-y-2">
                {(filterOptions.brands as string[]).map((brand, idx) => (
                  <label key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      checked={filters.brands.includes(brand)}
                      onChange={(e) => {
                        const alreadyChecked = filters.brands.includes(brand);
                        const newBrands = e.target.checked
                          ? alreadyChecked
                            ? filters.brands
                            : [...filters.brands, brand]
                          : filters.brands.filter((b: string) => b !== brand);
                        handleFilterChange('brands', newBrands);
                      }}
                    />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Vendors */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Vendors</h4>
              <div className="space-y-2">
                {(filterOptions.vendors as string[]).map((vendor, idx) => (
                  <label key={vendor} className="flex items-center space-x-2">
                    <Checkbox
                      checked={filters.vendors.includes(vendor)}
                      onChange={(e) => {
                        const alreadyChecked = filters.vendors.includes(vendor);
                        const newVendors = e.target.checked
                          ? alreadyChecked
                            ? filters.vendors
                            : [...filters.vendors, vendor]
                          : filters.vendors.filter((v: string) => v !== vendor);
                        handleFilterChange('vendors', newVendors);
                      }}
                    />
                    <span className="text-sm text-gray-700">{vendor}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={handleClearFilters}>
            Clear All
          </Button>
          <Button variant="primary" onClick={() => setShowFilters(false)}>
            Apply Filters
          </Button>
        </ModalFooter>
      </Modal>

      {/* Quick View Modal */}
      <Modal open={!!quickViewProduct} onOpenChange={() => setQuickViewProduct(null)} size="lg">
        {quickViewProduct && (
          <>
            <ModalHeader>
              <ModalTitle>{quickViewProduct.name}</ModalTitle>
            </ModalHeader>
            <ModalContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={quickViewProduct.images[0]}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">
                      {quickViewProduct.rating} ({quickViewProduct.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${quickViewProduct.price.toFixed(2)}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${quickViewProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{quickViewProduct.description}</p>
                  <Badge variant={quickViewProduct.inStock ? 'success' : 'danger'} className="mb-4">
                    {quickViewProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>
              </div>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline" onClick={() => onProductClick?.(quickViewProduct)}>
                View Details
              </Button>
              <Button 
                variant="primary" 
                onClick={() => handleAddToCart(quickViewProduct)}
                disabled={!quickViewProduct.inStock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </ModalFooter>
          </>
        )}
      </Modal>
    </div>
  );
};