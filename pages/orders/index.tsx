import { NextPage } from "next";
import { useRouter } from "next/router";
import useShop from "../../context/ShopContext";

const OrderPage: NextPage = () => {
  const router = useRouter();
  const { orders } = useShop();

  return (
    <div className="mx-auto max-w-screen-sm space-y-4">
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
                  <div className="text-left font-semibold">EST. DELIVERY</div>
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
        {/* {orders.map((order) => (
        <Link key={order.id} href={`/orders/${encodeURIComponent(order.id)}`}>
          <div className="space-y-1 border border-gray-200 p-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">Order #{order.id}</h2>
              <div className="bg-green-500 px-2 py-0.5 text-white shadow-md">
                Paid
              </div>
            </div>
            <p className="text-xl">$ {order.totalCost.toFixed(2)}</p>
            <div className="flex gap-2">
              <TruckDelivery />
              <h1>{order.deliveryDate.toDateString()}</h1>
            </div>
          </div>
        </Link>
      ))} */}
      </div>
    </div>
  );
};

export default OrderPage;
