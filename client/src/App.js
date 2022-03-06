import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./account/Signin";
import Signup from "./account/Signup";
import Account from "./account/Account";
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/account/*" element={<Account />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
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
