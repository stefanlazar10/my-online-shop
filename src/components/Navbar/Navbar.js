import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  AccountIcon,
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../assets";

const Navbar = () => {
  const sections = useMemo(
    () => [
      { content: "Home", path: "/home" },
      { content: "Shop", path: "/shop" },
      { content: "About", path: "/about" },
      { content: "Contact", path: "/contact" },
    ],
    []
  );
  const icons = useMemo(
    () => [
      { component: <AccountIcon />, path: "/account" },
      { component: <SearchIcon />, path: "/search" },
      { component: <HeartIcon />, path: "/heart" },
      { component: <ShoppingCartIcon />, path: "/cart" },
    ],
    []
  );
  return (
    <>
      <div className="w-full h-20 grid grid-cols-3 gap-8">
        <ul className="flex px-12 gap-14">
          <li className="flex justify-center pt-2 items-center">
            <img className="w-12" src="Logo.png" />
          </li>
          <li className="flex justify-center w-8 tracking-wider font-bold text-4xl items-center pt-2">
            <Link to="home">Furniro</Link>
          </li>
        </ul>
        <ul className="grid grid-cols-4 gap-2 pt-8">
          {" "}
          {sections.map((section, index) => (
            <li key={index}>
              <Link to={section.path}>{section.content}</Link>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-4 px-16 pt-8">
          {" "}
          {icons.map((icon, index) => {
            return (
              <li key={index}>
                <Link to={icon.path}>{icon.component}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
