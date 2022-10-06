import { Dialog, Transition } from "@headlessui/react";
import Image from "next/future/image";
import Link from "next/link";
import { FC, Fragment, useState } from "react";
import { Check, Eye } from "tabler-icons-react";
import useShop from "../context/ShopContext";
import { Product } from "../types/Products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { category, description, id, images, price, stock, title } = product;
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart } = useShop();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="h-full overflow-hidden rounded border border-gray-900">
        <div className="relative">
          <button type="button" className="absolute right-4 top-4">
            <Eye onClick={openModal} className="hover:text-purple-700" />
          </button>

          <strong className="absolute left-4 top-4 inline-block  bg-gray-900 px-3 py-1 text-xs font-bold text-white">
            New
          </strong>
          <div className="h-56 lg:h-72">
            <Link
              className="text-lg font-bold leading-4"
              href={`/products/${encodeURIComponent(id)}`}
              passHref
            >
              <a>
                <Image
                  width={300}
                  height={300}
                  className="h-56 w-full cursor-pointer object-cover lg:h-72 "
                  alt={title}
                  src={images[0]}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="max-h-full space-y-2 p-6">
          <Link href={`/products/${encodeURIComponent(id)}`}>
            <p className="cursor-pointer pb-2 text-lg font-medium leading-4 transition hover:text-purple-700 ">
              {title}
            </p>
          </Link>

          <div className="flex justify-between text-sm">
            <p className="text-gray-700 ">${price}</p>
            <div>
              {stock > 0 ? (
                <div className="flex items-center space-x-2">
                  <Check className="text-green-500" />
                  <h1>Stock - {stock}</h1>
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
          </div>

          <button
            onClick={() => addToCart(product)}
            type="button"
            className="btn w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="mb-2 text-xl font-medium leading-6 text-gray-900">
                    <div className="flex justify-between">
                      <div>
                        <h3>{title}</h3>
                        <h1 className="text-sm text-gray-500">
                          {category.name}
                        </h1>
                      </div>
                      <h3>${price}</h3>
                    </div>
                  </Dialog.Title>
                  <div className="space-y-2">
                    <Image
                      width={300}
                      height={300}
                      className="h-56 w-full object-cover lg:h-72 "
                      alt={title}
                      src={images[0]}
                    />
                    <p>{description}</p>
                  </div>

                  <div className="mt-4 space-x-2 text-right">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="rounded bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 active:bg-red-600"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductCard;
