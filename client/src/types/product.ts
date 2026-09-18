export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  emoji: string;
  isPopular?: boolean;
}