import React from 'react';
import {
  PageLayout,
  PageHeader,
  PageLayoutContent,
  PageSidebar,
} from '../PageLayout';
import { CommerceSidebar } from '../CommerceSidebar/CommerceSidebar';
import { AllProductsView } from '../AllProductsView/AllProductsView';
import { CheckoutSidebar } from '../Checkout/CheckoutSidebar';
import type { CartItem } from '../Checkout/types';
import type { ProductData } from '../SingleProductView/SingleProductView';
import { cn } from '../../utils/cn';

export interface MarketplaceLayoutProps {
  products: ProductData[];
  cartItems: CartItem[];
  cartOpen?: boolean;
  onCartOpenChange?: (open: boolean) => void;
  onProductClick?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  onRemoveFromCart?: (id: string) => void;
  onProceedToCheckout?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const MarketplaceLayout: React.FC<MarketplaceLayoutProps> = ({
  products,
  cartItems,
  cartOpen,
  onCartOpenChange,
  onProductClick,
  onAddToCart,
  onRemoveFromCart,
  onProceedToCheckout,
  children,
  className,
}) => {
  // Sidebar: CommerceSidebar (product list)
  // Main: AllProductsView (product grid/list)
  // Checkout: CheckoutSidebar (cart/checkout)
  // Footer: default

  return (
    <PageLayout variant="centered" maxWidth="xl" className={cn(className)}>
      <PageHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <span className="font-bold text-xl">Marketplace</span>
        </div>
      </PageHeader>
      <PageLayoutContent layout="sidebar" spacing="lg">
        <PageSidebar position="left" width="md">
          <CommerceSidebar
            products={products}
            onProductClick={onProductClick}
            onAddToCart={onAddToCart}
          />
        </PageSidebar>
        <main className="flex-1">
          {children ? (
            children
          ) : (
            <AllProductsView
              products={products}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
            />
          )}
        </main>
        <PageSidebar position="right" width="md">
          <CheckoutSidebar
            cartItems={cartItems}
            open={typeof cartOpen === 'boolean' ? cartOpen : true}
            onOpenChange={onCartOpenChange || (() => {})}
            onRemoveItem={onRemoveFromCart}
            onProceedToCheckout={onProceedToCheckout}
          />
        </PageSidebar>
      </PageLayoutContent>
    </PageLayout>
  );
};