import { useMemo } from "react";

const OurProducts = () => {
  const images = useMemo(
    () => [
      {
        component: <img src="syltherine.png" className="mx-auto object-fit" />,
        label: "Syltherine",
      },
      {
        component: <img src="leviosa.png" className="mx-auto object-fit" />,
        label: "Leviosa",
      },
      {
        component: <img src="lolito.png" className="mx-auto object-fit" />,
        label: "Lolito",
      },
      {
        component: <img src="respira.png" className="mx-auto object-fit" />,
        label: "Respira",
      },
      {
        component: <img src="grifo.png" className="mx-auto object-fit" />,
        label: "Grifo",
      },
      {
        component: <img src="muggo.png" className="mx-auto object-fit" />,
        label: "Muggo",
      },
      {
        component: <img src="pingky.png" className="mx-auto object-fit" />,
        label: "Pingky",
      },
      {
        component: <img src="potty.png" className="mx-auto object-fit" />,
        label: "Potty",
      },
    ],
    []
  );
  return (
    <div className="mb-14">
      <div className="flex justify-center mb-8 font-bold text-5xl">
        Our Products
      </div>
      <ul className="flex flex-wrap gap-8 mx-12 mb-8">
        {images.map((image, index) => (
          <li key={index}>{image.component}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="px-20 py-3 border border-yellow-200 text-yellow-200">
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
