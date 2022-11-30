import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const UserManagement = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const tableData: any = [
    {
      id: 1,
      name: "Hotel2",
      email: "johndoe@gmail.com",
      contact: "1234567890",
      RegDate: "2020-01-01",
      lastLogin: "2020-01-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Hotel2",
      email: "johndoe@gmail.com",
      contact: "1234567890",
      RegDate: "2020-01-01",
      lastLogin: "2020-01-01",
      status: "Active",
    },
    {
      id: 3,
      name: "Hotel2",
      email: "johndoe@gmail.com",
      contact: "1234567890",
      RegDate: "2020-01-01",
      lastLogin: "2020-01-01",
      status: "Active",
    },
    {
      id: 4,
      name: "Hotel4",
      email: "johndoe@gmail.com",
      contact: "1234567890",
      RegDate: "2020-01-01",
      lastLogin: "2020-01-01",
      status: "Active",
    },
  ];

  function handleUserDetails(id: number) {
    navigate(`/admin/user/${id}`);
  }

  function Table({
    id,
    name,
    email,
    contact,
    RegDate,
    lastLogin,
    status,
  }: any) {
    const [show, setShow] = useState(false);

    const handleDialogues = (e: any) => {
      console.log(e);

      console.log(e.target.classList.contains("popup"));
      if (e.target.classList.contains("popup")) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    return (
      <>
        <tr
          onClick={(e) => handleDialogues(e)}
          className="bg-white relative border-b hover:bg-gray-50 "
        >
          <th
            scope="row"
            className="p-2 font-medium md:px-2 md:py-4 whitespace-nowrap"
          >
            {name}
          </th>
          <td className="p-2 text-center md:px-2 md:py-4">{email}</td>
          <td className="p-2 md:px-2 md:py-4">{contact}</td>
          <td className="p-2 md:px-2 md:py-4">{RegDate}</td>
          <td className="p-2 md:px-2 md:py-4">{lastLogin}</td>
          <td className="p-2 md:px-2 md:py-4 ">
            <button className="px-4 py-1 text-green-700 bg-green-100 rounded">
              {status}
            </button>
          </td>
          <td className="p-2 md:px-2 md:py-4">
            <button className="text-xl popup">...</button>

            {show && (
              <div
                className="z-50  w-40 my-6 text-sm list-none bg-white rounded shadow"
                id="dropdown-table"
                style={{
                  position: "absolute",
                  margin: "0px",
                  left: "785px",
                  top: "42px",
                }}
              >
                <ul>
                  <li>
                    <Link
                      to={`/admin/user/${id}`}
                      className="flex items-center px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                    >
                      View Details
                    </Link>
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

  function RoleView() {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-auraPrimary100">
            <tr>
              <th scope="col" className="px-2 py-4 uppercase">
                Role Name
              </th>
              <th scope="col" className="px-2 py-4 uppercase">
                Number of users
              </th>
              <th scope="col" className="px-2 py-4 uppercase">
                Date Created
              </th>
              <th scope="col" className="px-2 py-4 uppercase"></th>
              <th scope="col" className="px-2 py-4 uppercase"></th>
              <th scope="col" className="px-2 py-4 uppercase"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="p-2 font-medium md:px-2 md:py-4 whitespace-nowrap"
              >
                Verification
              </th>
              <td className="p-2 text-center md:px-2 md:py-4">13</td>
              <td className="p-2 md:px-2 md:py-4">22/05/2022</td>
              <td className="p-2 md:px-2 md:py-4">
                <Link to={`roles/1`}>View</Link>
              </td>
              <td className="p-2 md:px-2 md:py-4">
                <button
                  type="button"
                  className="text-auraPrimary"
                  data-modal-toggle="edit-role-modal"
                >
                  Edit
                </button>
              </td>
              <td className="p-2 md:px-2 md:py-4 ">
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function UserManagmentView() {
    return (
      <section>
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

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs wheat-light text-gray-700 uppercase ">
              <tr>
                <th scope="col" className="px-2 py-4 uppercase">
                  Name
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Email
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  contact
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Sign up date
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Last Signed in
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Status
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item: any, index: number) => (
                <Table {...item} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  function toggleViews() {
    if (index === 0) {
      return <UserManagmentView />;
    } else if (index === 1) {
      return <UserManagmentView />;
    } else if (index === 2) {
      return <RoleView />;
    }
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between  items-center">
        <p className="text-lg font-bold">Roles and Permission</p>

        <div className="flex gap-3 w-1/4">
          <button className="p-3 w-full rounded-lg text-white text-xs primary  primary">
            Create Role
          </button>
          <button className="p-3 w-full rounded-lg text-xs text-white primary-bg ">
            Add User
          </button>
        </div>
      </div>

      <section className="bg-white p-2 px-4 flex flex-col gap-2">
        <section className="flex gap-6 text-sm  border-b">
          <p
            className={`${index === 0 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(0);
            }}
          >
            User Management
          </p>
          <p
            className={`${index === 1 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(1);
            }}
          >
            Host Management
          </p>
          <p
            className={`${index === 2 && "border-b-2  border-green-300"} p-2`}
            onClick={() => {
              setIndex(2);
            }}
          >
            Role Management
          </p>
        </section>

        {toggleViews()}
      </section>
    </section>
  );
};
