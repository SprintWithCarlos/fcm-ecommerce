import Icon from "@/design-system/atoms/icon/Icon";
import "./menuItem.sass";

type MenuItemProps = {
  icon?: React.ReactNode;
  name?: string;
  text?: string;
  counter?: number | undefined;
};
const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { icon, text, counter, name = "icon" } = props;
  return (
    <div data-testid="menuItem" className="menu-item">
      {icon && (
        <span>
          <Icon src={icon} name={name} counter={counter || undefined} />
        </span>
      )}
      {text && <p className="text">{text}</p>}
    </div>
  );
};
export default MenuItem;
