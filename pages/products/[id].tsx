import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Check, Star, TruckDelivery } from "tabler-icons-react";
import useShop from "../../context/ShopContext";
import { productsData } from "../../data/productsData";
import { Product } from "../../types/Products";

interface ProductPageProps {
  product: Product;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const { addToCart } = useShop();

  return (
    <div>
      <Head>
        <title>{product.title} </title>
        <meta content={product.description} name="description" />
      </Head>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg ">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="relative overflow-hidden  bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {product.images
                  .filter((img, i) => i !== 0)
                  .map((image) => (
                    <div
                      key={image}
                      className="relative overflow-hidden  bg-gray-100"
                    >
                      <Image
                        className="h-full w-full object-cover object-center"
                        src={image}
                        alt={image}
                        width={300}
                        height={300}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {product.category.name}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {product.title}
                </h2>
              </div>

              <div className="">
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>
                <p className="text-gray-500">{product.description}</p>
              </div>
              <div className="my-4 flex items-center">
                <div className="flex gap-1">
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                </div>
              </div>
              <div>
                {product.stock > 0 ? (
                  <div className="flex items-center space-x-2">
                    <Check className="text-green-500" />
                    <h1>Stock - {product.stock}</h1>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <h1 className="text-red-500 ">
                      <span className="mr-2">X</span>
                      Stock out
                    </h1>
                  </div>
                )}
              </div>

              <div className="my-4">
                <h1 className="text-xl  font-bold text-gray-800 md:text-2xl">
                  ${product.price}
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    incl. VAT plus shipping
                  </span>
                </h1>
              </div>
              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <TruckDelivery />

                <span className="text-sm">2-4 day shipping</span>
              </div>
              <button
                type="button"
                className="btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<ProductPageProps> = async (
  context
) => {
  const { id } = context.params as IParams;

  const product = productsData.find((product) => product.id === Number(id));

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = productsData;

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};
