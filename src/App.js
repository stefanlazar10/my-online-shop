import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { useMemo } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  const routes = useMemo(
    () => [
      { path: "/", component: Home },
      { path: "/home", component: Home },
      { path: "/shop", component: Shop },
      { path: "*", component: NotFound },
    ],
    []
  );
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {routes.map((route, index) => {
          const RouteComponent = route.component;
          return (
            <Route key={index} path={route.path} element={<RouteComponent />} />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
