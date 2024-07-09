const ShareSetup = () => {
  return (
    <div>
      <div className="flex justify-center text-grey text-lg ">
        Share your setup with
      </div>
      <div className="flex justify-center text-5xl font-bold tracking-wide mb-4">
        #FuniroFurniture
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-rows-2">
          <div className="grid grid-cols-2 mb-4">
            <img src="share-living-image.png" className="" />
            <img src="share-laptop-image.png" className="mt-12 object-cover" />
          </div>
          <div className="grid grid-cols-2">
            <img src="share-chair-image.png" />
            <img src="share-tables-images.png" />
          </div>
        </div>
        <div>
          <img src="share-dining-table-image.png" className="my-24 mx-24" />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <img src="share-bedroom-image.png" className="mt-12" />
            <img src="share-table-image.png" />
          </div>
          <div className="grid grid-cols-2">
            <img src="share-painting-image.png" />
            <img src="share-kitchen-image.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareSetup;
