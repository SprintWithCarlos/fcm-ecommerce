import { Link } from "react-router-dom";
import Navbar from "@/design-system/organisms/navbar/Navbar";

import "./nomatch.sass";

const NoMatch: React.FC = () => {
  console.log("Component");

  return (
    <div data-testid="nomatch" className="nomatch">
      <Navbar />
      <div className="wrapper">
        <p>
          There is no content matching this link. Go back to{" "}
          <Link to="/">home</Link>
        </p>
      </div>
    </div>
  );
};
export default NoMatch;
