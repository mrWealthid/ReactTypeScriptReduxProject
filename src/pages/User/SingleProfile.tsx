import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProfile = () => {
  const [index, setIndex] = useState(0);

  const { id } = useParams();

  console.log(id);
  function AccountView() {
    return (
      <>
        <div className="lg:w-3/4">
          <form>
            <p className="mb-3 text-2xl font-medium">Account Information</p>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xs font-bold uppercase text-neutral"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  id=""
                  className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="0621328805"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-xs font-bold uppercase text-neutral"
                >
                  BAnk
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Victor I"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xs font-bold uppercase text-neutral"
                >
                  Account Name
                </label>
                <input
                  type="text"
                  id=""
                  className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div
          className=" p-4 rounded-lg"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <div className="mt-8" id="" role="tabpanel" aria-labelledby="">
            <div className="mb-4 overflow-x-auto border-b border-gray-200 ">
              <ul
                className="flex flex-wrap text-sm font-medium text-center"
                id="transactionsTab"
                data-tabs-toggle="#transactionsContent"
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 border-b-2 rounded-t-lg border-auraPrimary "
                    id="profile-tab"
                    data-tabs-target="#hotel"
                    type="button"
                    role="tab"
                    aria-controls="hotel"
                    aria-selected="true"
                  >
                    Hotel
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 text-gray-500 border-b-2 border-transparent border-gray-100 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                    id="dashboard-tab"
                    data-tabs-target="#apartment"
                    type="button"
                    role="tab"
                    aria-controls="apartment"
                    aria-selected="false"
                  >
                    Apartment
                  </button>
                </li>

                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 text-gray-500 border-b-2 border-transparent border-gray-100 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                    id="dashboard-tab"
                    data-tabs-target="#resturant"
                    type="button"
                    role="tab"
                    aria-controls="resturant"
                    aria-selected="false"
                  >
                    Resturant
                  </button>
                </li>

                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 text-gray-500 border-b-2 border-transparent border-gray-100 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                    id="dashboard-tab"
                    data-tabs-target="#Expereince"
                    type="button"
                    role="tab"
                    aria-controls="Expereince"
                    aria-selected="false"
                  >
                    Expereince
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 text-gray-500 border-b-2 border-transparent border-gray-100 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                    id="dashboard-tab"
                    data-tabs-target="#Photography"
                    type="button"
                    role="tab"
                    aria-controls="Photography"
                    aria-selected="false"
                  >
                    Photography
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 text-gray-500 border-b-2 border-transparent border-gray-100 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                    id="dashboard-tab"
                    data-tabs-target="#Workshop"
                    type="button"
                    role="tab"
                    aria-controls="Workshop"
                    aria-selected="false"
                  >
                    Workspace
                  </button>
                </li>
              </ul>
            </div>
            <div id="transactionsContent" className="overflow-x-auto">
              {/* <!-- HOTEL CONTENT --> */}
              <div
                className="p-4 bg-white"
                id="hotel"
                role="tabpanel"
                aria-labelledby="hotel-tab"
              >
                <div className="flex flex-col flex-wrap items-center justify-between mb-10 overflow-x-auto md:flex-row">
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 m-0 border-gray-300 rounded focus:ring-gray-500 "
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                    <div>
                      <svg
                        className="w-6 h-6 text-gray-300"
                        fill="gray-200"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        ></path>
                      </svg>
                    </div>
                    <form>
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Search
                      </label>
                      <input
                        type="search"
                        id="default-search"
                        className="bg-gray-100 htmlForm-control"
                        placeholder="Search"
                        required
                      />
                    </form>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-2 md:gap-6">
                    <div className="">
                      <button className="w-full md:px-4 px-2 py-1.5 font-light flex items-center  text-black border btn">
                        Filter
                        <img
                          src="../../img/icon/filteer.svg"
                          alt=""
                          className="ml-2 md:ml-4"
                        />
                      </button>
                    </div>
                    <form action="" className="flex items-center space-x-2">
                      <label
                        htmlFor="countries"
                        className="block text-sm font-light text-gray-900 "
                      >
                        Sort By
                      </label>
                      <select
                        id="countries"
                        className="px-3 py-1.5 text-sm font-light text-gray-900 border border-gray-300 bg-gray-50 rounded"
                      >
                        <option value="">Most Recent</option>
                      </select>
                    </form>
                    <div className="">
                      <button className="w-full px-6 py-1.5 font-light text-black border btn">
                        Export As
                      </button>
                    </div>

                    <div className="flex items-center">
                      <img
                        src="../../img/icon/printer.svg"
                        className="w-6 h-6 mr-1"
                        alt=""
                      />
                      <p>print</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-auraPrimary100">
                      <tr>
                        <th scope="col" className="p-4">
                          Hotels
                        </th>
                        <th scope="col" className="px-6 py-4 uppercase">
                          GUEST NAME
                        </th>
                        <th scope="col" className="px-6 py-4 uppercase">
                          Total amount
                        </th>
                        <th scope="col" className="px-6 py-4 uppercase">
                          Payment Status
                        </th>
                        <th scope="col" className="px-6 py-4 uppercase">
                          Check-in
                        </th>
                        <th scope="col" className="px-6 py-4 uppercase">
                          check-out
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-light bg-white border-b text-back hover:bg-gray-50">
                        <td className="p-2 md:px-6 md:py-4">Marriot</td>
                        <td className="p-2 font-light md:px-6 md:py-4 whitespace-nowrap">
                          Name
                        </td>
                        <td className="p-2 md:px-6 md:py-4">N200,000</td>
                        <td className="p-2 md:px-6 md:py-4">Paystack Paid</td>
                        <td className="p-2 md:px-6 md:py-4">28 Apr 2022</td>
                        <td className="p-2 md:px-6 md:py-4">28 Apr 2022</td>

                        <td className="p-2 md:px-2 md:py-4">
                          <button
                            className="text-xl"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown-table"
                          >
                            ...
                          </button>

                          <div
                            className="z-50  w-40 my-6 text-sm list-none bg-white rounded shadow"
                            id="dropdown-table"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                            style={{
                              position: "absolute",
                              inset: "auto auto 0px 0px",
                              margin: "0px",
                              transform: "translate3d(1054.4px, 1244px, 0px)",
                            }}
                          >
                            <ul className="" aria-labelledby="dropdown">
                              <li>
                                <a
                                  href="./role-details.html"
                                  className="flex items-center px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                >
                                  View Details
                                </a>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                  data-modal-toggle="successModal"
                                >
                                  Reset Password
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                >
                                  Disable User
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr className="font-light bg-white border-b text-back hover:bg-gray-50">
                        <td className="p-2 md:px-6 md:py-4">Marriot</td>
                        <td className="p-2 font-light md:px-6 md:py-4 whitespace-nowrap">
                          Name
                        </td>
                        <td className="p-2 md:px-6 md:py-4">N200,000</td>
                        <td className="p-2 md:px-6 md:py-4">Paystack Paid</td>
                        <td className="p-2 md:px-6 md:py-4">28 Apr 2022</td>
                        <td className="p-2 md:px-6 md:py-4">28 Apr 2022</td>

                        <td className="p-2 md:px-2 md:py-4">
                          <button
                            className="text-xl"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown-table"
                          >
                            ...
                          </button>

                          <div
                            className="z-50  w-40 my-6 text-sm list-none bg-white rounded shadow"
                            id="dropdown-table"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                            style={{
                              position: "absolute",
                              inset: "auto auto 0px 0px",
                              margin: "0px",
                              transform: "translate3d(1054.4px, 1244px, 0px)",
                            }}
                          >
                            <ul className="" aria-labelledby="dropdown">
                              <li>
                                <a
                                  href="./role-details.html"
                                  className="flex items-center px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                >
                                  View Details
                                </a>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                  data-modal-toggle="successModal"
                                >
                                  Reset Password
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                >
                                  Disable User
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr className="font-light bg-white border-b text-back hover:bg-gray-50">
                        <td className="p-2 md:px-6 md:py-4">Marriot</td>
                        <td className="p-2 font-light md:px-6 md:py-4 whitespace-nowrap">
                          Name
                        </td>
                        <td className="p-2 md:px-6 md:py-4">N200,000</td>
                        <td className="p-2 md:px-6 md:py-4">Paystack Paid</td>
                        <td className="p-2 md:px-6 md:py-4">28 Apr 2022</td>
                        <td className="p-2 md:px-6 md:py-4">28 Apr 2022</td>

                        <td className="p-2 md:px-2 md:py-4">
                          <button
                            className="text-xl"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown-table"
                          >
                            ...
                          </button>

                          <div
                            className="z-50 hidden w-40 my-6 text-sm list-none bg-white rounded shadow"
                            id="dropdown-table"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                            style={{
                              position: "absolute",
                              inset: "auto auto 0px 0px",
                              margin: "0px",
                              transform: "translate3d(1054.4px, 1244px, 0px)",
                            }}
                          >
                            <ul className="" aria-labelledby="dropdown">
                              <li>
                                <a
                                  href="./role-details.html"
                                  className="flex items-center px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                >
                                  View Details
                                </a>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                  data-modal-toggle="successModal"
                                >
                                  Reset Password
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                                >
                                  Disable User
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function SecurityPageView() {
    return (
      <div className="lg:w-3/4 ">
        <div className="mt-3">
          <h2 className="text-2xl font-semibold">Login</h2>
          <div className="flex justify-between">
            <div className="mt-3">
              <p className="font-medium text-black">Password</p>
              <label htmlFor="password" className="text-neutral">
                Last updated 1 month ago
              </label>
            </div>
            <div>
              <button className="px-5 py-2 font-bold border border-gray-300 rounded-xl">
                Reset Pssword
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
    );
  }

  function ProfileFormView() {
    return (
      <div id="myTabContent">
        <div
          className=" p-4 rounded-lg"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="lg:w-3/4 ">
            <form>
              <p className="mb-3 text-base font-medium">Account info</p>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    Display Name
                  </label>
                  <input
                    type="text"
                    id=""
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Victor XX"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    real name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Victor I"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id=""
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="name"
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Victor@transcorp.ng"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    Emergency contact name
                  </label>
                  <input
                    type="text"
                    id=""
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Jacklyn Parm"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    EMERGENCY CONTACT NUMBER
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="08086754342"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    EMERGENCY CONTACT Email
                  </label>
                  <input
                    type="text"
                    id=""
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Jacklyn@mail.com"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xs font-bold uppercase text-neutral"
                  >
                    EMERGENCY CONTACT NUMBER
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="House 2B, Beckly estate, Lekki, Lagos."
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  function PropertyView() {
    return (
      <div
        className=" p-4 rounded-lg"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a href="./properties.html" className="rounded-lg hover:bg-gray-100">
            <div className="relative">
              <img
                src="/img/victoria.png"
                className="w-full h-64 rounded-t-xl"
                alt=""
              />
              <div className="flex items-center px-2 py-1 bg-black hotel-category">
                <img src="/img/icon/coporate icon.svg" alt="" />
                <p className="font-medium py-1.5 px-2">Corporate</p>
              </div>
            </div>
            <div className="px-4 py-6 card-home-body rounded-b-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-medium">Kapadoccia</p>
                  <p className="text-base">Lagos</p>
                </div>

                <div className="px-3 py-1 border rounded-sm ">
                  <p className="line-through text-neutral">N25,000</p>
                  <p className="text-xl font-bold text-auraPrimary">N20,000</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-6 mt-2 text-xs border-b">
                <div className="flex space-x-2 font-semibold capitalize text-neutral">
                  <img src="/img/icon/bed.svg" alt="bedroom icon" />
                  <span>5 bedroom</span>
                </div>

                <div className="flex space-x-2 capitalize text-neutral">
                  <img src="/img/icon/wifi.svg" alt="wifi icon" />
                  <span>free wifi</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 text-xs">
                <div>
                  <p className="font-semibold text-black">N 200,000 total</p>
                </div>

                <div className="">
                  <div className="flex items-center">
                    <img src="/img/icon/rate.svg" alt="" />
                    <p className="ml-1 font-semibold tx-sm">
                      4.9
                      <span className="ml-2 font-light text-neutral">
                        ( 12 reviews )
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="./properties.html" className="rounded-lg hover:bg-gray-100">
            <div className="relative">
              <img
                src="/img/deal2.png"
                className="w-full h-64 rounded-t-xl"
                alt=""
              />
              <div className="flex items-center px-2 py-1 bg-black hotel-category">
                <img src="/img/icon/coporate icon.svg" alt="" />
                <p className="font-medium py-1.5 px-2">Corporate</p>
              </div>
            </div>
            <div className="px-4 py-6 card-home-body rounded-b-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-medium">Kapadoccia</p>
                  <p className="text-base">Lagos</p>
                </div>

                <div className="px-3 py-1 border rounded-sm ">
                  <p className="line-through text-neutral">N25,000</p>
                  <p className="text-xl font-bold text-auraPrimary">N20,000</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-6 mt-2 text-xs border-b">
                <div className="flex space-x-2 font-semibold capitalize text-neutral">
                  <img src="/img/icon/bed.svg" alt="bedroom icon" />
                  <span>5 bedroom</span>
                </div>

                <div className="flex space-x-2 capitalize text-neutral">
                  <img src="/img/icon/wifi.svg" alt="wifi icon" />
                  <span>free wifi</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 text-xs">
                <div>
                  <p className="font-semibold text-black">N 200,000 total</p>
                </div>

                <div className="">
                  <div className="flex items-center">
                    <img src="/img/icon/rate.svg" alt="" />
                    <p className="ml-1 font-semibold tx-sm">
                      4.9
                      <span className="ml-2 font-light text-neutral">
                        ( 12 reviews )
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="./properties.html" className="rounded-lg hover:bg-gray-100">
            <div className="relative">
              <img
                src="/img/upper.png"
                className="w-full h-64 rounded-t-xl"
                alt=""
              />
              <div className="flex items-center px-2 py-1 bg-black hotel-category">
                <img src="/img/icon/coporate icon.svg" alt="" />
                <p className="font-medium py-1.5 px-2">Corporate</p>
              </div>
            </div>
            <div className="px-4 py-6 card-home-body rounded-b-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-medium">Kapadoccia</p>
                  <p className="text-base">Lagos</p>
                </div>

                <div className="px-3 py-1 border rounded-sm ">
                  <p className="line-through text-neutral">N25,000</p>
                  <p className="text-xl font-bold text-auraPrimary">N20,000</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-6 mt-2 text-xs border-b">
                <div className="flex space-x-2 font-semibold capitalize text-neutral">
                  <img src="/img/icon/bed.svg" alt="bedroom icon" />
                  <span>5 bedroom</span>
                </div>

                <div className="flex space-x-2 capitalize text-neutral">
                  <img src="/img/icon/wifi.svg" alt="wifi icon" />
                  <span>free wifi</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 text-xs">
                <div>
                  <p className="font-semibold text-black">N 200,000 total</p>
                </div>

                <div className="">
                  <div className="flex items-center">
                    <img src="/img/icon/rate.svg" alt="" />
                    <p className="ml-1 font-semibold tx-sm">
                      4.9
                      <span className="ml-2 font-light text-neutral">
                        ( 12 reviews )
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="./properties.html" className="rounded-lg hover:bg-gray-100">
            <div className="relative">
              <img
                src="/img/deal2.png"
                className="w-full h-64 rounded-t-xl"
                alt=""
              />
              <div className="flex items-center px-2 py-1 bg-black hotel-category">
                <img src="/img/icon/coporate icon.svg" alt="" />
                <p className="font-medium py-1.5 px-2">Corporate</p>
              </div>
            </div>
            <div className="px-4 py-6 card-home-body rounded-b-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-medium">Kapadoccia</p>
                  <p className="text-base">Lagos</p>
                </div>

                <div className="px-3 py-1 border rounded-sm ">
                  <p className="line-through text-neutral">N25,000</p>
                  <p className="text-xl font-bold text-auraPrimary">N20,000</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-6 mt-2 text-xs border-b">
                <div className="flex space-x-2 font-semibold capitalize text-neutral">
                  <img src="/img/icon/bed.svg" alt="bedroom icon" />
                  <span>5 bedroom</span>
                </div>

                <div className="flex space-x-2 capitalize text-neutral">
                  <img src="/img/icon/wifi.svg" alt="wifi icon" />
                  <span>free wifi</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 text-xs">
                <div>
                  <p className="font-semibold text-black">N 200,000 total</p>
                </div>

                <div className="">
                  <div className="flex items-center">
                    <img src="/img/icon/rate.svg" alt="" />
                    <p className="ml-1 font-semibold tx-sm">
                      4.9
                      <span className="ml-2 font-light text-neutral">
                        ( 12 reviews )
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="./properties.html" className="rounded-lg hover:bg-gray-100">
            <div className="relative">
              <img
                src="../../img/lawn.png"
                className="w-full h-64 rounded-t-xl"
                alt=""
              />
            </div>
            <div className="px-4 py-6 card-home-body rounded-b-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-medium">mariot</p>
                  <div className="flex items-center gap-4">
                    <p className="text-base">GRA, Lagos</p>
                    <p className="flex items-center gap-1 text-xs font-semibold text-neutral">
                      <span>
                        {" "}
                        <img src="../../img/icon/bed.svg" alt="" />{" "}
                      </span>
                      150
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1 border rounded-sm ">
                  <p className="line-through text-neutral">N25,000</p>
                  <p className="text-xl font-bold text-auraPrimary">N20,000</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-6 mt-2 text-xs border-b">
                <div className="flex space-x-2 font-semibold capitalize text-neutral">
                  <img src="/img/icon/bed.svg" alt="bedroom icon" />
                  <span>5 bedroom</span>
                </div>

                <div className="flex space-x-2 capitalize text-neutral">
                  <img src="/img/icon/wifi.svg" alt="wifi icon" />
                  <span>free wifi</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 text-xs">
                <div>
                  <p className="font-semibold text-black">N 200,000 total</p>
                </div>

                <div className="">
                  <div className="flex items-center">
                    <img src="../../img/icon/rate.svg" alt="" />
                    <p className="ml-1 font-semibold tx-sm">
                      4.9
                      <span className="ml-2 font-light text-neutral">
                        ( 12 reviews )
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="./properties.html" className="rounded-lg hover:bg-gray-100">
            <div className="relative">
              <img
                src="/img/upper.png"
                className="w-full h-64 rounded-t-xl"
                alt=""
              />
              <div className="flex items-center px-2 py-1 bg-black hotel-category">
                <img src="/img/icon/coporate icon.svg" alt="" />
                <p className="font-medium py-1.5 px-2">Corporate</p>
              </div>
            </div>
            <div className="px-4 py-6 card-home-body rounded-b-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-medium">Kapadoccia</p>
                  <p className="text-base">Lagos</p>
                </div>

                <div className="px-3 py-1 border rounded-sm ">
                  <p className="line-through text-neutral">N25,000</p>
                  <p className="text-xl font-bold text-auraPrimary">N20,000</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-6 mt-2 text-xs border-b">
                <div className="flex space-x-2 font-semibold capitalize text-neutral">
                  <img src="/img/icon/bed.svg" alt="bedroom icon" />
                  <span>5 bedroom</span>
                </div>

                <div className="flex space-x-2 capitalize text-neutral">
                  <img src="/img/icon/wifi.svg" alt="wifi icon" />
                  <span>free wifi</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 text-xs">
                <div>
                  <p className="font-semibold text-black">N 200,000 total</p>
                </div>

                <div className="">
                  <div className="flex items-center">
                    <img src="/img/icon/rate.svg" alt="" />
                    <p className="ml-1 font-semibold tx-sm">
                      4.9
                      <span className="ml-2 font-light text-neutral">
                        ( 12 reviews )
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  function toggleViews() {
    if (index === 0) {
      return <AccountView />;
    } else if (index === 1) {
      return <SecurityPageView />;
    } else if (index === 2) {
      return <ProfileFormView />;
    } else if (index === 3) {
      return <PropertyView />;
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="mr-4">
            <img
              src="../../img/avatar.png"
              className="rounded-full w-[7rem] h-[7rem]"
              alt=""
            />
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-medium">Tomiwa Sounke</h3>
            <div className="flex flex-col md:flex-row">
              <div>
                <p className="mb-2">
                  {" "}
                  <span className="text-neutral">Hosted by: </span> Tomiwa
                  Sorunke
                </p>
              </div>

              <div className="md:ml-8">
                <p className="mb-2">
                  {" "}
                  <span className="text-neutral">Contact: </span> +2348089567483
                </p>
              </div>
            </div>
            <p>
              {" "}
              <span className="text-neutral">Location: </span> Lekki Phase 1,
              Lagos, Nigeria
            </p>
          </div>
        </div>
        <div>
          <button
            className=" bg-white border w-full hover:bg-gray-200 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between"
            type="button"
          >
            Actions
          </button>
        </div>
      </div>

      <div className="min-h-full p-6 bg-white mt-6 rounded-lg shadow-md sm:rounded-md">
        <section className="flex gap-6 text-sm  border-b">
          <p
            className={`${index === 0 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(0);
            }}
          >
            Personal Info
          </p>
          <p
            className={`${index === 1 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(1);
            }}
          >
            Security
          </p>
          <p
            className={`${index === 2 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(2);
            }}
          >
            Account Information
          </p>

          <p
            className={`${index === 3 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(3);
            }}
          >
            Property
          </p>
        </section>

        {toggleViews()}
      </div>
    </div>
  );
};
