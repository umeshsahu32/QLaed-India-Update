import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.jsx";
import { NotificationProvider } from "./components/NotificationToaster/NotificationContext.jsx";
import Context from "./context/Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <NotificationProvider>
        <RouterProvider router={AppRouter} />
      </NotificationProvider>
    </Context>
  </React.StrictMode>
);
