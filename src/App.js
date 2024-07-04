import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { useMemo } from "react";
import Navbar from "./components/Navbar/Navbar";

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
      <Navbar />
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
