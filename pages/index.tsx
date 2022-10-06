import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { productsData } from "../data/productsData";
import { Product } from "../types/Products";

interface HomePageProps {
  products: Product[];
}

const Home: InferGetStaticPropsType<typeof getStaticProps> = ({
  products,
}: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Astha Commerce</title>
      </Head>
      <div className="py-6">
        <h1 className="underline-gray-900 pb-4 text-2xl font-bold underline decoration-wavy">
          All Products
        </h1>
        <ProductsList products={products} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = productsData;

  return {
    props: {
      products,
    },
  };
};
