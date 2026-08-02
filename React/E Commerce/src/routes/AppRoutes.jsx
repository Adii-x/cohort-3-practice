import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectedRoute from "./Protected/ProtectedRoute";
import AuthLayout from "../app/layouts/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import PublicRoute from "./Protected/PublicRoute";
import MainLayout from "../app/layouts/MainLayout";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import { hydrateUserApi } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let res = await hydrateUserApi();
      dispatch(addUser(res));
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
            {
              path: "order",
              element: <OrderPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
