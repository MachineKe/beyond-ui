import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Star, X, Filter, Sliders, Tag, Store, Grid2x2 as Grid } from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Checkbox } from '../Checkbox';
import { cn } from '../../utils/cn';
import type { FilterOptions } from './types';

interface MarketplaceSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
  className?: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface CategoryNode {
  id: string;
  name: string;
  count: number;
  children?: CategoryNode[];
}

const categoryTree: CategoryNode[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    count: 156,
    children: [
      { id: 'smartphones', name: 'Smartphones', count: 45 },
      { id: 'laptops', name: 'Laptops', count: 32 },
      { id: 'headphones', name: 'Headphones', count: 28 },
      { id: 'cameras', name: 'Cameras', count: 21 },
      { id: 'accessories', name: 'Accessories', count: 30 },
    ],
  },
  {
    id: 'clothing',
    name: 'Clothing & Fashion',
    count: 234,
    children: [
      { id: 'mens', name: "Men's Clothing", count: 89 },
      { id: 'womens', name: "Women's Clothing", count: 112 },
      { id: 'shoes', name: 'Shoes', count: 67 },
      { id: 'accessories-fashion', name: 'Fashion Accessories', count: 45 },
    ],
  },
  {
    id: 'home',
    name: 'Home & Garden',
    count: 178,
    children: [
      { id: 'furniture', name: 'Furniture', count: 56 },
      { id: 'decor', name: 'Home Decor', count: 43 },
      { id: 'kitchen', name: 'Kitchen & Dining', count: 38 },
      { id: 'garden', name: 'Garden & Outdoor', count: 41 },
    ],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    count: 145,
    children: [
      { id: 'fitness', name: 'Fitness Equipment', count: 34 },
      { id: 'outdoor', name: 'Outdoor Recreation', count: 52 },
      { id: 'sports-apparel', name: 'Sports Apparel', count: 59 },
    ],
  },
];

const brands = [
  { name: 'Apple', count: 45 },
  { name: 'Samsung', count: 38 },
  { name: 'Nike', count: 67 },
  { name: 'Adidas', count: 54 },
  { name: 'Sony', count: 32 },
  { name: 'LG', count: 28 },
  { name: 'Canon', count: 21 },
  { name: 'Dell', count: 19 },
];

const vendors = [
  { name: 'TechWorld Store', count: 89, rating: 4.8 },
  { name: 'Fashion Hub', count: 76, rating: 4.6 },
  { name: 'Home Essentials', count: 65, rating: 4.7 },
  { name: 'Sports Central', count: 54, rating: 4.5 },
  { name: 'Electronics Plus', count: 43, rating: 4.9 },
];

