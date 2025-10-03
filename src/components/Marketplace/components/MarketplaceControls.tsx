import { Search, Filter, Grid2x2 as Grid, List } from 'lucide-react';
import { Button } from '../../Button';
import { Input } from '../../Input';

export interface MarketplaceControlsProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  shouldFocusSearch?: boolean;
  sortBy: string;
  onSortChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onShowFilters: () => void;
  sortOptions: { value: string; label: string }[];
  className?: string;
}

import React, { useRef, useEffect } from 'react';

export const MarketplaceControls: React.FC<MarketplaceControlsProps> = ({
  searchQuery,
  onSearchChange,
  shouldFocusSearch,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  onShowFilters,
  sortOptions,
  className = '',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocusSearch && inputRef.current) {
      inputRef.current.focus();
      // Move cursor to end
      const val = inputRef.current.value;
      inputRef.current.value = '';
      inputRef.current.value = val;
    }
  }, [shouldFocusSearch]);

  return (
    <div className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:space-x-4 mt-2 lg:mt-0 w-full sm:w-auto ${className}`}>
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          ref={inputRef}
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 w-full sm:w-64"
        />
      </div>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 bg-white w-full sm:w-auto"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="flex items-center bg-gray-100 rounded-lg p-1 w-full sm:w-auto">
        <Button
          variant={viewMode === 'grid' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('grid')}
          className="flex-1 sm:flex-none"
        >
          <Grid className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === 'list' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('list')}
          className="flex-1 sm:flex-none"
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="outline"
        onClick={onShowFilters}
        className="sm:w-auto w-full lg:hidden"
      >
        <Filter className="mr-2 h-4 w-4" />
        Filters
      </Button>
    </div>
  );
};