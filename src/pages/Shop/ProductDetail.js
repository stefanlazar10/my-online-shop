import NotFound from "../NotFound/NotFound";
import clsx from "clsx";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CompareIcon,
  FacebookIcon,
  LikeIcon,
  LineIcon,
  LinkedInIcon,
  ShareIcon,
  StarsIcon,
  TwitterIcon,
} from "../../assets";

const ProductDetail = () => {
  const products = useMemo(
    () => [
      {
        id: 1,

        label: "Syltherine",
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/syltherine.png",
      },
      {
        id: 2,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",
        price: "Rp 2.000.000",
        imageUrl: "/lolito.png",
      },
      {
        id: 3,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/lolito.png",
      },
      {
        id: 4,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/respira.png",
      },
      {
        id: 5,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/grifo.png",
      },
      {
        id: 6,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/muggo.png",
      },
      {
        id: 7,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/pingky.png",
      },
      {
        id: 8,
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
        description: "Description",
        price: "Rp 2.000.000",
        imageUrl: "/potty.png",
      },
      {
        id: 9,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/syltherine.png",
      },
      {
        id: 10,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/lolito.png",
      },

      {
        id: 11,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/grifo.png",
      },
      {
        id: 12,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/muggo.png",
      },
      {
        id: 13,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/pingky.png",
      },
      {
        id: 14,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/potty.png",
      },
      {
        id: 15,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/lolito.png",
      },
      {
        id: 16,
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
        description:
          "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

        price: "Rp 2.000.000",
        imageUrl: "/respira.png",
      },
    ],
    []
  );

  const previewProducts = useMemo(() => [
    {
      id: 1,

      label: "Syltherine",
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

      price: "Rp 2.000.000",
      imageUrl: "/syltherine.png",
    },
    {
      id: 2,
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
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",
      price: "Rp 2.000.000",
      imageUrl: "/lolito.png",
    },
    {
      id: 3,
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
      label: "Muggo",
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

      price: "Rp 2.000.000",
      imageUrl: "/muggo.png",
    },
    {
      id: 4,
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
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",

      price: "Rp 2.000.000",
      imageUrl: "/respira.png",
    },
  ]);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [extendButton, setExtendButton] = useState(false);
  const prevExtendButtonRef = useRef(extendButton);
  const [SizeButtons, setSizeButtons] = useState([
    { label: "L", state: false },
    {
      label: "XL",
      state: false,
    },
    { label: "XS", state: false },
  ]);
  const [DescriptionButtons, setDescriptionButtons] = useState([
    { label: "Description", state: true },
    {
      label: "Additional Information",
      state: false,
    },
    { label: "Reviews [5]", state: false },
  ]);
  useEffect(() => {
    if (!extendButton && prevExtendButtonRef.current) {
      const productSection = document.getElementById("ProductPreview-section");
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    prevExtendButtonRef.current = extendButton;
  }, [extendButton]);
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
  }, [id, products]);
  console.log(product);
  if (!id || !product) {
    return <NotFound />;
  }

  const handleClick = () => {
    setExtendButton((prevValue) => !prevValue);
  };
  const handleChangeSizeColor = (index) => {
    setSizeButtons(
      SizeButtons.map((button, i) =>
        i === index ? { ...button, state: true } : { ...button, state: false }
      )
    );
  };
  const handleChangeDescriptionColor = (index) => {
    setDescriptionButtons(
      DescriptionButtons.map((button, i) =>
        i === index ? { ...button, state: true } : { ...button, state: false }
      )
    );
  };
  return (
    <>
      <div className="grid grid-cols-2 bg-yellow-100 h-20 ">
        <ul className="my-6  px-28 flex gap-6 items-center text-grey">
          <li>Home </li>
          <li>&gt;</li> <li>Shop</li>
          <li>&gt;</li>
          <li>
            <LineIcon />
          </li>
          <li>{product.label}</li>
        </ul>
      </div>
      <div className="px-52 py-8 grid grid-cols-2">
        <div>
          <img src={product.imageUrl} />
        </div>
        <div className="gap-2">
          <p className="text-4xl mb-2">{product.label}</p>
          <p className="text-xl mb-2">{product.price}</p>
          <ul className="flex gap-4 items-center mb-4">
            <li>
              <StarsIcon />
            </li>
            <li>
              <LineIcon />
            </li>
            <li>5 Customer Review</li>
          </ul>
          <p className="mb-6">{product.description}</p>
          <p className="mb-2">Size</p>
          <ul className="flex gap-4 mb-4">
            {SizeButtons.map((button, index) => (
              <li>
                <button
                  key={index}
                  onClick={() => handleChangeSizeColor(index)}
                  className={clsx(
                    "rounded-md flex justify-center px-2 py-2",
                    button.state ? "bg-yellow-200" : "bg-yellow-100"
                  )}
                >
                  {button.label}
                </button>
              </li>
            ))}
          </ul>
          <p className="mb-2">Color</p>
          <ul className="flex gap-4 mb-4">
            <li>
              <button className=" rounded-3xl bg-purple-400 px-3 py-1 text-purple-400">
                1
              </button>
            </li>
            <li>
              <button className=" rounded-3xl bg-yellow-400 px-3 py-1 text-yellow-400">
                1
              </button>
            </li>
            <li>
              <button className=" rounded-3xl bg-black px-3 py-1 ">1</button>
            </li>
          </ul>
          <ul className="flex gap-4 mb-4">
            <li>
              <button className="border rounded-2xl border-black  text-lg px-10 py-4 whitespace-nowrap">
                - 1 +
              </button>
            </li>
            <li>
              <button className="border rounded-2xl border-black text-xl px-12 py-4 whitespace-nowrap">
                Add to Cart
              </button>
            </li>
            <li>
              <button className="border rounded-2xl border-black text-xl px-12 py-4 whitespace-nowrap">
                + Compare
              </button>
            </li>
          </ul>
          <div className="border-t-2 border-gray">
            <ul className="flex mb-2 gap-4 text-gray">
              <li>SKU</li>
              <li className="px-9">:</li>
              <li>SS001</li>
            </ul>
            <ul className="flex mb-2 gap-4 text-gray">
              <li>Category</li>
              <li>:</li>
              <li>Sofas</li>
            </ul>
            <ul className="flex mb-2 gap-4 text-gray">
              <li>Tags</li>
              <li>:</li>
              <li>Chair,Sofa,Home,Shop</li>
            </ul>
            <ul className="flex mb-2 gap-4 text-gray">
              <li className="mt-4">Share</li>
              <li className="mt-4">:</li>
              <li>
                <ul className="flex gap-2">
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                  <li className="mt-4">
                    <TwitterIcon />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray mb-12">
        <ul className="flex gap-8 text-2xl justify-center mt-12 mb-8 text-gray-400">
          {DescriptionButtons.map((button, index) => (
            <li>
              <button
                key={index}
                onClick={() => handleChangeDescriptionColor(index)}
                className={clsx(button.state ? "text-black" : "text-gray-400")}
              >
                {button.label}
              </button>
            </li>
          ))}
          <li></li>
        </ul>
        <p className="mb-2 px-32 tracking-wide text-gray-400">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="mb-2 px-32 tracking-wide text-gray-400">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <ul className="flex gap-4 mx-24">
          <li>
            <img src="/sofa-front.png" className="mx-auto object-fit" />
          </li>
          <li>
            <img src="/sofa-front-2.png" className="mx-auto object-fit " />
          </li>
        </ul>
      </div>
      <div className="border-t-2 border-gray mb-12">
        <p className="flex justify-center text-4xl mt-8 mb-8 tracking-wider font-sans">
          Related Products
        </p>
        <ul className="flex flex-wrap gap-8 mx-20 mb-8 ">
          {(extendButton ? products : previewProducts).map((product, index) => (
            <li key={index}>
              <img src={product.imageUrl} />
            </li>
          ))}
        </ul>
        <div className="flex justify-center " id="ProductPreview-section">
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
export default ProductDetail;
