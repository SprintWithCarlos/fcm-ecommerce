/* eslint-disable import/no-mutable-exports */
import { createContext, useMemo, useReducer, Dispatch } from "react";
import { contextReducer } from "./cartReducer";

export type CartType = {
  name: string;
  price: number;
  fullPrice: number;
  discount: number;
  quantity: number;
  total: number;
  description: string;
  images: {
    full: string[];
    thumbnails: string[];
  };
};
export type State = {
  cart: Partial<CartType>;
};
const initialState: State = {
  cart: {
    name: "",
    price: 0,
    quantity: 0,
    total: 0,
    fullPrice: 0,
    discount: 0,
    description: "",
    images: {
      full: [...Array(4)].map((item, i) => `/image-product-${i + 1}.jpg`),
      thumbnails: [...Array(4)].map(
        (item, i) => `/image-product-${i + 1}-thumbnail.jpg`
      ),
    },
  },
};
type CartContextType = {
  cart: Partial<CartType>;
  dispatch: Function;
};
const initialContext: CartContextType = {
  cart: {
    name: "",
    price: 0,
    quantity: 0,
    total: 0,
    fullPrice: 0,
    discount: 0,
    description: "",
    images: {
      full: [],
      thumbnails: [],
    },
  },
  /* istanbul ignore next */
  dispatch() {},
};

export const CartContext = createContext(initialContext);
let contextDispatch: Function;
export const CartContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  return (
    <CartContext.Provider
      value={useMemo(
        () => ({
          cart: {
            quantity: state.cart.quantity,
            name: state.cart.name,
            price: state.cart.price,
            total: state.cart.total,
            fullPrice: state.cart.fullPrice,
            discount: state.cart.discount,
            description: state.cart.description,
            images: state.cart.images,
          },
          dispatch,
        }),
        [state, dispatch]
      )}
    >
      {children}
    </CartContext.Provider>
  );
};
export { contextDispatch };
