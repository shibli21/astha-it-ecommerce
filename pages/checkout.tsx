import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import CheckoutForm from "../components/CheckoutForm";
import useShop from "../context/ShopContext";

const Checkout: NextPage = () => {
  const { cartItems, totalCost } = useShop();
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      {cartItems.length > 0 ? (
        <section>
          <div className="mx-auto my-6 max-w-screen-lg md:my-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
              <div className="">
                <div className="mx-auto max-w-lg lg:px-8">
                  <h1 className="text-2xl font-bold">Checkout</h1>
                  <div className="mt-8">
                    <p className="text-2xl font-medium tracking-tight">
                      ${totalCost.toFixed(2)}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      For the purchase of
                    </p>
                  </div>

                  <div className="my-4 ">
                    <ul className="divide-y divide-gray-900 last:border-b last:border-gray-900">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between py-4"
                        >
                          <div className="flex items-start">
                            <div className="">
                              <p className="text-sm">{item.title}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm">
                              <small className="mr-2 text-gray-500">
                                {item.quantity} X
                              </small>
                              ${item.price}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <CheckoutForm />
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center py-6">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <button onClick={() => router.push("/")} className="btn mt-4">
            Go back to shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
