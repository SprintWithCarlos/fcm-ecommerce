import { useContext } from "react";
import { CartContext } from "@/state/cartContext";
import "./cartModal.sass";
import { ReactComponent as DeleteIcon } from "@/assets/icon-delete.svg";
import Icon from "@/design-system/atoms/icon/Icon";
import Button, { ButtonClass } from "@/design-system/atoms/button/Button";

const CartModal: React.FC = () => {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <div data-testid="cartModal" className="cartModal">
      <h4>Cart</h4>
      <hr />
      <div className="column">
        {cart.quantity === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="line">
              <img src={cart.images.thumbnails[0]} alt="shoe" />
              <div className="item">
                <p className="title">{cart.name}</p>
                <p>
                  ${String(cart.price)}
                  .00 x {String(cart.quantity)}{" "}
                  <span className="total">
                    {" "}
                    ${String(cart.total)}
                    .00
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => dispatch({ type: "RESET_CART" })}
              >
                <Icon src={<DeleteIcon />} name="delete" />
              </button>
            </div>
            <div className="line">
              <Button type={ButtonClass.primary}>Checkout</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CartModal;
