import { Dialog, Transition } from "@headlessui/react";
import Image from "next/future/image";
import Link from "next/link";
import { FC, Fragment, useState } from "react";
import { Eye } from "tabler-icons-react";
import { Product } from "../types/Products";

interface ProductCardProps extends Product {}

const ProductCard: FC<ProductCardProps> = ({
  id,
  images,
  title,
  price,
  description,
  category,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="border border-gray-900">
        <div className="relative">
          <button type="button" className="absolute right-4 top-4">
            <Eye onClick={openModal} />
          </button>

          <strong className="absolute left-4 top-4 inline-block  bg-gray-900 px-3 py-1 text-xs font-bold text-white">
            New
          </strong>
          <div className="h-56 lg:h-72">
            <Link
              className="text-lg font-bold leading-4"
              href={`/products/${encodeURIComponent(id)}`}
            >
              <Image
                width={300}
                height={300}
                className="h-56 w-full object-cover lg:h-72 "
                alt={title}
                src={images[0]}
              />
            </Link>
          </div>
        </div>

        <div className="max-h-full space-y-2 p-6">
          <Link
            href={`/products/${encodeURIComponent(id)}`}
            className=" text-lg font-bold leading-4"
          >
            {title}
          </Link>

          <p className=" text-sm text-gray-700">${price}</p>

          <button
            type="button"
            className="block w-full bg-gray-900 px-4 py-2 text-sm font-bold text-white"
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

                  <div className="mt-4 text-right">
                    <button
                      type="button"
                      className=" bg-gray-900 px-4 py-2 text-sm font-medium text-white"
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="bg-red-500 px-4 py-2 text-sm font-medium text-white"
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
    </div>
  );
};

export default ProductCard;
