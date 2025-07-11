import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AlertProvider } from "./context/alertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
