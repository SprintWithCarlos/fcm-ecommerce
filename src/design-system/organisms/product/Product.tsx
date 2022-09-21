/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import { useContext, useState } from "react";

import { ReactComponent as CartIcon } from "@/assets/icon-cart.svg";
import "./product.sass";
import { CartContext, CartType } from "@/state/cartContext";
import { ReactComponent as PlusIcon } from "@/assets/icon-plus.svg";
import { ReactComponent as MinusIcon } from "@/assets/icon-minus.svg";
import Button, { ButtonClass } from "@/design-system/atoms/button/Button";
import Icon from "@/design-system/atoms/icon/Icon";

const Product: React.FC = () => {
  const { dispatch, cart } = useContext(CartContext);

  const [item, setItem] = useState<Omit<CartType, "total">>({
    name: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casula wear companion.
        Featuring a durable rubber outer sole, they'll withstand everuthing the
        weather can offer.`,
    price: 125,
    discount: 50,
    fullPrice: 250,
    images: cart.images!,
    quantity: 0,
  });

  const handleClickLess = () => {
    if (item.quantity > 0) {
      setItem((prev) => ({ ...item, quantity: prev.quantity - 1 }));
    }
  };

  return (
    <div data-testid="product" className="product">
      <div className="brand">Sneaker Company</div>
      <h2>{item.name}</h2>
      <p className="description">{item.description}</p>
      <div className="row">
        <div className="block">
          <span className="price">{`$${item.price}.00`}</span>
          <span className="discount">{`${item.discount}%`}</span>
        </div>
        <div className="block__right">
          <span className="full-price">{`$${item.fullPrice}.00`}</span>
        </div>
      </div>
      <div className="row-mflex-dblock">
        <div className="affordances">
          <button
            data-testid="less"
            className={item.quantity > 0 ? "affordance" : "affordance disabled"}
            onClick={() => handleClickLess()}
            type="button"
          >
            <Icon
              src={<MinusIcon />}
              name="minus"
              size={{ width: "10px", height: "10px" }}
            />
          </button>

          <span data-testid="quantity">{item.quantity}</span>
          <button
            onClick={() =>
              setItem((prev) => ({ ...item, quantity: prev.quantity + 1 }))
            }
            className="affordance"
            type="button"
            data-testid="add"
          >
            <Icon
              src={<PlusIcon />}
              size={{ width: "10px", height: "10px" }}
              name="plus"
            />
          </button>
        </div>

        <Button
          type={ButtonClass.primary}
          disabled={item.quantity === 0}
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: item });
          }}
        >
          <span className="icon">
            <CartIcon />
          </span>{" "}
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
export default Product;
