import React from "react";
import ReactDOM from "react-dom/client";

import "@/style/index.sass";
import { Provider } from "react-redux";
import App from "./App";

import { CartContextProvider } from "./state/cartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
