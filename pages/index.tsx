import type { NextPage } from "next";
import { Fragment } from "react";
import ProductsList from "../components/ProductsList";

const Home: NextPage = () => {
  return (
    <Fragment>
      <h1 className="underline-gray-900 pb-4 text-2xl font-bold underline decoration-wavy">
        All Products
      </h1>
      <ProductsList />
    </Fragment>
  );
};

export default Home;
