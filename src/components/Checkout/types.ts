export interface CartItem {
  id: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  discount?: string;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
}