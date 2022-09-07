import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "swiper/css/bundle";
import { BrowserRouter } from "react-router-dom";
import { ProdFilterProvider } from "./store/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProdFilterProvider>
        <App />
      </ProdFilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
