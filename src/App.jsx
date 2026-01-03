import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Otp from "./auth/Otp";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./dashboard/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import MealsDetails from "./dashboard/MealsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/otp"
          element={
            <PublicRoute>
              <Otp />
            </PublicRoute>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/meals/:id" element={<MealsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
