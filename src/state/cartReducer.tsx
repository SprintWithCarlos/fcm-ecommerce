import { CartType } from "./cartContext";

export const contextReducer = (
  state: { cart: CartType },
  action: { type: string; payload: CartType | any }
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
    case "TEST":
      console.log("test");
      return state;

    default:
      return state;
  }
};
