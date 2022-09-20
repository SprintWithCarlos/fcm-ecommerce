import { useState } from "react";
import Sidebar from "@/design-system/organisms/sidebar/Sidebar";
import "./drawer.sass";
import { ReactComponent as BurgerIcon } from "@/assets/icon-menu.svg";
import Icon from "@/design-system/atoms/icon/Icon";

type DrawerProps = {
  position: string;
  size?: string;
  content: { name: string; url: string }[];
};

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  const { content, position, size } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div data-testid="drawer" className="drawer">
      <button
        type="button"
        className="menu"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="menu"
      >
        <Icon name="burger" src={<BurgerIcon />} />
      </button>
      <div
        data-testid="container"
        className={
          isOpen
            ? `sidebar__container-${position} isOpen`
            : `sidebar__container-${position} `
        }
      >
        <Sidebar content={content} state={{ isOpen, setIsOpen }} />
      </div>
    </div>
  );
};
export default Drawer;
