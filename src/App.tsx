/* eslint-disable jsx-a11y/aria-role */
import "@/App.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./design-system/pages/home/Home";
import NoMatch from "./design-system/pages/noMatch/NoMatch";

function App() {
  return (
    <div data-testid="app" role="app" className={`app `}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
