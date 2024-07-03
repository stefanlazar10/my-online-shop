const NewArrival = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="bg-arrival-background w-[100%] h-[100%] pr-12 pt-[20%] bg-no-repeat flex justify-end">
          <div className="h-[45%] w-[50%]  border rounded-md  bg-yellow-100 pt-[2%]">
            <div className="pl-8 text-2xl tracking-widest font-sans">
              New Arrival
            </div>
            <div className="text-6xl pl-8 font-sans font-bold text-yellow-200">
              Discover our <br></br> New Collection
            </div>
            <div className="text-xl pl-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis
            </div>
            <div className="pl-8 pt-4 h-full w-full">
              <button className=" w-[30%] bg-yellow-200 hover:bg-yellow-700 border h-[20%] font-sans font-bold text-l text-white">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
