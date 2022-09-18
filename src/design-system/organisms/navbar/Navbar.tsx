/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from "react";

import { ReactComponent as SearchIcon } from "@/design-system/atoms/icons/search.svg";
import { ReactComponent as LanguageIcon } from "@/design-system/atoms/icons/world.svg";
import { ReactComponent as DarkIcon } from "@/design-system/atoms/icons/dark.svg";
import { ReactComponent as WindowIcon } from "@/design-system/atoms/icons/window.svg";
import { ReactComponent as ChatIcon } from "@/design-system/atoms/icons/chat.svg";
import { ReactComponent as NotificationIcon } from "@/design-system/atoms/icons/notification.svg";
import { ReactComponent as MenuIcon } from "@/design-system/atoms/icons/menu.svg";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import { ReactComponent as CartIcon } from "@/assets/icon-cart.svg";
import portraitAvatar from "@/design-system/organisms/sidebar/1.png";
import "./navbar.sass";
import Avatar from "@/design-system/atoms/avatar/Avatar";
import Input from "@/design-system/atoms/input/Input";
import MenuItem from "@/design-system/molecules/menuItem/MenuItem";
import { ThemeContext } from "@/state/context";
import Drawer from "@/design-system/molecules/drawer/Drawer";
import Icon from "@/design-system/atoms/icon/Icon";
import CartModal from "../cartModal/CartModal";
import { CartContext } from "@/state/cartContext";

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
    <>
      {isOpen && <CartModal />}
      <nav data-testid="navbar" className="navbar">
        <div className="navbar-mobile">
          <div className="left">
            <Drawer position="left" content={content} />
            <span className="logo">
              <Logo />
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
      </nav>
    </>
  );
};
export default Navbar;
