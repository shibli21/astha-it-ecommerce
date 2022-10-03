import type { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductsList from "../components/ProductsList";
import { fetchProducts } from "../lib/apis";
import { Product } from "../types/Products";

interface HomePageProps {
  products: Product[];
}

const Home: InferGetStaticPropsType<typeof getStaticProps> = ({
  products,
}: HomePageProps) => {
  return (
    <div className="py-6">
      <h1 className="underline-gray-900 pb-4 text-2xl font-bold underline decoration-wavy">
        All Products
      </h1>
      <ProductsList products={products} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
  };
};
