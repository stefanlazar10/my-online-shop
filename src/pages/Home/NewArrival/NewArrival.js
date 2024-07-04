const NewArrival = () => {
  return (
    <div
      style={{ backgroundImage: 'url("new-arrival-background.png")' }}
      className="h-[716px] relative"
    >
      <div className="absolute right-12 bottom-24 max-w-[640px] flex justify-end">
        <div className="border rounded-xl  bg-yellow-100 pt-16 px-10 pb-10">
          <div className=" tracking-widest font-sans">New Arrival</div>
          <div className="text-5xl mb-4 font-sans font-bold text-yellow-200">
            Discover our <br /> New Collection
          </div>
          <div className="text-xl mb-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis
          </div>
          <button className="py-6 px-16 bg-yellow-200 hover:bg-yellow-700 border font-sans font-bold text-l text-white">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
