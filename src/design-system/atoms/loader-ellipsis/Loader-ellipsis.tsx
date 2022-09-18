import "./loader-ellipsis.sass";

type LoaderEllipsisType = {
  color: string;
};
const LoaderEllipsis: React.FC<LoaderEllipsisType> = (
  props: LoaderEllipsisType
) => {
  const { color } = props;
  return (
    <div data-testid="loader-ellipsis" className="loader-ellipsis">
      <div className="lds-ellipsis">
        <div style={{ backgroundColor: `${color}` }} />
        <div style={{ backgroundColor: `${color}` }} />
        <div style={{ backgroundColor: `${color}` }} />
        <div style={{ backgroundColor: `${color}` }} />
      </div>
    </div>
  );
};
export default LoaderEllipsis;
