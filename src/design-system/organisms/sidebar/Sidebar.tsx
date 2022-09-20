/* eslint-disable implicit-arrow-linebreak */
import { Link } from "react-router-dom";
import Icon from "@/design-system/atoms/icon/Icon";
import { capitalize } from "@/utils";
import { ReactComponent as CloseIcon } from "@/assets/icon-close.svg";
import "./sidebar.sass";

type SidebarProps = {
  content: {
    name: string;
    url: string;
  }[];
  state: {
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
  };
};
const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { content, state } = props;

  return (
    <div data-testid="sidebar" className="sidebar">
      <button
        type="button"
        data-testid="draw-c"
        className="close"
        onClick={() => state.setIsOpen(!state.isOpen)}
      >
        <Icon
          name="close"
          src={<CloseIcon />}
          size={{ width: "15px", height: "15px" }}
        />
      </button>
      <ul>
        {content.map((item) => (
          <Link to={item.url} key={item.name}>
            <li>
              <span>{capitalize(item.name)}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
