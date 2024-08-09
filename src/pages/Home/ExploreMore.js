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
  
        <div
          id="default-carousel"
          class="relative pt-11 pb-11 h-full w-full"
          data-carousel="slide"
        >
          <div class="relative overflow-hidden rounded-lg w-[89%] h-full">
            <div class="duration-700 ease-in-out" data-carousel-item>
              <img
                src="bedroom-category.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
  
            <div class="hidden duration-700 ease-in-out " data-carousel-item>
              <img
                src="dining-category.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="living-room-category.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
  
          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="w-3 h-3 rounded-full dark:bg-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-200"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full dark:bg-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-200"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full dark:bg-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-200"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
          {/* 
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <img src="fwd-button.png" />
          </button> */}
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <img src="fwd-button.png" />
          </button>
        </div>
      </div>
    );
  };
  export default ExploreMore;