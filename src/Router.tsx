import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { routesConfig } from "./routesConfig";
import { useLogin } from "./Contexts";

const ProtectedRoute = () => {
    const context = useLogin();
   if (!context) throw new Error("Error");

    const {authorized} = context;

  return authorized ? <Outlet /> : <Navigate to="/login"  />;
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routesConfig.map(({ path, element, index }) => (
            <Route
              key={path || "index"}
              path={path}
              index={index}
              element={element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
