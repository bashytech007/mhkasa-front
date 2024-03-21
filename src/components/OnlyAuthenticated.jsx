import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Component = () => {
  const location = useLocation();
  const url = `${location.pathname}${location.search}${location.hash}`;
  const redirect = encodeURIComponent(url);

  const { user } = useAuth();
  return <Outlet />;
  // return !!user ? <Outlet /> : <Navigate to={`/login?redirect=${redirect}`} />;
};
