import "./modal.sass";

const Modal: React.FC<{ children: any }> = ({
  children,
}: {
  children: any;
}) => (
  <div data-testid="modal" className="modal">
    <div className="child">{children}</div>
  </div>
);
export default Modal;
