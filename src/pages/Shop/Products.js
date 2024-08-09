import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { CompareIcon, LikeIcon, ShareIcon } from "../../assets";
import clsx from "clsx";

const Products = () => {
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
    ],
    []
  );

  const itemsPerPage = 8;
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const navigate = useNavigate();

  const getPageFromQuery = () => {
    const page = parseInt(query.get("page"), 10);
    return isNaN(page) || page < 1 ? 1 : page;
  };

  const [currentPage, setCurrentPage] = useState(getPageFromQuery);
  useEffect(() => {
    setCurrentPage(getPageFromQuery());
  }, [useLocation().search]);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const currentImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      navigate(`/shop?page=${page}`);
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <ul className="flex flex-wrap px-20 py-16 gap-8">
        {" "}
        {currentImages.map((image, index) => (
          <li key={index}> {image.component}</li>
        ))}
      </ul>
      <ul className="flex justify-center gap-4 mb-4">
        <li className="flex flex-wrap gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-yellow-100  active:bg-yellow-200 active:text-white rounded-md flex justify-center px-6 py-4"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              onClick={() => handlePageChange(index + 1)}
              className={clsx(
                "rounded-md flex justify-center px-6 py-4",
                currentPage === index + 1 ? "bg-yellow-200" : "bg-yellow-100"
              )}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </li>

        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-yellow-100 active:bg-yellow-200 active:text-white rounded-md flex justify-center px-6 py-4"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Products;
