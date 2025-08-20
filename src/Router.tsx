import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { routesConfig } from "./routesConfig";

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
