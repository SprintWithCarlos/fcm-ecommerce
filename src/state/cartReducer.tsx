/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { Reducer } from "react";
import { State } from "./cartContext";

type CartAction =
  | { type: "ADD_TO_CART"; payload: { price: number; quantity: number } }
  | { type: "RESET_CART" };
export const contextReducer: Reducer<State, CartAction> = (
  state: State,
  action: CartAction
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: {
          ...action.payload,
          total: action.payload.price * action.payload.quantity,
        },
      };
    case "RESET_CART":
      return {
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
  }
};
