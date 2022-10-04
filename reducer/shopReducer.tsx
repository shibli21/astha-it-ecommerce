import { Product } from "../types/Products";

export interface CartItemProduct extends Product {
  quantity: number;
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ShopActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_PRICE = "UPDATE_PRICE",
  CHECKOUT = "CHECKOUT",
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  cardNumber: string;
}

type ShopPayload = {
  [ShopActionTypes.ADD_TO_CART]: {
    cartItems: CartItemProduct[];
  };
  [ShopActionTypes.REMOVE_FROM_CART]: {
    cartItems: CartItemProduct[];
  };
  [ShopActionTypes.UPDATE_PRICE]: {
    totalCost: number;
    cartItemQuantity: number;
  };
  [ShopActionTypes.CHECKOUT]: {
    user: IUser;
  };
};

export interface IOrder {
  id: string;
  user: IUser;
  products: CartItemProduct[];
  totalCost: number;
  date: Date;
  deliveryDate: Date;
}

export interface IShopInitialState {
  cartItems: CartItemProduct[];
  totalCost: number;
  totalCartQuantity: number;
  orders: IOrder[];
}

export type ShopActions = ActionMap<ShopPayload>[keyof ActionMap<ShopPayload>];

export const initialState: IShopInitialState = {
  cartItems: [],
  orders: [],
  totalCost: 0,
  totalCartQuantity: 0,
};

const shopReducer = (state: IShopInitialState, action: ShopActions) => {
  const { type, payload } = action;

  switch (type) {
    case ShopActionTypes.ADD_TO_CART:
      console.log("ADD_TO_CART", payload);

      return {
        ...state,
        cartItems: payload.cartItems,
      };
    case ShopActionTypes.REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART", payload);

      return {
        ...state,
        cartItems: payload.cartItems,
      };
    case ShopActionTypes.UPDATE_PRICE:
      console.log("UPDATE_PRICE", payload);

      return {
        ...state,
        totalCost: payload.totalCost,
        totalCartQuantity: payload.cartItemQuantity,
      };
    case ShopActionTypes.CHECKOUT:
      console.log("CHECKOUT", payload);

      const newOrders = [
        ...state.orders,
        {
          id: (Math.floor(Math.random() * 90000) + 10000).toString(),
          user: payload.user,
          products: state.cartItems,
          totalCost: state.totalCost,
          date: new Date(),
          deliveryDate: new Date(),
        },
      ];

      return {
        ...state,
        cartItems: [],
        totalCost: 0,
        totalCartQuantity: 0,
        orders: newOrders,
      };

    default:
      return state;
  }
};

export default shopReducer;
