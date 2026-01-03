import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (token && (location.pathname === "/" || location.pathname === "/otp")) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
