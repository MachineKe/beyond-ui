import React from 'react';
import { Modal } from '../Modal';
import { Card } from '../Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Input } from '../Input';
import { Spinner } from '../Spinner';
import { Alert } from '../Alert';
import { cn } from '../../utils/cn';

import type { CartItem } from './types';

export interface CheckoutSidebarProps {
  cartItems: CartItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateQuantity?: (itemId: string, quantity: number) => void;
  onRemoveItem?: (itemId: string) => void;
  onApplyCoupon?: (code: string) => void;
  onProceedToCheckout?: () => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

export const CheckoutSidebar: React.FC<CheckoutSidebarProps> = ({
  cartItems,
  open,
  onOpenChange,
  onUpdateQuantity,
  onRemoveItem,
  onApplyCoupon,
  onProceedToCheckout,
  loading,
  error,
  className,
}) => {
  const [coupon, setCoupon] = React.useState('');
  const [applying, setApplying] = React.useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleApplyCoupon = () => {
    setApplying(true);
    onApplyCoupon?.(coupon);
    setTimeout(() => setApplying(false), 500);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} size="md">
      <Card className={cn('w-[350px] max-w-full p-4', className)}>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {loading && (
          <div className="flex justify-center my-4">
            <Spinner />
          </div>
        )}
        {error && (
          <Alert variant="danger" className="mb-4">
            {error}
          </Alert>
        )}
        {cartItems.length === 0 ? (
          <div className="text-gray-500 text-center py-8">Your cart is empty.</div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="flex items-center p-2">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="object-contain h-12 w-12" />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} x
                    <Input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={e =>
                        onUpdateQuantity?.(item.id, Number(e.target.value))
                      }
                      className="w-12 mx-2 inline-block"
                    />
                    {item.discount && (
                      <Badge variant="danger" className="ml-1">{item.discount}</Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveItem?.(item.id)}
                  aria-label="Remove"
                >
                  &times;
                </Button>
              </Card>
            ))}
          </div>
        )}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Subtotal</span>
            <span className="font-bold text-lg">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Input
              placeholder="Coupon code"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              className="flex-1"
              disabled={applying}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleApplyCoupon}
              disabled={applying || !coupon}
            >
              {applying ? <Spinner size="sm" /> : 'Apply'}
            </Button>
          </div>
          <Button
            variant="primary"
            className="w-full"
            onClick={onProceedToCheckout}
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </Button>
        </div>
      </Card>
    </Modal>
  );
};