export const MarketplaceSidebar: React.FC<MarketplaceSidebarProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  className = '',
  collapsed = false,
  onToggleCollapse,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['electronics']));
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['categories', 'price', 'rating', 'brands'])
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const handleFilterChange = (filterType: keyof FilterOptions, value: any) => {
    onFiltersChange({
      ...filters,
      [filterType]: value,
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.categories.length > 0) count += filters.categories.length;
    if (filters.brands.length > 0) count += filters.brands.length;
    if (filters.vendors.length > 0) count += filters.vendors.length;
    if (filters.rating > 0) count += 1;
    if (filters.inStock) count += 1;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) count += 1;
    return count;
  };

  const renderCategoryTree = (categories: CategoryNode[], level = 0) => {
    return categories.map((category) => (
      <div key={category.id} className={cn('', level > 0 && 'ml-4')}>
        <div className="flex items-center justify-between py-1">
          <label className="flex items-center space-x-2 flex-1 cursor-pointer">
            <Checkbox
              checked={filters.categories.includes(category.id)}
              onChange={(e) => {
                const newCategories = e.target.checked
                  ? [...filters.categories, category.id]
                  : filters.categories.filter(c => c !== category.id);
                handleFilterChange('categories', newCategories);
              }}
            />
            <span className="text-sm text-gray-700 flex-1">{category.name}</span>
            <span className="text-xs text-gray-500">({category.count})</span>
          </label>
          {category.children && (
            <button
              onClick={() => toggleCategory(category.id)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {expandedCategories.has(category.id) ? (
                <ChevronDown className="h-3 w-3 text-gray-400" />
              ) : (
                <ChevronRight className="h-3 w-3 text-gray-400" />
              )}
            </button>
          )}
        </div>
        {category.children && expandedCategories.has(category.id) && (
          <div className="mt-1">
            {renderCategoryTree(category.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  if (collapsed) {
    return (
      <div className={cn('w-16 flex-shrink-0 bg-background border-r border-border rounded-xl', className)}>
        <Card className="sticky top-4">
          <CardContent className="p-2">
            <div className="flex flex-col items-center space-y-3">
              {/* Main Filter Icon (Expand) */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Expand filters"
                title="Expand filters"
                onClick={onToggleCollapse}
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-accent focus:ring-2 focus:ring-primary rounded-lg"
              >
                <Filter className="h-5 w-5" />
              </Button>
              {/* Categories */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Categories"
                title="Categories"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-accent focus:ring-2 focus:ring-primary rounded-lg"
                tabIndex={0}
              >
                <Grid className="h-5 w-5" />
              </Button>
              {/* Price */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Price Range"
                title="Price Range"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-accent focus:ring-2 focus:ring-primary rounded-lg"
                tabIndex={0}
              >
                <Tag className="h-5 w-5" />
              </Button>
              {/* Rating */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Customer Rating"
                title="Customer Rating"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-accent focus:ring-2 focus:ring-primary rounded-lg"
                tabIndex={0}
              >
                <Star className="h-5 w-5" />
              </Button>
              {/* Brands */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Brands"
                title="Brands"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-accent focus:ring-2 focus:ring-primary rounded-lg"
                tabIndex={0}
              >
                <Tag className="h-5 w-5" />
              </Button>
              {/* Vendors */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Sellers"
                title="Sellers"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-accent focus:ring-2 focus:ring-primary rounded-lg"
                tabIndex={0}
              >
                <Store className="h-5 w-5" />
              </Button>
              {/* Availability */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Availability"
                title="Availability"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-accent focus:ring-2 focus:ring-primary rounded-lg"
                tabIndex={0}
              >
                <Sliders className="h-5 w-5" />
              </Button>
              {/* Active Filter Count Badge */}
              {getActiveFiltersCount() > 0 && (
                <Badge variant="default" className="text-xs bg-primary text-primary-foreground mt-2">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn('w-80 flex-shrink-0', className)}>
      <Card className="sticky top-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Filter className="h-5 w-5 mr-2" />
              Filters
              {getActiveFiltersCount() > 0 && (
                <Badge variant="default" className="ml-2">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={onClearFilters}>
                Clear All
              </Button>
              {onToggleCollapse && (
                <Button variant="ghost" size="sm" onClick={onToggleCollapse}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Categories */}
          <div>
            <button
              onClick={() => toggleSection('categories')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium text-gray-900 flex items-center">
                <Grid className="h-4 w-4 mr-2" />
                Categories
              </h3>
              {expandedSections.has('categories') ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>
            {expandedSections.has('categories') && (
              <div className="space-y-1">
                {renderCategoryTree(categoryTree)}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div>
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium text-gray-900 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Price Range
              </h3>
              {expandedSections.has('price') ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>
            {expandedSections.has('price') && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange[0]}
                    onChange={(e) => handleFilterChange('priceRange', [
                      parseInt(e.target.value) || 0,
                      filters.priceRange[1]
                    ])}
                    className="w-20 text-sm"
                  />
                  <span className="text-gray-400">-</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [
                      filters.priceRange[0],
                      parseInt(e.target.value) || 1000
                    ])}
                    className="w-20 text-sm"
                  />
                </div>
                
                {/* Quick Price Ranges */}
                <div className="space-y-1">
                  {[
                    { label: 'Under $25', range: [0, 25] },
                    { label: '$25 - $50', range: [25, 50] },
                    { label: '$50 - $100', range: [50, 100] },
                    { label: '$100 - $200', range: [100, 200] },
                    { label: 'Over $200', range: [200, 1000] },
                  ].map((option) => (
                    <label key={option.label} className="flex items-center space-x-2">
                      <Checkbox
                        checked={
                          filters.priceRange[0] === option.range[0] &&
                          filters.priceRange[1] === option.range[1]
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('priceRange', option.range);
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Rating */}
          <div>
            <button
              onClick={() => toggleSection('rating')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium text-gray-900 flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Customer Rating
              </h3>
              {expandedSections.has('rating') ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>
            {expandedSections.has('rating') && (
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
            )}
          </div>

          {/* Brands */}
          <div>
            <button
              onClick={() => toggleSection('brands')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium text-gray-900 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Brands
              </h3>
              {expandedSections.has('brands') ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>
            {expandedSections.has('brands') && (
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={filters.brands.includes(brand.name)}
                        onChange={(e) => {
                          const newBrands = e.target.checked
                            ? [...filters.brands, brand.name]
                            : filters.brands.filter(b => b !== brand.name);
                          handleFilterChange('brands', newBrands);
                        }}
                      />
                      <span className="text-sm text-gray-700">{brand.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">({brand.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Vendors */}
          <div>
            <button
              onClick={() => toggleSection('vendors')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium text-gray-900 flex items-center">
                <Store className="h-4 w-4 mr-2" />
                Sellers
              </h3>
              {expandedSections.has('vendors') ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>
            {expandedSections.has('vendors') && (
              <div className="space-y-2">
                {vendors.map(vendor => (
                  <label key={vendor.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={filters.vendors.includes(vendor.name)}
                        onChange={(e) => {
                          const newVendors = e.target.checked
                            ? [...filters.vendors, vendor.name]
                            : filters.vendors.filter(v => v !== vendor.name);
                          handleFilterChange('vendors', newVendors);
                        }}
                      />
                      <div>
                        <div className="text-sm text-gray-700">{vendor.name}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-500">{vendor.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">({vendor.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Availability */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center">
              <Sliders className="h-4 w-4 mr-2" />
              Availability
            </h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <Checkbox
                  checked={filters.inStock}
                  onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                />
                <span className="text-sm text-gray-700">In Stock Only</span>
              </label>
            </div>
          </div>

          {/* Active Filters Summary */}
          {getActiveFiltersCount() > 0 && (
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">Active Filters</h3>
                <Button variant="ghost" size="sm" onClick={onClearFilters}>
                  Clear All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.categories.map(category => (
                  <Badge key={category} variant="outline" className="text-xs">
                    {category}
                    <button
                      onClick={() => handleFilterChange('categories', 
                        filters.categories.filter(c => c !== category)
                      )}
                      className="ml-1 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.brands.map(brand => (
                  <Badge key={brand} variant="outline" className="text-xs">
                    {brand}
                    <button
                      onClick={() => handleFilterChange('brands', 
                        filters.brands.filter(b => b !== brand)
                      )}
                      className="ml-1 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.rating > 0 && (
                  <Badge variant="outline" className="text-xs">
                    {filters.rating}+ stars
                    <button
                      onClick={() => handleFilterChange('rating', 0)}
                      className="ml-1 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {filters.inStock && (
                  <Badge variant="outline" className="text-xs">
                    In Stock
                    <button
                      onClick={() => handleFilterChange('inStock', false)}
                      className="ml-1 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};