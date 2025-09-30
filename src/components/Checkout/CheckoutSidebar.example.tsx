import React, { useState } from 'react';
import { CheckoutSidebar } from './CheckoutSidebar';
import type { CartItem } from './types';

const demoCart: CartItem[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    price: 299.99,
    quantity: 1,
    discount: '10% OFF',
  },
  {
    id: '2',
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    price: 149.99,
    quantity: 2,
  },
];

export const CheckoutSidebarExample: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [cart, setCart] = useState<CartItem[]>(demoCart);

  return (
    <CheckoutSidebar
      cartItems={cart}
      open={open}
      onOpenChange={setOpen}
      onUpdateQuantity={(id, qty) =>
        setCart(cart => cart.map(item => item.id === id ? { ...item, quantity: qty } : item))
      }
      onRemoveItem={id =>
        setCart(cart => cart.filter(item => item.id !== id))
      }
      onApplyCoupon={code => alert(`Coupon applied: ${code}`)}
      onProceedToCheckout={() => alert('Proceeding to checkout')}
    />
  );
};