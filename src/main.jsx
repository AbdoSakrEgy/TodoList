import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Templates/Root";
import ErrorPage from "./Pages/ErrorPage";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todo-list",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/abdosakregy.github.io",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/abdosakregy.github.io/todo-list",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
