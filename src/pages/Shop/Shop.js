import { useState } from "react";
import Products from "./Products";
import ShopFilter from "./ShopFilter";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
  };
  return (
    <>
      {" "}
      <ShopFilter onItemsPerPageChange={handleItemsPerPageChange} />
      <Products itemsPerPage={itemsPerPage} />
      <img src="products-footer-frame.png" className="h-[40vh] w-[100vw]" />
    </>
  );
};
export default Shop;
