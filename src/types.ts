export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isPopular?: boolean;
  isChefRecommended?: boolean;
  tag?: string;
}

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  includes: string[];
  tag?: string;
}

export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
