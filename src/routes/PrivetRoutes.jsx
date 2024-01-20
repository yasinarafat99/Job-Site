import React, {  useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../firbase/firebase";

function PrivetRoutes({children}) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      return Swal.fire({
        title: "Plese signup in first",
        icon: "warning",
      });
    }
  }, []);

  if (loading) {
    return <h2>Loading data...</h2>;
  }

  if (!user) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}

export default PrivetRoutes;
