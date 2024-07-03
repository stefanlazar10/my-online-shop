import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { useMemo } from "react";

const App = () => {
  const routes = useMemo(
    () => [
      { path: "/", component: Home },
      { path: "/home", component: Home },
      { path: "*", component: NotFound },
    ],
    []
  );
  return (
    <div>
      <Routes>
        {routes.map((route, index) => {
          const RouteComponent = route.component;
          return (
            <Route key={index} path={route.path} element={<RouteComponent />} />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
