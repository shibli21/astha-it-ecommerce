export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  stock: number;
}

export interface Category {
  id: number;
  name: Name;
  image: string;
}

export enum Name {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Others = "Others",
  Shoes = "Shoes",
}
