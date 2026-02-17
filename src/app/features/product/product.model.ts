export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bouye' | 'bissap';
  flavor?: string;
  size?: '250ml' | '1L';
  icon: string;
  gradient: string;
  isSpecial?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  hasMultipleSizes?: boolean;
  sizes?: Array<{ size: '250ml' | '1L'; price: number; }>;
}

export const PRODUCTS: Product[] = [
  {
    id: 'bouye-lait',
    name: 'Bouye Lait',
    description: 'Le classique bouye au lait, doux et rafraîchissant',
    price: 2000,
    category: 'bouye',
    flavor: 'lait',
    size: '1L',
    icon: 'fas fa-glass-water',
    gradient: 'from-yellow-300 to-orange-400',
    hasMultipleSizes: true,
    sizes: [
      { size: '250ml', price: 500 },
      { size: '1L', price: 2000 }
    ]
  },
  {
    id: 'bouye-corossol',
    name: 'Bouye Corossol',
    description: 'Bouye parfumé au corossol, un goût exotique unique',
    price: 2500,
    category: 'bouye',
    flavor: 'corossol',
    size: '1L',
    icon: 'fas fa-seedling',
    gradient: 'from-green-400 to-teal-500',
    isPopular: true
  },
  {
    id: 'bouye-gingembre',
    name: 'Bouye Gingembre',
    description: 'Le piquant du gingembre rencontre la douceur du bouye',
    price: 2500,
    category: 'bouye',
    flavor: 'gingembre',
    size: '1L',
    icon: 'fas fa-fire',
    gradient: 'from-orange-400 to-red-500',
    isSpicy: true
  },
  {
    id: 'bissap-rouge-ananas',
    name: 'Bissap Rouge Ananas',
    description: 'Le bissap traditionnel relevé d\'une touche tropicale d\'ananas',
    price: 2000,
    category: 'bissap',
    flavor: 'ananas',
    size: '1L',
    icon: 'fas fa-glass-water',
    gradient: 'from-yellow-400 to-green-500',
    isSpecial: true
  },
  {
    id: 'bissap-rouge-gingembre',
    name: 'Bissap Rouge Gingembre',
    description: 'Le bissap rouge avec un piquant subtil de gingembre pour les amateurs de saveurs intenses',
    price: 2000,
    category: 'bissap',
    flavor: 'gingembre',
    size: '1L',
    icon: 'fas fa-pepper-hot',
    gradient: 'from-red-500 to-orange-600',
    isSpicy: true
  }
];
