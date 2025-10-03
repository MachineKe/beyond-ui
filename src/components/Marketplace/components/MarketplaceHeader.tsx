import React from 'react';
import { Search, ShoppingCart, Bell, Menu, Package } from 'lucide-react';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Badge } from '../../Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../../Avatar';

export interface MarketplaceHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
  onMenuToggle: () => void;
  userRole?: 'buyer' | 'seller' | 'admin';
  className?: string;
}

/**
 * Marketplace header component with search, cart, and user controls
 * Extracted from main marketplace component for reusability
 */
export const MarketplaceHeader: React.FC<MarketplaceHeaderProps> = ({
  searchQuery,
  onSearchChange,
  cartItemCount,
  onCartClick,
  onMenuToggle,
  userRole = 'buyer',
  className = '',
}) => {
  return (
    <header className={`bg-white border-b border-gray-200 sticky top-0 z-40 ${className}`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">MarketPlace</h1>
                <p className="text-xs text-gray-500">Your digital marketplace</p>
              </div>
            </div>
          </div>

       

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={onCartClick}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="danger" 
                    className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge 
                variant="danger" 
                className="absolute -top-1 -right-1 h-4 w-4 text-xs p-0 flex items-center justify-center"
              >
                3
              </Badge>
            </Button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
              <Avatar size="sm">
                <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};