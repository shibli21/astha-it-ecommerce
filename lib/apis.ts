import { Product } from "../types/Products";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://astha-it-ecommerce.vercel.app/"
    : "http://192.168.1.100:3000/";

export const fetchProduct = async (id: string) => {
  const res = await fetch(BASE_URL + `api/products/${id}`);

  const product: Product = await res.json();

  return product;
};

export const fetchProducts = async () => {
  const res = await fetch(BASE_URL + "api/products");

  const products: Product[] = await res.json();

  return products;
};
