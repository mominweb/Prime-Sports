// src/routes/PrivateRoute.jsx
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
