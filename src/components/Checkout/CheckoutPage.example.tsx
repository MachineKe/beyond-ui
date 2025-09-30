import React, { useState } from 'react';
import { CheckoutPage } from './CheckoutPage';
import type { CartItem, Address, PaymentInfo } from './types';

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

const demoAddress: Address = {
  name: '',
  street: '',
  city: '',
  zip: '',
  country: '',
};

const demoPayment: PaymentInfo = {
  cardNumber: '',
  expiry: '',
  cvv: '',
  name: '',
};

export const CheckoutPageExample: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(demoCart);
  const [address, setAddress] = useState<Address>(demoAddress);
  const [payment, setPayment] = useState<PaymentInfo>(demoPayment);

  return (
    <CheckoutPage
      cartItems={cart}
      address={address}
      payment={payment}
      onUpdateCart={(id, qty) =>
        setCart(cart => cart.map(item => item.id === id ? { ...item, quantity: qty } : item))
      }
      onUpdateAddress={setAddress}
      onUpdatePayment={setPayment}
      onPlaceOrder={() => alert('Order placed!')}
      onApplyCoupon={code => alert(`Coupon applied: ${code}`)}
    />
  );
};