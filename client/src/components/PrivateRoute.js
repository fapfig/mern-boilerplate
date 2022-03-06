import React from "react";
import { Navigate } from "react-router-dom";

import { accountService } from "../services";

function PrivateRoute({ children }) {
  const user = accountService.userValue;
  return user ? children : <Navigate to="/" />;
}

export { PrivateRoute };
