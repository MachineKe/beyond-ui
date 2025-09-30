import React, { useState } from 'react';
import { 
  CreditCard, 
  Truck, 
  Shield, 
  Check, 
  ChevronRight,
  MapPin,
  User,
  Mail,
  Phone,
  Tag,
  Lock
} from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { Checkbox } from '../Checkbox';
import { showToast } from '../Toast';
import type { CartItem, ShippingAddress, PaymentMethod, Order } from './types';
import { sampleProducts } from './data/sampleData';

interface CheckoutComponentProps {
  cartItems?: CartItem[];
  onOrderComplete?: (order: Order) => void;
}

const sampleCartItems: CartItem[] = [
  {
    product: sampleProducts[0],
    quantity: 1,
  },
  {
    product: sampleProducts[1],
    quantity: 2,
  },
];

export const CheckoutComponent: React.FC<CheckoutComponentProps> = ({
  cartItems = sampleCartItems,
  onOrderComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState<Partial<ShippingAddress>>({});
  const [paymentMethod, setPaymentMethod] = useState<Partial<PaymentMethod>>({});
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const discount = appliedCoupon ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal + shipping + tax - discount;

  const steps = [
    { id: 1, name: 'Shipping', icon: Truck },
    { id: 2, name: 'Payment', icon: CreditCard },
    { id: 3, name: 'Review', icon: Check },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      // Validate shipping address
      if (!shippingAddress.firstName) newErrors.firstName = 'First name is required';
      if (!shippingAddress.lastName) newErrors.lastName = 'Last name is required';
      if (!shippingAddress.email) newErrors.email = 'Email is required';
      if (!shippingAddress.address) newErrors.address = 'Address is required';
      if (!shippingAddress.city) newErrors.city = 'City is required';
      if (!shippingAddress.zipCode) newErrors.zipCode = 'ZIP code is required';
    } else if (step === 2) {
      // Validate payment method
      if (!paymentMethod.type) newErrors.paymentType = 'Payment method is required';
      if (paymentMethod.type === 'card') {
        if (!paymentMethod.name) newErrors.cardName = 'Cardholder name is required';
        // Add more card validation as needed
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(3, prev + 1));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'save10') {
      setAppliedCoupon(couponCode);
      showToast.success('Coupon applied! 10% discount added.');
    } else {
      showToast.error('Invalid coupon code');
    }
  };

  const handlePlaceOrder = async () => {
    if (!validateStep(3)) return;

    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const order: Order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      shippingAddress: shippingAddress as ShippingAddress,
      paymentMethod: paymentMethod as PaymentMethod,
      subtotal,
      shipping,
      tax,
      discount,
      total,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    onOrderComplete?.(order);
    showToast.success('Order placed successfully!');
    setIsProcessing(false);
  };

  const renderShippingStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <Input
              value={shippingAddress.firstName || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, firstName: e.target.value }))}
              className={errors.firstName ? 'border-red-500' : ''}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <Input
              value={shippingAddress.lastName || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, lastName: e.target.value }))}
              className={errors.lastName ? 'border-red-500' : ''}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <Input
              type="email"
              value={shippingAddress.email || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, email: e.target.value }))}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <Input
              type="tel"
              value={shippingAddress.phone || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address *
            </label>
            <Input
              value={shippingAddress.address || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, address: e.target.value }))}
              className={errors.address ? 'border-red-500' : ''}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <Input
              value={shippingAddress.city || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, city: e.target.value }))}
              className={errors.city ? 'border-red-500' : ''}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <Input
              value={shippingAddress.state || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, state: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code *
            </label>
            <Input
              value={shippingAddress.zipCode || ''}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, zipCode: e.target.value }))}
              className={errors.zipCode ? 'border-red-500' : ''}
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              value={shippingAddress.country || 'US'}
              onChange={(e) => setShippingAddress(prev => ({ ...prev, country: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
        
        {/* Payment Method Selection */}
        <div className="space-y-3 mb-6">
          {[
            { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
            { id: 'paypal', name: 'PayPal', icon: Shield },
          ].map((method) => (
            <label
              key={method.id}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                paymentMethod.type === method.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={paymentMethod.type === method.id}
                onChange={(e) => setPaymentMethod(prev => ({ ...prev, type: e.target.value as any }))}
                className="sr-only"
              />
              <method.icon className="h-5 w-5 text-gray-600 mr-3" />
              <span className="font-medium text-gray-900">{method.name}</span>
            </label>
          ))}
        </div>

        {/* Card Details */}
        {paymentMethod.type === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name *
              </label>
              <Input
                value={paymentMethod.name || ''}
                onChange={(e) => setPaymentMethod(prev => ({ ...prev, name: e.target.value }))}
                className={errors.cardName ? 'border-red-500' : ''}
              />
              {errors.cardName && (
                <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number *
              </label>
              <Input
                placeholder="1234 5678 9012 3456"
                onChange={(e) => setPaymentMethod(prev => ({ ...prev, last4: e.target.value.slice(-4) }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date *
                </label>
                <Input
                  placeholder="MM/YY"
                  onChange={(e) => setPaymentMethod(prev => ({ ...prev, expiryDate: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV *
                </label>
                <Input placeholder="123" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderReviewStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Review</h2>
        
        {/* Shipping Address Review */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Shipping Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600">
              <p>{shippingAddress.firstName} {shippingAddress.lastName}</p>
              <p>{shippingAddress.address}</p>
              <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
              <p>{shippingAddress.email}</p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method Review */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600">
              {paymentMethod.type === 'card' ? (
                <p>Credit Card ending in {paymentMethod.last4}</p>
              ) : (
                <p>PayPal</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Order Items Review */}
        <Card>
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.product.name}</h4>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.id
                      ? 'bg-primary-600 border-primary-600 text-white'
                      : 'border-gray-300 text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${
                    currentStep >= step.id ? 'text-primary-600' : 'text-gray-400'
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="h-5 w-5 text-gray-400 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-8">
              {currentStep === 1 && renderShippingStep()}
              {currentStep === 2 && renderPaymentStep()}
              {currentStep === 3 && renderReviewStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < 3 ? (
                  <Button variant="primary" onClick={handleNextStep}>
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Cart Items */}
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.product.name}
                      </p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Coupon Code */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={!!appliedCoupon}
                  />
                  <Button
                    variant="outline"
                    onClick={handleApplyCoupon}
                    disabled={!!appliedCoupon || !couponCode}
                  >
                    Apply
                  </Button>
                </div>
                {appliedCoupon && (
                  <div className="flex items-center mt-2">
                    <Tag className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">
                      Coupon "{appliedCoupon}" applied
                    </span>
                  </div>
                )}
              </div>

              {/* Order Totals */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Discount</span>
                    <span className="text-green-600">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center justify-center mt-6 pt-4 border-t border-gray-200">
                <Lock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-xs text-gray-600">Secure checkout</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};