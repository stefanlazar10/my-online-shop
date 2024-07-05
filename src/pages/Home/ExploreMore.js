const ExploreMore = () => {
  return (
    <div className="bg-yellow-100 grid grid-cols-3 mb-14">
      <div className="px-24 col-span-1 pt-56">
        <div className="text-4xl font-bold tracking-wide mb-2">
          50+ Beautiful rooms inspiration
        </div>
        <div className="text-grey mb-8">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </div>
        <button className="border bg-yellow-200 py-3 px-8 text-white font-bold hover:bg-yellow-700">
          Explore More
        </button>
      </div>
      <img src="inner-peace.png" className="pt-11 pb-11" />
      <div className="">
        <img src="explore-living.png" className="pt-11 mb-10 " />
        <img src="indicator.png" />
      </div>
    </div>
  );
};
export default ExploreMore;
