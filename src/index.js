import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useData, DataProvider } from "./context/DataContext";
export { useData };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
