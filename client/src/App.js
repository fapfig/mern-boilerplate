import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./account/SignIn";
import SignUp from "./account/SignUp";
import Forgot from "./account/Forgot";
import Account from "./account/Account";
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/account/*" element={<Account />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot" element={<Forgot />} />
        </Route>

        <Route
          path="home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
