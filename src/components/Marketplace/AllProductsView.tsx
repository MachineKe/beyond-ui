import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid2x2 as Grid, List, Star, Heart, ShoppingCart, Eye, ChevronDown, X } from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Card, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from '../Modal';
import { Checkbox } from '../Checkbox';
import { showToast } from '../Toast';
import type { Product, FilterOptions, SortOption } from './types';
import { sampleProducts } from './data/sampleData';

interface AllProductsViewProps {
  products?: Product[];
  filters?: FilterOptions;
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
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
  onProductClick,
  onAddToCart,
}) => {
  const productsData = products ?? sampleProducts;
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  // Use prop filters if provided, otherwise fallback to internal state
  const [filters, setFilters] = useState<FilterOptions>(
    filtersProp ?? {
      categories: [],
      brands: [],
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      vendors: [],
    }
  );

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
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      vendors: [],
    });
    setSearchQuery('');
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

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <Badge variant="danger" className="absolute top-2 left-2">
            -{product.discount}%
          </Badge>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className="bg-white/80 hover:bg-white"
          >
            <Heart className={`h-4 w-4 ${wishlist.has(product.id) ? 'fill-current text-red-500' : ''}`} />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="bg-white/80 hover:bg-white"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary">Out of Stock</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 
            className="font-medium text-gray-900 line-clamp-2 cursor-pointer hover:text-primary-600"
            onClick={() => onProductClick?.(product)}
          >
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        <Button
          variant="primary"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
          disabled={!product.inStock}
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {productsData.length} products
          </p>
        </div>
        
        {/* Search and Controls */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 bg-white"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="outline"
            onClick={() => setShowFilters(true)}
            className="lg:hidden"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <Button variant="ghost" size="sm" onClick={handleClearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {(filterOptions.categories as string[]).map((category, idx) => (
                    <label key={category} className="flex items-center space-x-2">
                      <Checkbox
                        checked={filters.categories.includes(category)}
                        onChange={(e) => {
                          const newCategories = e.target.checked
                            ? [...filters.categories, category]
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
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
                <div className="space-y-2">
                  {(filterOptions.brands as string[]).map((brand, idx) => (
                    <label key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        checked={filters.brands.includes(brand)}
                        onChange={(e) => {
                          const newBrands = e.target.checked
                            ? [...filters.brands, brand]
                            : filters.brands.filter((b: string) => b !== brand);
                          handleFilterChange('brands', newBrands);
                        }}
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={filters.priceRange[0]}
                      onChange={(e) => handleFilterChange('priceRange', [
                        parseInt(e.target.value) || 0,
                        filters.priceRange[1]
                      ])}
                      className="w-20"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={filters.priceRange[1]}
                      onChange={(e) => handleFilterChange('priceRange', [
                        filters.priceRange[0],
                        parseInt(e.target.value) || 1000
                      ])}
                      className="w-20"
                    />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        checked={filters.rating === rating}
                        onChange={(e) => {
                          handleFilterChange('rating', e.target.checked ? rating : 0);
                        }}
                      />
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-700">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock */}
              <div className="mb-6">
                <label className="flex items-center space-x-2">
                  <Checkbox
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                  />
                  <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

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
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {paginatedProducts.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-12">
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
                        const newCategories = e.target.checked
                          ? [...filters.categories, category]
                          : filters.categories.filter((c: string) => c !== category);
                        handleFilterChange('categories', newCategories);
                      }}
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Add other filter sections here */}
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