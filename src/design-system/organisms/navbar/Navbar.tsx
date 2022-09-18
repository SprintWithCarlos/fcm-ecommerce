/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import { ReactComponent as CartIcon } from "@/assets/icon-cart.svg";
import "./navbar.sass";
import Avatar from "@/design-system/atoms/avatar/Avatar";
import Drawer from "@/design-system/molecules/drawer/Drawer";
import Icon from "@/design-system/atoms/icon/Icon";
import CartModal from "../cartModal/CartModal";
import { CartContext } from "@/state/cartContext";
import { capitalize } from "@/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { cart } = useContext(CartContext);
  const content = [
    { name: "collections", url: "/collections" },
    { name: "men", url: "/men" },
    { name: "women", url: "/women" },
    { name: "about", url: "/about" },
    { name: "contact", url: "/contact" },
  ];
  return (
    <nav data-testid="navbar" className="navbar">
      <div className="navbar-mobile">
        <div className="left">
          <Drawer position="left" content={content} />
          <span className="logo">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </span>
        </div>
        <div className="right">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Icon
              counter={cart.quantity > 0 ? cart.quantity : undefined}
              name="cart"
              src={<CartIcon />}
              size={{ height: "auto", width: "22px" }}
            />
          </button>
          {isOpen && <CartModal />}
          <div className="avatar">
            <Avatar
              src="/image-avatar.png"
              className="round"
              alt="avatar"
              size={{ width: "20", height: "20" }}
            />
          </div>
        </div>
      </div>
      <div className="navbar">
        <span className="left">
          <span className="logo">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </span>
          <span className="menu">
            {content.map((item) => (
              <NavLink to={item.url} className="menu-item">
                {capitalize(item.name)}
              </NavLink>
            ))}
          </span>
        </span>
        <span className="right">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Icon
              counter={cart.quantity > 0 ? cart.quantity : undefined}
              name="cart"
              src={<CartIcon />}
              size={{ height: "auto", width: "22px" }}
            />
          </button>
          {isOpen && <CartModal />}
          <div className="avatar">
            <Avatar
              src="/image-avatar.png"
              className="round"
              alt="avatar"
              size={{ width: "20", height: "20" }}
            />
          </div>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
