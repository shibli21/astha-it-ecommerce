import { useRouter } from "next/router";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import useShop from "../context/ShopContext";

const CheckoutForm: FC = () => {
  const { checkout, orders } = useShop();
  const router = useRouter();
  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
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
    setTouched({ ...touched, [name]: true });

    if (value.length === 0) {
      setErrors({ ...errors, [name]: "This field is required" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const { address, email, firstName, lastName, phone, cardNumber } =
      checkoutForm;

    setTouched({
      address: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      cardNumber: true,
    });

    const tempErrors: any = {};

    if (address.length === 0) {
      tempErrors.address = "This field is required";
    } else if (address.length < 5) {
      tempErrors.address = "Address is too short";
    }

    if (email.length === 0) {
      tempErrors.email = "This field is required";
    } else if (
      !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    ) {
      tempErrors.email = "Email is not valid";
    }

    if (firstName.length === 0) {
      tempErrors.firstName = "This field is required";
    } else if (firstName.length < 2) {
      tempErrors.firstName = "First name is too short";
    }

    if (lastName.length === 0) {
      tempErrors.lastName = "This field is required";
    } else if (lastName.length < 2) {
      tempErrors.lastName = "Last name is too short";
    }

    if (phone.length === 0) {
      tempErrors.phone = "This field is required";
    } else if (phone.length !== 11 || !phone.match(/^[0-9]+$/)) {
      tempErrors.phone = "Phone number must be 11 digits long";
    }
    if (cardNumber.length === 0) {
      tempErrors.cardNumber = "This field is required";
    }

    if (address.length === 0) {
      tempErrors.address = "This field is required";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      router
        .push("/orders/" + orders[orders.length - 1].id)
        .then(() => checkout(checkoutForm));
    }
  };

  return (
    <div className="mx-auto max-w-lg lg:px-8">
      <form
        className="grid grid-cols-6 gap-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="col-span-3">
          <label className="label">First name</label>
          <input
            name="firstName"
            onChange={handleInputChange}
            className="input"
            required
          />
          {errors.firstName && touched.firstName && (
            <p className="text-md italic text-red-500 ">{errors.firstName}</p>
          )}
        </div>

        <div className="col-span-3">
          <label className="label">Last name</label>
          <input
            name="lastName"
            onChange={handleInputChange}
            className="input"
            required
          />
          {errors.lastName && touched.lastName && (
            <p className="text-md italic text-red-500 ">{errors.lastName}</p>
          )}
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
          {errors.email && touched.email && (
            <p className="text-md italic text-red-500 ">{errors.email}</p>
          )}
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
          {errors.phone && touched.phone && (
            <p className="text-md italic text-red-500 ">{errors.phone}</p>
          )}
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
          {errors.cardNumber && touched.cardNumber && (
            <p className="text-md italic text-red-500 ">{errors.cardNumber}</p>
          )}
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
          {errors.address && touched.address && (
            <p className="text-md italic text-red-500 ">{errors.address}</p>
          )}
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
