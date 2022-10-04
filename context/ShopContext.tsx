import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import shopReducer, {
  CartItemProduct,
  initialState,
  ShopActionTypes,
} from "../reducer/shopReducer";
import { Product } from "../types/Products";

interface IShopContext {
  totalCost: number;
  totalCartQuantity: number;
  cartItems: CartItemProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const ShopContext = createContext<IShopContext>({
  totalCost: initialState.totalCost,
  totalCartQuantity: initialState.totalCartQuantity,
  cartItems: initialState.cartItems,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const ShopProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: Product) => {
    const tempProduct = { ...product, quantity: 1 };

    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (itemIndex === -1) {
      state.cartItems.push(tempProduct);
    } else {
      state.cartItems[itemIndex].quantity += 1;
    }

    updatePrice(state.cartItems);

    dispatch({
      type: ShopActionTypes.ADD_TO_CART,
      payload: {
        cartItems: state.cartItems,
      },
    });
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = state.cartItems.filter(
      (item: Product) => item.id !== product.id
    );

    updatePrice(updatedCart);

    dispatch({
      type: ShopActionTypes.REMOVE_FROM_CART,
      payload: {
        cartItems: updatedCart,
      },
    });
  };

  const updatePrice = (products: CartItemProduct[]) => {
    const updatedCost = products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const totalCartQuantity = products.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

    dispatch({
      type: ShopActionTypes.UPDATE_PRICE,
      payload: {
        totalCost: updatedCost,
        cartItemQuantity: totalCartQuantity,
      },
    });
  };

  const increaseQuantity = (product: Product) => {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (itemIndex !== -1) {
      state.cartItems[itemIndex].quantity += 1;
    }

    dispatch({
      type: ShopActionTypes.ADD_TO_CART,
      payload: {
        cartItems: state.cartItems,
      },
    });

    updatePrice(state.cartItems);
  };

  const decreaseQuantity = (product: Product) => {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (itemIndex !== -1) {
      state.cartItems[itemIndex].quantity -= 1;
    }

    dispatch({
      type: ShopActionTypes.ADD_TO_CART,
      payload: {
        cartItems: state.cartItems,
      },
    });

    updatePrice(state.cartItems);
  };

  const value: IShopContext = {
    totalCost: state.totalCost,
    totalCartQuantity: state.totalCartQuantity,
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
