import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Minus, Plus, ShoppingCartX, Trash } from "tabler-icons-react";
import useShop from "../../context/ShopContext";

const CartPage: NextPage = () => {
  const {
    cartItems,
    removeFromCart,
    totalCost,
    decreaseQuantity,
    increaseQuantity,
  } = useShop();

  const router = useRouter();

  return (
    <div className="mx-auto max-w-2xl py-6">
      {cartItems.length > 0 ? (
        <>
          <div className=" border border-gray-200 bg-white">
            <div className="border-b border-gray-100 px-5 py-4">
              <div className="font-semibold text-gray-800 ">
                Manage Your Cart
              </div>
            </div>

            <div className="overflow-x-auto p-3">
              <table className="w-full table-auto">
                <thead className=" text-xs font-semibold uppercase text-gray-400">
                  <tr>
                    <th className="p-2">
                      <div className="text-left font-semibold">
                        Product Name
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="text-left font-semibold">Quantity</div>
                    </th>
                    <th className="p-2">
                      <div className="text-left font-semibold">Total</div>
                    </th>
                    <th className="p-2">
                      <div className="text-center font-semibold">Action</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 text-sm">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="p-2">
                        <div className="font-medium text-gray-800">
                          <Link
                            href={`/products/${encodeURIComponent(item.id)}`}
                          >
                            {item.title}
                          </Link>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => decreaseQuantity(item)}
                            disabled={item.quantity === 1}
                          >
                            <Minus />
                          </button>
                          <h1>{item.quantity}</h1>
                          <button onClick={() => increaseQuantity(item)}>
                            <Plus />
                          </button>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left font-medium text-green-500">
                          ${item.price * item.quantity}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex justify-center">
                          <button onClick={() => removeFromCart(item)}>
                            <Trash className="text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4 ">
            <div className="w-full border border-gray-200  p-4 ">
              <div className="space-y-1">
                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Subtotal</span>
                  <span>${totalCost}</span>
                </div>

                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Shipping</span>
                  <span>$4.99</span>
                </div>
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex items-start justify-between gap-4 text-gray-800">
                  <span className="text-lg font-bold">Total</span>

                  <span className="flex flex-col items-end">
                    <span className="text-lg font-bold">
                      ${totalCost + 4.99} USD
                    </span>
                    <span className="text-sm text-gray-500">including VAT</span>
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="bg-gray-900 px-4 py-2 text-sm font-medium text-white"
              onClick={() => router.push("/checkout")}
            >
              Check out
            </button>
          </div>
        </>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center gap-2 py-6 text-xl">
            <ShoppingCartX size={48} />
            <h1 className="text-center font-medium text-gray-800">
              Your cart is empty
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
