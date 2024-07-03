import { LivingImage, DiningImage, BedroomImage } from "../../assets";
const BrowseTheRange = () => {
  const images = [
    { component: DiningImage, label: "Dining" },
    { component: BedroomImage, label: "Bedroom" },
    { component: LivingImage, label: "Living" },
  ];
  return (
    <>
      <div className="flex justify-center text-3xl font-bold font-sans">
        {" "}
        Browse The Range
      </div>
      <div className="flex justify-center text-xl text-grey-100 pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
      <ul className="grid grid-cols-3 pl-12 pt-8">
        {images.map((image, index) => {
          const ImageComponent = image.component;
          return (
            <li key={index} className="grid grid-rows-2">
              <div className="flex justify-center">
                <ImageComponent />
              </div>
              <div className="flex justify-center text-2xl pt-8 font-sans font-medium tracking-wider">
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
