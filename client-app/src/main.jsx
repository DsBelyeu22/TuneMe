import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import { StoreContext, store } from "../stores/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <RouterProvider router={router} />
        </StoreContext.Provider>
    </React.StrictMode>);
