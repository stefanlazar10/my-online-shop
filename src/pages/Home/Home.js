import NewArrival from "../../components/NewArrival/NewArrival";
import BrowseTheRange from "../BrowseTheRange/BrowseTheRange";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <div className="w-[100%] h-[100%]">
        <Navbar />
        <div className="grid grid-rows-6  overflow-y-scroll">
          <div className="row-span-1 h-[100%]">
            <NewArrival />
          </div>
          <div className="row-span-1">
            <BrowseTheRange />
          </div>
          <div className="row-span-1"></div>
          <div className="row-span-1"></div>
          <div className="row-span-1"></div>
          <div className="row-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
