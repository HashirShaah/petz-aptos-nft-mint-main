import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/ContextProvider";
import { ToastContainer } from "react-toastify";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import App from "./app/App";
import "react-toastify/dist/ReactToastify.css";

const wallets = [new PetraWallet()];
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
    <ContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </ContextProvider>
  </AptosWalletAdapterProvider>
);
