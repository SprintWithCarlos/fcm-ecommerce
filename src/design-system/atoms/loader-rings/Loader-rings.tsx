import "./loader-rings.sass";

const LoaderRing: React.FC = () => (
  <div data-testid="loader" className="loader">
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
export default LoaderRing;
