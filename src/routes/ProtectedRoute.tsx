import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectPath,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};
