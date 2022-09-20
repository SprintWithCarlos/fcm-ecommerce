/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unused-prop-types */
import "./button.sass";

export enum ButtonClass {
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
  primary = "primary",
  secondary = "secondary",
  close = "close",
  affordance = "affordance",
}
type ButtonProps = {
  children: React.ReactNode;
  type: ButtonClass;
  onClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
};
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type, onClick, children, disabled } = props;
  return (
    <button
      data-testid="button"
      name="button"
      type="button"
      className={
        !disabled
          ? `button button--${type}`
          : `button button--${type} button--disabled`
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
