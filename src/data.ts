import { MenuItem, ComboItem, Review } from "./types";
import meatBoxImg from "./assets/images/meat_box_dish_1779248517778.png";
import fuskaImg from "./assets/images/fuska_dish_1779248480597.png";
import chotpotiImg from "./assets/images/chotpoti_dish_1779248499084.png";
import friendsComboImg from "./assets/images/combo_friends_1779248537118.png";
import streetComboImg from "./assets/images/combo_street_1779248555987.png";

export const categories = [
  "All",
  "Burger",
  "Pizza",
  "Chicken",
  "Pasta",
  "Street Food",
  "Snacks",
  "Drinks",
];

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Classic Beef Burger",
    description: "Juicy beef patty, melted cheese, fresh lettuce, secret sauce.",
    price: 350,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: "m2",
    name: "Ultimate Meat Box",
    description: "Layers of fries, crispy chicken, sausages, and overloaded cheese.",
    price: 450,
    category: "Snacks",
    image: meatBoxImg,
    rating: 4.9,
    isChefRecommended: true,
    tag: "Best Seller",
  },
  {
    id: "m3",
    name: "Spicy Fuska",
    description: "Crispy shells filled with spicy potato mix and tangy tamarind water.",
    price: 100,
    category: "Street Food",
    image: fuskaImg,
    rating: 4.6,
  },
  {
    id: "m4",
    name: "Cheesy Chicken Pasta",
    description: "Creamy white sauce pasta loaded with mozzarella and grilled chicken.",
    price: 320,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: "m5",
    name: "BBQ Chicken Wings",
    description: "6pcs of crispy wings tossed in smoky BBQ sauce.",
    price: 280,
    category: "Chicken",
    image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: "m6",
    name: "Special Chotpoti",
    description: "Hot, sour, and spicy peas mixed with egg and tamarind.",
    price: 120,
    category: "Street Food",
    image: chotpotiImg,
    rating: 4.6,
  },
  {
    id: "m7",
    name: "Margherita Pizza",
    description: "Classic 9-inch pizza with extra cheese and fresh basil.",
    price: 400,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },
  {
    id: "m8",
    name: "Crispy French Fries",
    description: "Golden, crunchy fries seasoned with special peri-peri salt.",
    price: 150,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
  },
  {
    id: "m9",
    name: "Warm Thai Soup",
    description: "A comforting bowl of soup with rich taste, mushrooms, and steam rising.",
    price: 180,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
];

export const comboItems: ComboItem[] = [
  {
    id: "c1",
    name: "Friends Combo",
    description: "Perfect for sharing with your best buddy.",
    price: 999,
    image: friendsComboImg,
    includes: ["2x Beef Burgers", "1x Large Fries", "2x Cold Drinks", "4pcs Wings"],
    tag: "Popular",
  },
  {
    id: "c2",
    name: "Street Bites",
    description: "The ultimate Kalampur street food experience.",
    price: 299,
    image: streetComboImg,
    includes: ["1x Special Fuska", "1x Chotpoti", "2x Mint Lemonade"],
  },
  {
    id: "c3",
    name: "Family Feast",
    description: "Heavy meal for the whole family.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1604152009228-5b1285038cbe?auto=format&fit=crop&w=800&q=80",
    includes: ["2x 9-inch Pizzas", "1x Meat Box", "4x Drinks"],
    tag: "Save 15%",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Rahim Chowdhury",
    rating: 5,
    text: "Best fast food spot in Kalampur! The Meat Box is absolutely out of this world.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: "r2",
    name: "Sadia Islam",
    rating: 5,
    text: "Loved the burger and cheesy pasta. Environment is amazing and service is top notch.",
    avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  },
  {
    id: "r3",
    name: "Mehedi Hasan",
    rating: 4,
    text: "Perfect evening hangout place. The Fuska here has perfectly balance spice. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "r4",
    name: "Jannatul Ferdous",
    rating: 5,
    text: "Cinematic vibe in Kalampur! This place changed the local food scene. Friendly staff.",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
];

export const galleryImages = [
  meatBoxImg,
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  chotpotiImg,
  friendsComboImg,
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  fuskaImg,
];
