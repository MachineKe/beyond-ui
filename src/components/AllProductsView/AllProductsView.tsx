import React, { useState, useMemo } from 'react';
import { PageLayout, PageHeader, PageLayoutContent } from '../PageLayout';
import { Input } from '../Input';
import { Select } from '../Select';
import { useDebounce } from '../../hooks/useDebounce';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { cn } from '../../utils/cn';
import { ProductData } from '../SingleProductView/SingleProductView';
import { ProductCard } from './ProductCard';

export interface AllProductsViewProps {
  products: ProductData[];
  onProductClick?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  onWishlist?: (productId: string) => void;
  onShare?: (productId: string) => void;
  enableSearch?: boolean;
  enableFilter?: boolean;
  enableSort?: boolean;
  className?: string;
}

export const AllProductsView: React.FC<AllProductsViewProps> = ({
  products,
  onProductClick,
  onAddToCart,
  onWishlist,
  onShare,
  enableSearch = true,
  enableFilter = true,
  enableSort = true,
  className,
}) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const [sort, setSort] = useState('featured');
  const [filter, setFilter] = useState('all');
  const { currentBreakpoint, isBelow } = useBreakpoint();
  const isMobile = isBelow('md');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products;
    if (debouncedSearch) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    if (filter !== 'all') {
      result = result.filter((p) =>
        p.colors?.includes(filter)
      );
    }
    if (sort === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    // Default: featured (no sort)
    return result;
  }, [products, debouncedSearch, filter, sort]);

  // Collect all colors for filter options
  const allColors = useMemo(() => {
    const colorSet = new Set<string>();
    products.forEach((p) => p.colors?.forEach((c) => colorSet.add(c)));
    return Array.from(colorSet);
  }, [products]);

  return (
    <PageLayout variant="centered" maxWidth="xl" className={cn(className)}>
      <PageHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl">Marketplace</span>
            <div className="flex items-center space-x-4">
              {enableSearch && (
                <Input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-64"
                />
              )}
              {enableFilter && (
                <Select
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                  options={[
                    { value: 'all', label: 'All Colors' },
                    ...allColors.map((c) => ({ value: c, label: c })),
                  ]}
                  className="w-32"
                />
              )}
              {enableSort && (
                <Select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  options={[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-asc', label: 'Price: Low to High' },
                    { value: 'price-desc', label: 'Price: High to Low' },
                  ]}
                  className="w-40"
                />
              )}
            </div>
          </div>
        </div>
      </PageHeader>

      <PageLayoutContent layout="centered" spacing="lg">
        <div
          className={cn(
            'grid gap-8',
            isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          )}
        >
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No products found.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick && onProductClick(product.id)}
                onAddToCart={() => onAddToCart && onAddToCart(product.id)}
                onWishlist={() => onWishlist && onWishlist(product.id)}
                onShare={() => onShare && onShare(product.id)}
              />
            ))
          )}
        </div>
      </PageLayoutContent>
    </PageLayout>
  );
};