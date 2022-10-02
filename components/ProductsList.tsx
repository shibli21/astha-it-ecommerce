import { useEffect, useState } from "react";
import { Product } from "../types/Products";
import ProductCard from "./ProductCard";

type Props = {};

function ProductsList({}: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=40&limit=12")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductsList;
