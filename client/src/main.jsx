/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ContextProvider } from "../contexts/ContextProvider.jsx"; // Adjust the import path as necessary
import "./index.css";
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWGNCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXZceXRXR2RcVUx2W0I=');

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  
);
