export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bouye' | 'bissap';
  flavor?: string;
  icon: string;
  gradient: string;
  isSpecial?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'bouye-lait',
    name: 'Bouye Lait',
    description: 'Le classique bouye au lait, doux et rafraîchissant',
    price: 2000,
    category: 'bouye',
    flavor: 'lait',
    icon: 'fas fa-glass-water',
    gradient: 'from-yellow-300 to-orange-400',
    isPopular: true
  },
  {
    id: 'bouye-corossol',
    name: 'Bouye Corossol',
    description: 'Bouye parfumé au corossol, un goût exotique unique',
    price: 2500,
    category: 'bouye',
    flavor: 'corossol',
    icon: 'fas fa-seedling',
    gradient: 'from-green-400 to-teal-500'
  },
  {
    id: 'bouye-gingembre',
    name: 'Bouye Gingembre',
    description: 'Le piquant du gingembre rencontre la douceur du bouye',
    price: 2500,
    category: 'bouye',
    flavor: 'gingembre',
    icon: 'fas fa-fire',
    gradient: 'from-orange-400 to-red-500',
    isSpicy: true
  },
  {
    id: 'bouye-coco',
    name: 'Bouye Coco',
    description: 'Bouye tropical au parfum délicat de coco',
    price: 2500,
    category: 'bouye',
    flavor: 'coco',
    icon: 'fas fa-glass-water-droplet',
    gradient: 'from-amber-500 to-yellow-700'
  },
  {
    id: 'bissap-rouge',
    name: 'Bissap Rouge',
    description: 'La boisson traditionnelle sénégalaise, riche en antioxydants',
    price: 2000,
    category: 'bissap',
    icon: 'fas fa-wine-glass',
    gradient: 'from-red-500 to-pink-600',
    isSpecial: true
  }
];
