import { useEffect, useMemo, useRef, useState } from "react";
import { CompareIcon, LikeIcon, ShareIcon } from "../../assets";

const OurProducts = () => {
  const [extendButton, setExtendButton] = useState(false);
  const prevExtendButtonRef = useRef(extendButton);

  const images = useMemo(
    () => [
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="syltherine.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Syltherine",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="lolito.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Leviosa",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="lolito.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Lolito",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="respira.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Respira",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="grifo.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Grifo",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="muggo.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Muggo",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="pingky.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Pingky",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="potty.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Potty",
      },
    ],
    []
  );
  const moreImages = useMemo(
    () => [
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="syltherine.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Syltherine",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="lolito.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Leviosa",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="lolito.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Lolito",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="respira.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Respira",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="grifo.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Grifo",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="muggo.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Muggo",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="pingky.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Pingky",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="potty.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Potty",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="muggo.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Muggo",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="pingky.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Pingky",
      },
      {
        component: (
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src="potty.png" className="mx-auto object-fit" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
              <button
                className="absolute border right-10 py-3 px-16 top-44 mb-4 opacity-100 bg-white text-inline font-lg font-bold  text-yellow-200"
                href="/cart"
              >
                Add to cart
              </button>
              <ul className="absolute top-64 grid grid-cols-3 mx-4 gap-2 items-center">
                <li className="text-white flex gap-1">
                  <ShareIcon className="mt-1" />
                  <p>Share</p>
                </li>
                <li className="text-white flex gap-1">
                  <CompareIcon className="mt-1" />
                  <p>Compare</p>
                </li>
                <li className="text-white flex mx-2 gap-1">
                  <LikeIcon className="mt-1" />
                  <p className="">Like</p>
                </li>
              </ul>
            </div>
          </div>
        ),
        label: "Potty",
      },
    ],
    []
  );
  useEffect(() => {
    if (!extendButton && prevExtendButtonRef.current) {
      const productSection = document.getElementById("product-section");
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    prevExtendButtonRef.current = extendButton;
  }, [extendButton]);
  const handleClick = () => {
    setExtendButton((prevValue) => !prevValue);
  };
  return (
    <>
      <div id="product-section" className="mb-14">
        <div className="flex justify-center mb-8 font-bold text-5xl">
          Our Products
        </div>

        <ul className="flex flex-wrap gap-8 mx-12 mb-8">
          {(extendButton ? moreImages : images).map((image, index) => (
            <li key={index}>{image.component}</li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="px-20 py-3 border border-yellow-200 text-yellow-200"
          >
            {extendButton ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
