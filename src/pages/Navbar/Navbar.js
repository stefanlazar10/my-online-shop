import { Link } from "react-router-dom";
import {
  AccountIcon,
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../assets";

const Navbar = () => {
  const sections = [
    { content: "Home", path: "/home" },
    { content: "Shop", path: "/shop" },
    { content: "About", path: "/about" },
    { content: "Contact", path: "/contact" },
  ];
  const icons = [
    { component: AccountIcon, path: "/account" },
    { component: SearchIcon, path: "/search" },
    { component: HeartIcon, path: "/heart" },
    { component: ShoppingCartIcon, path: "/cart" },
  ];
  return (
    <>
      <div className="w-full h-20 grid grid-cols-3 gap-8">
        <ul className="flex px-12 col-span-1">
          <li className="flex justify-center pt-2 items-center">
            <img className="w-12" src="Logo.png" />
          </li>
          <li className="flex justify-center items-center pt-2 px-4">
            <img className="w-36" src="SkinClinic.png" />
          </li>
        </ul>
        <ul className="grid grid-cols-4 px-8 col-span-1 pt-8">
          {" "}
          {sections.map((section, index) => (
            <li key={index}>
              <Link to={section.path}>{section.content}</Link>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-4 px-24 pt-8">
          {" "}
          {icons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <li key={index}>
                <Link to={icon.path}>
                  <IconComponent />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
