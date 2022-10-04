import { useRouter } from "next/router";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import useShop from "../context/ShopContext";

const CheckoutForm: FC = () => {
  const { checkout } = useShop();
  const router = useRouter();
  const [checkoutForm, setCheckoutForm] = useState({
    address: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    cardNumber: "",
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/orders").then(() => checkout(checkoutForm));
  };

  return (
    <div className="mx-auto max-w-lg lg:px-8">
      <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
        <div className="col-span-3">
          <label className="label">First name</label>
          <input
            name="firstName"
            onChange={handleInputChange}
            className="input"
            required
          />
        </div>

        <div className="col-span-3">
          <label className="label">Last name</label>
          <input
            name="lastName"
            onChange={handleInputChange}
            className="input"
            required
          />
        </div>

        <div className="col-span-6">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            className="input"
            required
          />
        </div>

        <div className="col-span-6">
          <label className="label">Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={handleInputChange}
            className="input"
            required
          />
        </div>
        <div className="col-span-6">
          <label className="label">Card Details</label>
          <input
            type="number"
            name="cardNumber"
            onChange={handleInputChange}
            placeholder="Card number"
            className="input"
            required
          />
        </div>
        <div className="col-span-6">
          <label className="label">Billing Address</label>
          <input
            type="text"
            name="address"
            onChange={handleInputChange}
            placeholder="Billing Address"
            className="input"
            required
          />
        </div>

        <div className="col-span-6">
          <button className="btn w-full" type="submit">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
