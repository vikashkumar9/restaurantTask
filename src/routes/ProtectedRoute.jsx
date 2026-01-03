import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();

  console.log("path", location.pathname);
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
