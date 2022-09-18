import "./loader-spinner.sass";
const LoaderSpinner: React.FC = () => {
  return (
    <div data-testid="loader-spinner" className="loader-spinner">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default LoaderSpinner;
