import { FilterIcon, LineIcon, ShowGridIcon, ViewListIcon } from "../../assets";

const ShopFilter = () => {
  const filterIcons = [
    { component: <FilterIcon />, label: "Filter Icon" },
    { component: <p>Filter</p>, label: "Filter" },
    { component: <ShowGridIcon />, label: "Grid Icon" },
    { component: <ViewListIcon />, label: "View List Icon" },
    { component: <LineIcon />, label: "LineIcon" },
  ];
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
            Showing 1-8 products of 32 results
          </li>
        </ul>
        <ul className="absolute right-24 my-6 flex gap-4 items-center">
          <li>Show</li>
          <li>
            <button className="bg-white px-4 py-2 text-grey">8</button>
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
