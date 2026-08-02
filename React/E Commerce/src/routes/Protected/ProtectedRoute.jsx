import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import LoadingScreen from "../../features/auth/ui/components/LodingSpinner";

function ProtectedRoute() {
  const { isAuthenticated, isLoding } = useSelector((store) => store.auth);

  if (isLoding) return <LoadingScreen />;

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return <Outlet />;
}

export default ProtectedRoute;
