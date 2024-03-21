import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Auth } from "./contexts/Auth.jsx";
import { Cart } from "./contexts/Cart.jsx";
import { Query } from "./contexts/Query.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Query>
      <Auth>
        <Cart>
          <App />
        </Cart>
      </Auth>
    </Query>
  </React.StrictMode>
);
