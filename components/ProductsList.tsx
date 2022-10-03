import { FC } from "react";
import { Product } from "../types/Products";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
