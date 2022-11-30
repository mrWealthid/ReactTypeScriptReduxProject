import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePic from "./asset/avatar.png";
import Rooms from "./asset/apartment.png";
import RoomsImg from "./asset/hotels.png";

import HomeIcon from "./asset/home.svg";
import FlagIcon from "./asset/flag.svg";

export const SingleView = () => {
  const [index, setIndex] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  function AboutView() {
    return (
      <div
        className="p-3 rounded-lg"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 text-gray-500 gap-12 mx-5 ">
          <div className="flex flex-col just-around gap-3">
            <div className="capitalize text-lg font-bold text-black ">
              <p>about</p>
            </div>
            <div className="inline-flex py-auto">
              <span className="">
                <img
                  src={HomeIcon}
                  alt=""
                  width="20"
                  height="10"
                  className="inline"
                />
                <span className="text-center "> 2 guest</span>
              </span>
              <span className="px-3">
                <img
                  src={FlagIcon}
                  alt=""
                  width="20"
                  height="10"
                  className="inline"
                />
                <span className="text-center "> 1 bedroom</span>
              </span>

              <span className="px-3">
                <img
                  src={FlagIcon}
                  alt=""
                  width="20"
                  height="10"
                  className="inline"
                />
                <span className="text-center "> 1 bathroom</span>
              </span>
            </div>

            <div className=" leading-8">
              <p className="mb-3 text-auraSecondary ">
                Described by Queenstown House & Garden magazine as having 'one
                of the best views we've ever seen' you will love relaxing in
                this newly built, architectural house sitting proudly on Loft
                Hills.
              </p>

              <p className="mb-3 text-auraSecondary">
                {" "}
                Enjoy breathtaking 180' views of Lake Wakatipu from your well
                appointed & privately accessed bedroom with modern en suite and
                floor-to-ceiling windows.
              </p>

              <p className="mb-3 text-auraSecondary">
                Your private patio takes in the afternoon sun, letting you soak
                up unparalleled lake and mountain views by day and the stars &
                city lights by night.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-around">
            <div className="flex flex-row justify-between">
              <div className="capitalize text-lg text-black font-bold">
                Amenities
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>{" "}
                parking
              </div>
              <div>
                {" "}
                free wifi{" "}
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>{" "}
                24 hour guest reception
              </div>
              <div>
                {" "}
                Room service <input type="checkbox" name="" id="" />{" "}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>{" "}
                complime
              </div>
              <div>
                {" "}
                Healthy Breakfast <input type="checkbox" name="" id="" />{" "}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>{" "}
                Ample Wall Outlets
              </div>
              <div>
                {" "}
                Hair Styling Tools <input type="checkbox" name="" id="" />{" "}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>
                Flexible Checkout{" "}
              </div>
              <div>
                {" "}
                Pool{" "}
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>
                Entertainment
              </div>
              <div>
                Lugagge Storage <input type="checkbox" name="" id="" />{" "}
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div>
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>
                Cribs & Cots for Children
              </div>
              <div>
                custom ofers
                <span>
                  <input type="checkbox" name="" id="" />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function PropertyImagesView() {
    return (
      <div
        className=" p-3 bg-white rounded-lg "
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <div className="flex-col flex justify-between gap-2 w-full md:w-5/6 ">
          <div className="flex md:flex-row flex-row justify-around gap-3   popup-gallery ">
            {/* <!-- popup image gallery --> */}

            <a href="../../img/img container.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerimageroom2.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerroom3.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerimageroom2.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
          </div>
          <div className="flex flex-row justify-around gap-3   popup-gallery">
            <a href="../../img/img container.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerimageroom2.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerroom3.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerimageroom2.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
          </div>
          <div className="flex flex-row justify-around gap-3   popup-gallery ">
            <a href="../../img/img container.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerimageroom2.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerroom3.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
            <a href="../../img/img containerimageroom2.png" className="">
              <img className="rounded-md" src={Rooms} alt="Images" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  function RoomCards() {
    return (
      <div className="flex flex-col md:flex-row  rounded-xl items-center p-4 gap-3 shadow mb-4 ">
        <div>
          <img src={RoomsImg} alt="Images" />
        </div>

        <div className="">
          <p className="text-lg font-bold capitalize mb-3">Standard Room</p>
          <p className="mb-3">
            <span className="text-sm  text-auraSecondary capitalize">
              corporate price:
            </span>
            <span className="text-sm capitalize font-bold px-2">N25,000</span>{" "}
            <span className="text-sm text-auraSecondary capitalize ">
              Regular Price:
            </span>
            <span className="text-sm capitalize font-semibold px-2">
              N24,000
            </span>
          </p>
          <p className="mb-3 flex">
            {" "}
            <span className="text-sm flex gap-3 items-center text-auraSecondary capitalize">
              <input type="checkbox" name="" id="" /> Parking
            </span>{" "}
            <span className="text-sm flex gap-3 items-center capitalize font-semibold px-2 ">
              <input type="checkbox" name="" id="" />
              24 hour reception
            </span>
          </p>
          <p className="text-xs  underline text-auraPrimary capitalize mb-3">
            <a
              className="image-popup-vertical-fit"
              href="../../img/gaurav-dhiman-KiBtTuPtsHA-unsplashroom1.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              view photos
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }

  function RoomsView() {
    return (
      <div
        className=" p-3 bg-white rounded-lg"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <div className="flex flex-col justify-around   text-sm w-full md:w-3/5">
          <RoomCards />
          <RoomCards />
          <RoomCards />
        </div>
      </div>
    );
  }

  function goBackBtn() {
    navigate(-1);
  }

  function toggleViews() {
    if (index === 0) {
      return <AboutView />;
    } else if (index === 1) {
      return <PropertyImagesView />;
    } else if (index === 2) {
      return <RoomsView />;
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-start  mx-5 my-4 gap-3 ">
        <div className="inline-flex my-auto mx-3">
          <span className=" cursor-pointer" onClick={goBackBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9201L8.48 13.4001C7.71 12.6301 7.71 11.3701 8.48 10.6001L15 4.08008"
                stroke="#192252"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <img src={ProfilePic} alt="NoImage" className="inline" />
          </span>
        </div>

        {/* <!-- top section --> */}

        <div className="p-3 w-full ">
          <p className="text-lg font-bold capitalize mb-3">Victorias court</p>

          <section className="flex items-center justify-between">
            <p className=" space-x-2">
              <span className="text-sm text-gray-500 text-auraSecondary capitalize">
                Hosted By:
              </span>
              <span className="text-xs capitalize font-bold px-2">
                tomiwa sorunke
              </span>
              <span className="text-sm text-gray-500 text-auraSecondary capitalize ">
                Date:
              </span>
              <span className="text-xs capitalize font-bold px-2">
                08/07/2022 10:05PM
              </span>
              <span className="text-sm text-gray-500 text-auraSecondary capitalize ">
                PropertyID:
              </span>{" "}
              <span className="text-xs capitalize font-semibold px-2">
                12345678
              </span>
            </p>
            <span className=" px-2">
              {/* <!-- action select --> */}
              <select
                id="countries"
                className="bg-gray-50 border inline p-2 w-36 border-gray-300 text-gray-900 text-sm rounded-lg  w-50 focus-within:ring-0 focus-within:border-gray-300 "
              >
                <option value="">Actions</option>
                <option value="">Aprove</option>
                <option value="">Query</option>
                <option value="">Decline</option>
              </select>
            </span>
          </section>
          <p className="mb-3 space-x-2">
            {" "}
            <span className="text-sm text-gray-500 text-auraSecondary capitalize">
              Location:
            </span>
            <span className="text-xs capitalize font-semibold px-2 ">
              21 Freedom Way, Lekki Phase 1, Eti-Osa LGA, Lagos, Nigeria
            </span>
            <span className="text-sm text-gray-500 text-auraSecondary capitalize">
              Contact:
            </span>
            <span className="text-xs capitalize font-semibold px-2 ">
              {" "}
              +2348089567483
            </span>
          </p>
          <p className="mb-3 space-x-2">
            <span className="text-sm text-gray-500 text-auraSecondary capitalize">
              Landmark:
            </span>
            <span className="text-xs capitalize font-bold px-2">
              Opposite jex stores
            </span>
            <span className="text-sm text-gray-500 text-auraSecondary capitalize ">
              Gps Longitude:
            </span>
            <span className="text-xs capitalize font-bold px-2">
              23° 22' 45.1416'' E
            </span>
            <span className="text-sm text-gray-500 text-auraSecondary capitalize ">
              Gps Latitude:
            </span>{" "}
            <span className="text-xs capitalize font-semibold px-2">
              26° 31' 27.7644'' N
            </span>
          </p>
        </div>
      </div>

      <section className="bg-white rounded text-sm py-3">
        <section className="flex gap-6 px-6  border-b">
          <p
            className={`${
              index === 0 && "border-b-2 font-bold  border-[#ff931f]"
            } hover:cursor-pointer p-2`}
            onClick={() => {
              setIndex(0);
            }}
          >
            About Property
          </p>
          <p
            className={`${
              index === 1 && "border-b-2 font-bold  border-[#ff931f]"
            } p-2 hover:cursor-pointer`}
            onClick={() => {
              setIndex(1);
            }}
          >
            Property Images
          </p>
          <p
            className={`${
              index === 2 && "border-b-2 font-bold  border-[#ff931f]"
            } p-2 hover:cursor-pointer`}
            onClick={() => {
              setIndex(2);
            }}
          >
            Rooms
          </p>
        </section>

        {toggleViews()}
      </section>
    </div>
  );
};