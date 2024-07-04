import { useMemo } from "react";
const BrowseTheRange = () => {
  const images = useMemo(
    () => [
      {
        component: (
          <img
            src="dining-category.png"
            className="mx-auto object-fit rounded-xl"
          />
        ),
        label: "Dining",
      },
      {
        component: (
          <img
            src="bedroom-category.png"
            className="mx-auto object-fit rounded-xl"
          />
        ),
        label: "Bedroom",
      },
      {
        component: (
          <img
            src="living-room-category.png"
            className="mx-auto object-fit rounded-xl"
          />
        ),
        label: "Living",
      },
    ],
    []
  );
  return (
    <>
      <div className="flex justify-center text-4xl mt-14 font-bold ">
        Browse The Range
      </div>
      <div className="flex justify-center text-xl text-grey-100 mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
      <ul className="grid grid-cols-3 gap-2 mx-12">
        {images.map((image, index) => {
          return (
            <li key={index} className="flex flex-col space-y-8">
              {image.component}
              <div className="text-center text-2xl font-medium tracking-wider">
                {image.label}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BrowseTheRange;
