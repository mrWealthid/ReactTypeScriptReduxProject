import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Reservation = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const tableData: any = [
    {
      id: 1,
      name: "Hotel",
      price: "$100",
      date: "2020-01-01",
      status: "Ongoing",
      action: "View",
      guest: "John Doe",
      checkin: "2020-01-01",
      checkout: "2020-01-01",
      reserved: "2020-01-01",
    },
    {
      id: 2,
      name: "Hotel2",
      price: "$100",
      date: "2020-01-01",
      status: "Pending",
      action: "View",
      guest: "John Doe",
      checkin: "2020-01-01",
      checkout: "2020-01-01",
      reserved: "2020-01-01",
    },
    {
      id: 3,
      name: "Hotel3",
      price: "$100",
      date: "2020-01-01",
      status: "Concluded",
      action: "View",
      guest: "John Doe",
      checkin: "2020-01-01",
      checkout: "2020-01-01",
      reserved: "2020-01-01",
    },
  ];

  const [data, setData] = useState(tableData);
  const tabs: string[] = ["Hotel", "Apartment", "Reservation", "Experience"];

  // function SmallCards({ tab = 15 }) {
  //   return (
  //     <div className="flex gap-4 justify-center bg-white rounded  w-36 p-2">
  //       <div>Ic</div>
  //       <div className=" space-y-3">
  //         <p>{tab}</p>
  //         <p>{tab}</p>
  //       </div>
  //     </div>
  //   );
  // }

  function handleDetails(id: number) {
    navigate(`/admin/reservation/${id}`);
  }

  function Table({
    id,
    name,
    price,
    date,
    status,
    action,
    guest,
    checkin,
    checkout,
    reserved,
  }: any) {
    const [show, setShow] = useState(false);

    const handleDialogues = (e: any) => {
      console.log(e);

      console.log(e.target.classList.contains("popup"));
      if (e.target.classList.contains("popup")) {
        setShow(!show);
      } else {
        setShow(false);
      }
    };

    return (
      <>
        <tr
          onClick={(e) => handleDialogues(e)}
          className="bg-white border-b relative hover:bg-gray-50 "
        >
          <td className="p-2  md:px-2 md:py-4">{name}</td>

          <td className="p-2  md:px-2 md:py-4">{guest}</td>
          <td className="p-2 md:px-2 md:py-4">{reserved}</td>
          <td className="p-2 md:px-2 md:py-4">{price}</td>
          <td className="p-2 md:px-2 md:py-4">{checkin}</td>
          <td className="p-2 md:px-2 md:py-4">{checkout}</td>
          <td className="p-2 md:px-2 md:py-4 ">
            <button className="px-4 py-1 text-green-700 bg-green-100 rounded">
              {status}
            </button>
          </td>
          <td className="p-2 md:px-2 md:py-4">
            <button className="popup">...</button>

            {show && (
              <div
                className="z-50  w-40 my-6 text-sm list-none bg-white rounded shadow"
                id="dropdown-table"
                style={{
                  position: "absolute",
                  margin: "0px",
                  left: "800px",
                  top: "42px",
                }}
              >
                <ul className="py-2" aria-labelledby="dropdown">
                  <li>
                    <Link
                      to={`/admin/reservation/${id}`}
                      className="block w-full px-4 py-2 text-sm font-medium text-left text-neutral hover:bg-gray-100"
                    >
                      View Details
                    </Link>
                  </li>

                  <li>
                    <button
                      type="button"
                      data-modal-toggle="authentication-modal"
                      className="block w-full px-4 py-3 text-sm font-medium text-left text-neutral hover:bg-gray-100"
                    >
                      Pause
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-3 text-sm font-medium text-left text-neutral hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </td>
        </tr>

        {show && (
          <tr
            className="bg-gray-200"
            style={{
              height: "100%",
              position: "fixed",
              top: "0px",
              width: "78%",
              right: "11px",
              opacity: "0.3",
              zIndex: "1",
            }}
            onClick={() => setShow(false)}
          ></tr>
        )}
      </>
    );
  }

  function LargeCards({ index }: any) {
    return (
      <div className="flex gap-1 flex-col  bg-white p-2 rounded  w-full">
        <section className="flex gap-6 text-sm  border-b">
          <p
            className={`${index === 0 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(0);
              setData(tableData);
            }}
          >
            All
          </p>
          <p
            className={`${index === 1 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(1);
              setData(
                tableData.filter((item: any) => item.status === "Pending")
              );
            }}
          >
            Pending
          </p>
          <p
            className={`${index === 2 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(2);
              setData(
                tableData.filter((item: any) => item.status === "Ongoing")
              );
            }}
          >
            Ongoing
          </p>
          <p
            className={`${index === 3 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(3);
              setData(
                tableData.filter((item: any) => item.status === "Concluded")
              );
            }}
          >
            Concluded
          </p>
        </section>

        <div className="flex flex-col flex-wrap items-center  justify-between mb-2 px-3 overflow-x-auto md:flex-row">
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 m-0 border-gray-300 rounded focus:ring-gray-500 "
              />
              <label htmlFor="checkbox-all-search text-sm" className="sr-only">
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
                className="mb-2 text-xs font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <input
                type="search"
                id="default-search"
                className="bg-gray-100  text-sm rounded-lg border border-none focus-within:ring-0 htmlForm-control"
                placeholder="Search"
                required
              />
            </form>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-2 md:gap-6">
            <form action="" className="flex items-center space-x-2">
              <label
                htmlFor="countries"
                className="block text-xs font-light text-gray-900 "
              >
                Sort By
              </label>
              <select
                id="countries"
                className="text-xs font-light text-gray-900 focus-within:ring-0 focus-within:border-none border border-gray-300 bg-gray-50 rounded"
              >
                <option value="">Most Recent</option>
              </select>
            </form>
            <div className="">
              <button className="w-full  text-xs px-6 py-2 rounded  bg-gray-50 font-light text-black border btn">
                Export As
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill=" #ff931f"
              >
                <path d="M448 192H64C28.65 192 0 220.7 0 256v96c0 17.67 14.33 32 32 32h32v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h32c17.67 0 32-14.33 32-32V256C512 220.7 483.3 192 448 192zM384 448H128v-96h256V448zM432 296c-13.25 0-24-10.75-24-24c0-13.27 10.75-24 24-24s24 10.73 24 24C456 285.3 445.3 296 432 296zM128 64h229.5L384 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v128h64V64z" />
              </svg>
              <p className="text-sm w-11">Print</p>
            </div>
          </div>
        </div>

        {/* table */}
        <table className="w-full text-sm  text-gray-500 ">
          <thead className="text-xs wheat-light text-gray-700 uppercase bg-auraPrimary100">
            <tr>
              <th scope="col" className="px-2 py-4 uppercase">
                Hotel Name
              </th>

              <th scope="col" className="px-2 py-4 uppercase">
                Guest
              </th>
              <th scope="col" className="px-2 py-4 uppercase">
                Reserved On
              </th>
              <th scope="col" className="px-2 py-4 uppercase">
                Amount
              </th>
              <th scope="col" className="px-2 py-4 uppercase">
                Check In
              </th>
              <th scope="col" className="px-2 py-4 uppercase">
                Check Out
              </th>
              <th scope="col" className="px-2 py-4 uppercase">
                Payment Status
              </th>
              <th scope="col" className="px-2 py-4 uppercase"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item: any, index: number) => {
              return <Table {...item} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <p className="text-lg font-bold">Reservations</p>

      <section className="flex gap-10">
        {tabs.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>

      {/* Status Cards */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-4">
          <div className=" bg-white rounded-md w-full h-20 p-2 pl-4 shadow-md flex items-center gap-3 ">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                y="0.830078"
                width="41.1699"
                height="41.1699"
                rx="20.585"
                fill="#080730"
              />
              <path
                d="M25.0207 24.0777L27.876 26.9323L26.9327 27.8757L24.078 25.0203C23.0159 25.8718 21.6947 26.3349 20.3334 26.333C17.0214 26.333 14.3334 23.645 14.3334 20.333C14.3334 17.021 17.0214 14.333 20.3334 14.333C23.6454 14.333 26.3334 17.021 26.3334 20.333C26.3353 21.6943 25.8722 23.0155 25.0207 24.0777ZM23.6834 23.583C24.5294 22.7129 25.002 21.5466 25 20.333C25 17.7543 22.9114 15.6663 20.3334 15.6663C17.7547 15.6663 15.6667 17.7543 15.6667 20.333C15.6667 22.911 17.7547 24.9997 20.3334 24.9997C21.547 25.0016 22.7133 24.5291 23.5834 23.683L23.6834 23.583ZM21.1187 17.7837C20.9221 17.8725 20.75 18.0076 20.6172 18.1776C20.4843 18.3475 20.3947 18.5471 20.3559 18.7593C20.3172 18.9715 20.3305 19.19 20.3948 19.3959C20.459 19.6018 20.5723 19.7891 20.7248 19.9416C20.8773 20.0941 21.0646 20.2074 21.2705 20.2716C21.4764 20.3359 21.6948 20.3492 21.907 20.3104C22.1192 20.2717 22.3189 20.1821 22.4888 20.0492C22.6587 19.9164 22.7939 19.7443 22.8827 19.5477C23.0579 20.1168 23.0376 20.7281 22.825 21.2843C22.6125 21.8405 22.2198 22.3096 21.7097 22.6167C21.1997 22.9239 20.6014 23.0515 20.0104 22.9792C19.4194 22.907 18.8695 22.639 18.4485 22.2179C18.0274 21.7969 17.7594 21.247 17.6871 20.656C17.6149 20.065 17.7425 19.4667 18.0496 18.9566C18.3568 18.4465 18.8259 18.0539 19.3821 17.8414C19.9383 17.6288 20.5496 17.6085 21.1187 17.7837Z"
                fill="#080730"
              />
            </svg>

            <div className=" flex-grow">
              <p className="font-bold text-xl pr-6  ">34 </p>
              <span className="text-xs capitalize font-normal">Saved</span>
            </div>
          </div>
          <div className=" bg-white rounded-md w-full h-20 p-2 shadow-md flex items-center gap-3 ">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                y="0.830078"
                width="41.1699"
                height="41.1699"
                rx="20.585"
                fill="#FF8300"
              />
              <path
                d="M16.7573 17.4243L21 13.1816L25.2427 17.4243C26.0818 18.2634 26.6532 19.3325 26.8847 20.4964C27.1162 21.6603 26.9974 22.8667 26.5433 23.963C26.0891 25.0594 25.3201 25.9965 24.3334 26.6557C23.3467 27.315 22.1867 27.6669 21 27.6669C19.8133 27.6669 18.6533 27.315 17.6666 26.6557C16.6799 25.9965 15.9109 25.0594 15.4567 23.963C15.0026 22.8667 14.8838 21.6603 15.1153 20.4964C15.3468 19.3325 15.9182 18.2634 16.7573 17.4243ZM21 15.0676L17.7 18.367C17.266 18.7999 16.9219 19.3143 16.6873 19.8806C16.4528 20.4469 16.3325 21.054 16.3333 21.667H25.6667C25.6675 21.054 25.5472 20.4469 25.3127 19.8806C25.0781 19.3143 24.734 18.7999 24.3 18.367L21 15.067V15.0676Z"
                fill="#FF8300"
              />
            </svg>

            <div className=" flex-grow">
              <p className="font-bold text-xl pr-6  ">116 </p>
              <span className="text-xs capitalize font-normal">Pending</span>
            </div>
          </div>
          <div className=" bg-white rounded-md w-full h-20 p-2 shadow-md flex items-center gap-3 ">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                y="0.830078"
                width="41.1699"
                height="41.1699"
                rx="20.585"
                fill="#AD2EDA"
              />
              <path
                d="M21 27.6663C17.318 27.6663 14.3334 24.6817 14.3334 20.9997C14.3334 17.3177 17.318 14.333 21 14.333C24.682 14.333 27.6667 17.3177 27.6667 20.9997C27.6667 24.6817 24.682 27.6663 21 27.6663ZM20.3334 22.9997V24.333H21.6667V22.9997H20.3334ZM21.6667 21.903C22.2025 21.7415 22.6624 21.393 22.9628 20.9208C23.2632 20.4487 23.384 19.8844 23.3032 19.3307C23.2224 18.7769 22.9454 18.2706 22.5227 17.904C22.1 17.5373 21.5596 17.3347 21 17.333C20.4606 17.333 19.9378 17.5198 19.5206 17.8617C19.1033 18.2036 18.8174 18.6794 18.7114 19.2083L20.0194 19.4703C20.0565 19.2846 20.1456 19.1133 20.2763 18.9762C20.407 18.8392 20.5739 18.742 20.7577 18.6961C20.9414 18.6503 21.1344 18.6575 21.3142 18.717C21.494 18.7765 21.6532 18.8858 21.7733 19.0323C21.8933 19.1787 21.9694 19.3563 21.9925 19.5442C22.0156 19.7322 21.9849 19.9229 21.9039 20.0941C21.8229 20.2653 21.6949 20.4099 21.5349 20.5112C21.3749 20.6125 21.1894 20.6663 21 20.6663C20.8232 20.6663 20.6537 20.7366 20.5286 20.8616C20.4036 20.9866 20.3334 21.1562 20.3334 21.333V22.333H21.6667V21.903Z"
                fill="#AD2EDA"
              />
            </svg>

            <div className=" flex-grow">
              <p className="font-bold text-xl pr-6  ">24 </p>
              <span className="text-xs capitalize font-normal">Queried</span>
            </div>
          </div>

          <div className=" bg-white rounded-md w-full h-20 p-2 shadow-md flex items-center gap-3 ">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                y="0.830078"
                width="41.1699"
                height="41.1699"
                rx="20.585"
                fill="#009EB3"
              />
              <path
                d="M23.321 15C25.5245 15 27 16.547 27 18.848V24.1591C27 26.4536 25.5245 28 23.321 28H17.6855C15.482 28 14 26.4536 14 24.1591V18.848C14 16.547 15.482 15 17.6855 15H23.321ZM20.4935 20.5126C20.1815 20.5126 19.928 20.772 19.928 21.0847V23.9577C19.928 24.2696 20.1815 24.5231 20.4935 24.5231C20.812 24.5231 21.0655 24.2696 21.0655 23.9577V21.0847C21.0655 20.772 20.812 20.5126 20.4935 20.5126ZM20.5065 18.4521C20.188 18.4521 19.9345 18.7056 19.9345 19.0241C19.9345 19.3355 20.188 19.5896 20.4935 19.5896C20.8185 19.5896 21.072 19.3355 21.072 19.0241C21.072 18.7056 20.8185 18.4521 20.5065 18.4521Z"
                fill="#009EB3"
              />
            </svg>

            <div className=" flex-grow">
              <p className="font-bold text-xl pr-6  ">6</p>
              <span className="text-xs capitalize font-normal">
                Resubmitted
              </span>
            </div>
          </div>
          <div className=" bg-white rounded-md w-full h-20 p-2 shadow-md flex items-center gap-3 ">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                y="0.830078"
                width="41.1699"
                height="41.1699"
                rx="20.585"
                fill="#32A071"
              />
              <path
                d="M14.3333 19.0001H16.3333V27.0001H14.3333C14.1565 27.0001 13.9869 26.9298 13.8619 26.8048C13.7369 26.6798 13.6666 26.5102 13.6666 26.3334V19.6667C13.6666 19.4899 13.7369 19.3204 13.8619 19.1953C13.9869 19.0703 14.1565 19.0001 14.3333 19.0001ZM17.862 18.1381L22.1286 13.8714C22.1853 13.8145 22.2607 13.7801 22.3408 13.7743C22.4209 13.7685 22.5004 13.7919 22.5646 13.8401L23.1333 14.2667C23.2912 14.3853 23.4105 14.548 23.4761 14.7342C23.5417 14.9205 23.5507 15.122 23.502 15.3134L22.7333 18.3334H27C27.3536 18.3334 27.6927 18.4739 27.9428 18.7239C28.1928 18.974 28.3333 19.3131 28.3333 19.6667V21.0694C28.3335 21.2436 28.2995 21.4162 28.2333 21.5774L26.17 26.5874C26.1196 26.7096 26.0341 26.814 25.9243 26.8875C25.8145 26.9609 25.6854 27.0001 25.5533 27.0001H18.3333C18.1565 27.0001 17.9869 26.9298 17.8619 26.8048C17.7369 26.6798 17.6666 26.5102 17.6666 26.3334V18.6094C17.6667 18.4326 17.7369 18.2631 17.862 18.1381Z"
                fill="#32A071"
              />
            </svg>

            <div className=" flex-grow">
              <p className="font-bold text-xl pr-6  ">46 </p>
              <span className="text-xs capitalize font-normal">Verified</span>
            </div>
          </div>
          <div className=" bg-white rounded-md w-full h-20 p-2 shadow-md flex items-center gap-3 ">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                y="0.830078"
                width="41.1699"
                height="41.1699"
                rx="20.585"
                fill="#F91313"
              />
              <path
                d="M27.6667 23H25.6667V15H27.6667C27.8435 15 28.0131 15.0702 28.1381 15.1953C28.2631 15.3203 28.3334 15.4899 28.3334 15.6667V22.3333C28.3334 22.5101 28.2631 22.6797 28.1381 22.8047C28.0131 22.9298 27.8435 23 27.6667 23ZM24.138 23.862L19.8714 28.1287C19.8146 28.1855 19.7393 28.22 19.6592 28.2258C19.5791 28.2315 19.4996 28.2082 19.4354 28.16L18.8667 27.7333C18.7088 27.6148 18.5895 27.4521 18.5239 27.2658C18.4582 27.0796 18.4493 26.878 18.498 26.6867L19.2667 23.6667H15C14.6464 23.6667 14.3073 23.5262 14.0572 23.2761C13.8072 23.0261 13.6667 22.687 13.6667 22.3333V20.9307C13.6665 20.7564 13.7005 20.5838 13.7667 20.4227L15.8307 15.4133C15.8809 15.2912 15.9662 15.1867 16.0759 15.1131C16.1856 15.0395 16.3146 15.0001 16.4467 15H23.6667C23.8435 15 24.0131 15.0702 24.1381 15.1953C24.2631 15.3203 24.3334 15.4899 24.3334 15.6667V23.3907C24.3333 23.5675 24.2631 23.737 24.138 23.862Z"
                fill="#F91313"
              />
            </svg>

            <div className=" flex-grow">
              <p className="font-bold text-xl pr-6  ">6 </p>
              <span className="text-xs capitalize font-normal">Declined</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <LargeCards index={index} />
      </section>
    </div>
  );
};

export default Reservation;
