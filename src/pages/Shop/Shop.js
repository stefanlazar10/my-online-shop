import Products from "./Products";
import ShopFilter from "./ShopFilter";

const Shop = () => {
  return (
    <>
      {" "}
      <ShopFilter />
      <Products />{" "}
      <img src="products-footer-frame.png" className="h-[40vh] w-[100vw]" />
    </>
  );
};
export default Shop;
