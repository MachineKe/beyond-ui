import React, { useState } from 'react';
import { 
  CreditCard, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Zap,
  ShoppingCart,
  X
} from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Card, CardHeader, CardTitle, CardContent } from '../Card';
import { Badge } from '../Badge';
import { showToast } from '../Toast';
import type { CartItem, PaymentMethod } from './types';
import { sampleProducts } from './data/sampleData';

interface CheckoutCompactProps {
  cartItems?: CartItem[];
  onClose?: () => void;
  onCheckout?: (items: CartItem[]) => void;
  className?: string;
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

export const CheckoutCompact: React.FC<CheckoutCompactProps> = ({
  cartItems = sampleCartItems,
  onClose,
  onCheckout,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'apple_pay'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuickCheckout = async () => {
    setIsProcessing(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onCheckout?.(cartItems);
    showToast.success('Order placed successfully!');
    setIsProcessing(false);
  };

  const handleOneClickCheckout = async () => {
    setIsProcessing(true);
    
    // Simulate one-click processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onCheckout?.(cartItems);
    showToast.success('Order placed with saved payment method!');
    setIsProcessing(false);
  };

  return (
    <div className={`w-full max-w-md ${className}`}>
      <Card>
        {/* Header */}
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Checkout ({cartItems.length} items)
            </CardTitle>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Order Summary Toggle */}
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">Order Summary</span>
                <Badge variant="outline">${total.toFixed(2)}</Badge>
              </div>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-600" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-600" />
              )}
            </button>

            {/* Expanded Order Details */}
            {isExpanded && (
              <div className="mt-3 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                
                <div className="pt-3 border-t border-gray-200 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-1 border-t border-gray-200">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Payment Options */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Quick Payment</h3>
            
            {/* One-Click Checkout */}
            <Button
              variant="primary"
              onClick={handleOneClickCheckout}
              disabled={isProcessing}
              className="w-full"
            >
              <Zap className="mr-2 h-4 w-4" />
              {isProcessing ? 'Processing...' : 'Buy with 1-Click'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-2">
              <div className="flex space-x-2">
                {[
                  { id: 'card', name: 'Card', icon: CreditCard },
                  { id: 'paypal', name: 'PayPal', icon: Lock },
                  { id: 'apple_pay', name: 'Apple Pay', icon: Zap },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id as any)}
                    className={`flex-1 flex items-center justify-center p-2 border rounded-lg text-sm transition-colors ${
                      paymentMethod === method.id
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <method.icon className="h-4 w-4 mr-1" />
                    {method.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Essential Form Fields */}
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />

              {paymentMethod === 'card' && (
                <>
                  <Input
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    required
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      required
                    />
                    <Input
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Cardholder name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </>
              )}
            </div>

            {/* Checkout Button */}
            <Button
              variant="secondary"
              onClick={handleQuickCheckout}
              disabled={isProcessing}
              className="w-full"
            >
              {isProcessing ? 'Processing...' : `Complete Order - $${total.toFixed(2)}`}
            </Button>
          </div>

          {/* Security Notice */}
          <div className="flex items-center justify-center text-xs text-gray-500 pt-2">
            <Lock className="h-3 w-3 mr-1" />
            Secure 256-bit SSL encryption
          </div>

          {/* Free Shipping Notice */}
          {subtotal < 100 && (
            <div className="text-center text-sm text-gray-600 bg-blue-50 p-2 rounded-lg">
              Add ${(100 - subtotal).toFixed(2)} more for free shipping!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};