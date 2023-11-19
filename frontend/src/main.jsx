import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ingredientsPicked from "./reducers/ingredientsPicked.js";

const store = configureStore({
  reducer: {
    ingredientsPicked: ingredientsPicked,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App store={store} />
    </Provider>
  </React.StrictMode>
);
