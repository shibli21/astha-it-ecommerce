import { NextPage } from "next";
import { useRouter } from "next/router";
import { FileInvoice } from "tabler-icons-react";
import useShop from "../../context/ShopContext";
import { IOrder } from "../../reducer/shopReducer";

const OrderPage: NextPage = () => {
  const router = useRouter();
  const { orders } = useShop();

  const order = orders.find(
    (order) => order.id === router.query.orderId
  ) as IOrder;

  if (!order) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center gap-2 py-6 text-xl">
          <FileInvoice size={48} />
          <h1 className="text-center font-medium text-gray-800">
            Order Not Found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-md space-y-4 py-6 md:space-y-10">
      <h1>
        <span className="text-2xl font-bold">Order #{order.id}</span>
      </h1>
      <div>
        <h1 className="font-bold">BILL TO</h1>
        <p className="italic text-gray-500">
          {order.user.firstName} {order.user.lastName}
        </p>
        <p className="italic text-gray-500">{order.user.address}</p>
      </div>
      <table className="w-full table-auto">
        <thead className="text-xs font-semibold uppercase text-gray-400">
          <tr>
            <th className="p-2">
              <div className="text-left font-semibold">Product Name</div>
            </th>
            <th className="p-2">
              <div className="text-left font-semibold">Price</div>
            </th>
            <th className="p-2">
              <div className="text-left font-semibold">QTY</div>
            </th>
            <th className="p-2 ">
              <div className="text-right font-semibold">Total</div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 text-sm">
          {order.products.map((item) => (
            <tr key={item.id}>
              <td className="p-2">
                <div className="font-medium text-gray-800">{item.title}</div>
                <div className="font-medium italic text-gray-500">
                  {item.category.name}
                </div>
              </td>
              <td className="p-2 text-gray-500">
                <h1>${item.price.toFixed(2)}</h1>
              </td>
              <td className="p-2">
                <h1>{item.quantity}</h1>
              </td>
              <td className="p-2 ">
                <div className="text-right font-medium text-green-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col items-end gap-4 ">
        <div className="w-full   p-4 ">
          <div className="space-y-1">
            <div className="flex justify-between gap-4 text-gray-500">
              <span>Subtotal</span>
              <span>${order.totalCost}</span>
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
                  ${order.totalCost + 4.99}
                </span>
                <span className="text-sm text-gray-500">including VAT</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
