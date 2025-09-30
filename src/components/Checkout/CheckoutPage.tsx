import React from 'react';
import { PageLayout, PageHeader, PageLayoutContent, PageFooter } from '../PageLayout';
import { Card } from '../Card';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { Badge } from '../Badge';
import { Spinner } from '../Spinner';
import { Alert } from '../Alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { cn } from '../../utils/cn';

import type { CartItem, Address, PaymentInfo } from './types';

export interface CheckoutPageProps {
  cartItems: CartItem[];
  address: Address;
  payment: PaymentInfo;
  onUpdateCart?: (itemId: string, quantity: number) => void;
  onUpdateAddress?: (address: Address) => void;
  onUpdatePayment?: (payment: PaymentInfo) => void;
  onPlaceOrder?: () => void;
  onApplyCoupon?: (code: string) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cartItems,
  address,
  payment,
  onUpdateCart,
  onUpdateAddress,
  onUpdatePayment,
  onPlaceOrder,
  onApplyCoupon,
  loading,
  error,
  className,
}) => {
  const [tab, setTab] = React.useState('cart');
  const [coupon, setCoupon] = React.useState('');
  const [applying, setApplying] = React.useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleApplyCoupon = () => {
    setApplying(true);
    onApplyCoupon?.(coupon);
    setTimeout(() => setApplying(false), 500);
  };

  return (
    <PageLayout variant="centered" maxWidth="xl" className={cn(className)}>
      <PageHeader>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-bold text-xl">Checkout</span>
        </div>
      </PageHeader>
      <PageLayoutContent layout="centered" spacing="lg">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="cart">Cart</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>
          <TabsContent value="cart">
            <Card className="p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Cart Summary</h2>
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
                              onUpdateCart?.(item.id, Number(e.target.value))
                            }
                            className="w-12 mx-2 inline-block"
                          />
                          {item.discount && (
                            <Badge variant="danger" className="ml-1">{item.discount}</Badge>
                          )}
                        </div>
                      </div>
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
                  onClick={() => setTab('address')}
                  disabled={cartItems.length === 0}
                >
                  Next: Address
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="address">
            <Card className="p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Shipping Address</h2>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  onUpdateAddress?.(address);
                  setTab('payment');
                }}
                className="space-y-4"
              >
                <Input
                  placeholder="Full Name"
                  value={address.name}
                  onChange={e => onUpdateAddress?.({ ...address, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Street Address"
                  value={address.street}
                  onChange={e => onUpdateAddress?.({ ...address, street: e.target.value })}
                  required
                />
                <div className="flex space-x-2">
                  <Input
                    placeholder="City"
                    value={address.city}
                    onChange={e => onUpdateAddress?.({ ...address, city: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="ZIP"
                    value={address.zip}
                    onChange={e => onUpdateAddress?.({ ...address, zip: e.target.value })}
                    required
                  />
                </div>
                <Select
                  value={address.country}
                  onChange={e => onUpdateAddress?.({ ...address, country: e.target.value })}
                  options={[
                    { value: '', label: 'Select Country' },
                    { value: 'USA', label: 'USA' },
                    { value: 'UK', label: 'UK' },
                    { value: 'Kenya', label: 'Kenya' },
                  ]}
                  required
                />
                <Button variant="primary" className="w-full" type="submit">
                  Next: Payment
                </Button>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="payment">
            <Card className="p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Payment Information</h2>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  onUpdatePayment?.(payment);
                  setTab('review');
                }}
                className="space-y-4"
              >
                <Input
                  placeholder="Card Number"
                  value={payment.cardNumber}
                  onChange={e => onUpdatePayment?.({ ...payment, cardNumber: e.target.value })}
                  required
                />
                <div className="flex space-x-2">
                  <Input
                    placeholder="Expiry"
                    value={payment.expiry}
                    onChange={e => onUpdatePayment?.({ ...payment, expiry: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="CVV"
                    value={payment.cvv}
                    onChange={e => onUpdatePayment?.({ ...payment, cvv: e.target.value })}
                    required
                  />
                </div>
                <Input
                  placeholder="Name on Card"
                  value={payment.name}
                  onChange={e => onUpdatePayment?.({ ...payment, name: e.target.value })}
                  required
                />
                <Button variant="primary" className="w-full" type="submit">
                  Next: Review
                </Button>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="review">
            <Card className="p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Order Review</h2>
              <div className="mb-4">
                <div className="font-medium">Shipping Address:</div>
                <div>{address.name}, {address.street}, {address.city}, {address.zip}, {address.country}</div>
              </div>
              <div className="mb-4">
                <div className="font-medium">Payment:</div>
                <div>Card ending in {payment.cardNumber.slice(-4)}</div>
              </div>
              <div className="mb-4">
                <div className="font-medium">Cart:</div>
                <ul className="list-disc ml-6">
                  {cartItems.map(item => (
                    <li key={item.id}>
                      {item.name} x {item.quantity} (${item.price.toFixed(2)} each)
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <Button
                variant="primary"
                className="w-full"
                onClick={onPlaceOrder}
                disabled={cartItems.length === 0}
              >
                Place Order
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </PageLayoutContent>
      <PageFooter variant="simple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2024 Checkout. All rights reserved.</p>
        </div>
      </PageFooter>
    </PageLayout>
  );
};