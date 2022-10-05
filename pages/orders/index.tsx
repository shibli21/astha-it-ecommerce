import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FileX } from "tabler-icons-react";
import useShop from "../../context/ShopContext";

const OrderPage: NextPage = () => {
  const router = useRouter();
  const { orders } = useShop();

  return (
    <>
      <Head>
        <title>Order history</title>
      </Head>
      <div className="mx-auto max-w-screen-sm space-y-4">
        {orders.length > 0 ? (
          <div className="border border-gray-200">
            <div className="border-b border-gray-100 px-5 py-4">
              <h1 className="font-semibold text-gray-800">Order History</h1>
            </div>

            <div className="overflow-x-auto p-3">
              <table className="w-full table-auto">
                <thead className="text-xs font-semibold uppercase text-gray-400">
                  <tr>
                    <th className="p-2">
                      <div className="text-left font-semibold">ID</div>
                    </th>
                    <th className="p-2">
                      <div className="text-left font-semibold">
                        EST. DELIVERY
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="text-left font-semibold">Amount</div>
                    </th>
                    <th className="p-2">
                      <div className="text-center font-semibold">Status</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 text-sm">
                  {orders.map((item) => (
                    <tr
                      key={item.id}
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        router.push(`/orders/${encodeURIComponent(item.id)}`)
                      }
                    >
                      <td className="p-2">
                        <div className="font-medium text-gray-800">
                          Order #{item.id}
                        </div>
                      </td>
                      <td className="p-2 text-gray-500">
                        <div className="font-medium italic text-gray-500">
                          {item.deliveryDate.toLocaleDateString()}
                        </div>
                      </td>
                      <td className="p-2 text-gray-500">
                        <h1>${item.totalCost.toFixed(2)}</h1>
                      </td>
                      <td className="p-2">
                        <div className="bg-green-500 px-2 py-0.5 text-center text-white shadow-md">
                          Paid
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="py-6">
            <div className="flex flex-col items-center justify-center gap-2 py-6 text-xl">
              <FileX size={48} />
              <h1 className="text-center font-medium text-gray-800">
                You have no orders yet.
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderPage;
