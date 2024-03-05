import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const OnlyAuthenticated = () => {
  const location = useLocation();
  const url = `${location.pathname}${location.search}${location.hash}`;
  const redirect = encodeURIComponent(url);

  const { user } = useAuth();
  return !!user ? <Outlet /> : <Navigate to={`/login?redirect=${redirect}`} />;
};
