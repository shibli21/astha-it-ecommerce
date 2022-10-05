import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from "react";
import shopReducer, {
  CartItemProduct,
  initialState,
  IOrder,
  IUser,
  ShopActionTypes,
} from "../reducer/shopReducer";
import { Product } from "../types/Products";

interface IShopContext {
  totalCost: number;
  totalCartQuantity: number;
  cartItems: CartItemProduct[];
  orders: IOrder[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  checkout: (user: IUser) => void;
}

const ShopContext = createContext<IShopContext>({
  totalCost: initialState.totalCost,
  totalCartQuantity: initialState.totalCartQuantity,
  cartItems: initialState.cartItems,
  orders: initialState.orders,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  checkout: () => {},
});

export const ShopProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const updateCartItems = useCallback((cartItems: CartItemProduct[]) => {
    dispatch({
      type: ShopActionTypes.ADD_TO_CART,
      payload: {
        cartItems,
      },
    });
    updatePrice(cartItems);
  }, []);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      updateCartItems(JSON.parse(cartItems));
    }
  }, [updateCartItems]);

  useEffect(() => {
    const onCartItemChange = (e: StorageEvent) => {
      const { key, newValue } = e;
      if (key === "cartItems") {
        if (newValue) {
          updateCartItems(JSON.parse(newValue));
        }
      }
    };
    window.addEventListener("storage", onCartItemChange);
    return () => {
      window.removeEventListener("storage", onCartItemChange);
    };
  }, [updateCartItems]);

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

    updateCartItems(state.cartItems);
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = state.cartItems.filter(
      (item: Product) => item.id !== product.id
    );

    updateCartItems(updatedCart);
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

    updateCartItems(state.cartItems);
  };

  const decreaseQuantity = (product: Product) => {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (itemIndex !== -1) {
      state.cartItems[itemIndex].quantity -= 1;
    }

    updateCartItems(state.cartItems);
  };

  const checkout = (user: IUser) => {
    dispatch({
      type: ShopActionTypes.CHECKOUT,
      payload: {
        user,
      },
    });
    updateCartItems([]);
  };

  const value: IShopContext = {
    totalCost: state.totalCost,
    totalCartQuantity: state.totalCartQuantity,
    cartItems: state.cartItems,
    orders: state.orders,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    checkout,
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
