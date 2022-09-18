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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      data-testid="drawer"
      className="drawer"
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={(e) => handleKeyDown(e)}
      role="button"
      tabIndex={-1}
    >
      <span className="menu">
        {" "}
        <Icon name="burger" src={<BurgerIcon />} />
      </span>
      <div
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
