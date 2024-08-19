import { useState } from "react";
import { FilterIcon, LineIcon, ShowGridIcon, ViewListIcon } from "../../assets";
const ShopFilter = ({ onItemsPerPageChange }) => {
  const filterIcons = [
    { component: <FilterIcon />, label: "Filter Icon" },
    { component: <p>Filter</p>, label: "Filter" },
    { component: <ShowGridIcon />, label: "Grid Icon" },
    { component: <ViewListIcon />, label: "View List Icon" },
    { component: <LineIcon />, label: "LineIcon" },
  ];
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPage(value);
    onItemsPerPageChange(value);
  };
  return (
    <div>
      <div
        className="relative h-[316px]"
        style={{ backgroundImage: 'url("/shop-top-image.png")' }}
      >
        <div className=" flex justify-center pt-36 items-center text-5xl">
          Shop
        </div>
        <div className="flex justify-center  items-center">Home &gt; Shop</div>
      </div>
      <div className="grid grid-cols-2 bg-yellow-100 h-20 ">
        <ul className="my-6 flex gap-6 items-center">
          {filterIcons.map((filter, index) => (
            <li key={index}>{filter.component}</li>
          ))}
          <li className="text-sm inline-block">
            Showing 1-{itemsPerPage} products of 32 results
          </li>
        </ul>
        <ul className="absolute right-24 my-6 flex gap-4 items-center">
          <li>Show</li>
          <li>
            <select
              id="items-per-page"
              value={itemsPerPage}
              onChange={handleChange}
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
              <option value={64}>64</option>
            </select>
          </li>
          <li>Sort By</li>
          <li>
            <input
              type="text"
              className="bg-white w-[50%] text-grey"
              placeholder="Default"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ShopFilter;
