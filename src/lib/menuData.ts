export interface MenuItem {
  id: string;
  name: string;
  category: string;
  isVeg: boolean;
  pricePerPlate: number;
  isAvailable: boolean;
  description?: string;
  displayOrder: number;
}

export const MENU_CATEGORIES = [
  "Welcome Drinks",
  "Starters",
  "Main Course",
  "Rice & Biryani",
  "Bread Items",
  "Vegetarian Specials",
  "Non-Veg Specials",
  "Desserts",
  "Beverages",
  "Live Counters"
];

// Initial mock "database"
export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Welcome Drinks
  { id: "wd1", name: "Fresh Lime Soda", category: "Welcome Drinks", isVeg: true, pricePerPlate: 45, isAvailable: true, displayOrder: 1 },
  { id: "wd2", name: "Aam Panna", category: "Welcome Drinks", isVeg: true, pricePerPlate: 55, isAvailable: true, displayOrder: 2 },
  { id: "wd3", name: "Virgin Mojito", category: "Welcome Drinks", isVeg: true, pricePerPlate: 75, isAvailable: true, displayOrder: 3 },
  
  // Starters
  { id: "st1", name: "Paneer Tikka", category: "Starters", isVeg: true, pricePerPlate: 120, isAvailable: true, displayOrder: 1 },
  { id: "st2", name: "Crispy Chilli Babycorn", category: "Starters", isVeg: true, pricePerPlate: 110, isAvailable: true, displayOrder: 2 },
  { id: "st3", name: "Chicken 65", category: "Starters", isVeg: false, pricePerPlate: 150, isAvailable: true, displayOrder: 3 },
  { id: "st4", name: "Fish Kabiraji", category: "Starters", isVeg: false, pricePerPlate: 180, isAvailable: true, displayOrder: 4 },
  
  // Main Course
  { id: "mc1", name: "Shorshe Ilish", category: "Main Course", isVeg: false, pricePerPlate: 450, isAvailable: true, displayOrder: 1 },
  { id: "mc2", name: "Kosha Mangsho", category: "Main Course", isVeg: false, pricePerPlate: 380, isAvailable: true, displayOrder: 2 },
  { id: "mc3", name: "Chanar Dalna", category: "Main Course", isVeg: true, pricePerPlate: 160, isAvailable: true, displayOrder: 3 },
  { id: "mc4", name: "Doi Maach", category: "Main Course", isVeg: false, pricePerPlate: 220, isAvailable: true, displayOrder: 4 },
  
  // Rice & Biryani
  { id: "rb1", name: "Basanti Pulao", category: "Rice & Biryani", isVeg: true, pricePerPlate: 110, isAvailable: true, displayOrder: 1 },
  { id: "rb2", name: "Kolkata Mutton Biryani", category: "Rice & Biryani", isVeg: false, pricePerPlate: 350, isAvailable: true, displayOrder: 2 },
  { id: "rb3", name: "Jeera Rice", category: "Rice & Biryani", isVeg: true, pricePerPlate: 80, isAvailable: true, displayOrder: 3 },
  
  // Desserts
  { id: "ds1", name: "Mishti Doi", category: "Desserts", isVeg: true, pricePerPlate: 60, isAvailable: true, displayOrder: 1 },
  { id: "ds2", name: "Baked Rosogolla", category: "Desserts", isVeg: true, pricePerPlate: 85, isAvailable: true, displayOrder: 2 },
  { id: "ds3", name: "Fruit Custard", category: "Desserts", isVeg: true, pricePerPlate: 70, isAvailable: true, displayOrder: 3 },
];

export const SERVICE_OPTIONS = [
  { id: "buffet", label: "Buffet Service", price: 0, icon: "🍽️" },
  { id: "table", label: "Table Service", price: 50, icon: "🤵" },
  { id: "live", label: "Live Counter Service", price: 80, icon: "🔥" },
];
