import { Product } from "../types/Products";

export const fetchProduct = async (id: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  const product: Product = await res.json();

  return product;
};

export const fetchProducts = async () => {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=40&limit=12"
  );

  const products: Product[] = await res.json();

  return products;
};
