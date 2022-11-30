import React from "react";
import { useParams } from "react-router-dom";

export const RoleDetails = () => {
  const [index, setIndex] = React.useState(0);
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <p className="text-lg font-bold"> RoleDetails</p>
      <div className="relative overflow-x-auto mt-3">
        <section className="bg-white p-3 rounded ">
          <section className="flex gap-6 text-sm  border-b">
            <p
              className={`${index === 0 && "border-b-2  border-green-300"} p-2`}
              onClick={() => {
                setIndex(0);
              }}
            >
              User
            </p>
          </section>

          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-auraPrimary100">
              <tr>
                <th scope="col" className="py-4"></th>

                <th scope="col" className="px-2 py-4 uppercase">
                  Email Address
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Date created
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Status
                </th>
                <th scope="col" className="px-2 py-4 uppercase">
                  Date Added
                </th>

                <th scope="col" className="px-2 py-4 uppercase"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="p-2 font-medium md:px-2 md:py-4 whitespace-nowrap"
                >
                  kola@gmail.com
                </th>

                <td className="p-2 md:px-2 md:py-4">01/01/2021</td>
                <td className="p-2 md:px-2 md:py-4">
                  <label
                    htmlFor="default-toggle"
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-green-600">
                      Active
                    </span>
                  </label>
                </td>
                <td className="p-2 md:px-2 md:py-4">22/05/2022</td>

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
                          Disable
                        </a>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                          data-modal-toggle="reassign-modal"
                        >
                          Reassign
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="p-2 font-medium md:px-2 md:py-4 whitespace-nowrap"
                >
                  kola@gmail.com
                </th>

                <td className="p-2 md:px-2 md:py-4">01/01/2021</td>
                <td className="p-2 md:px-2 md:py-4">
                  <label
                    htmlFor="default-toggle2"
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle2"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-neutral ">
                      Inactive
                    </span>
                  </label>
                </td>
                <td className="p-2 md:px-2 md:py-4">22/05/2022</td>

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
                          Disable
                        </a>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                          data-modal-toggle="reassign-modal"
                        >
                          Reassign
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="p-2 font-medium md:px-2 md:py-4 whitespace-nowrap"
                >
                  kola@gmail.com
                </th>

                <td className="p-2 md:px-2 md:py-4">01/01/2021</td>
                <td className="p-2 md:px-2 md:py-4">
                  <label
                    htmlFor="default-toggle"
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-neutral ">
                      Inactive
                    </span>
                  </label>
                </td>
                <td className="p-2 md:px-2 md:py-4">22/05/2022</td>

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
                          Disable
                        </a>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                          data-modal-toggle="reassign-modal"
                        >
                          Reassign
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="p-2 font-medium md:px-2 md:py-4 whitespace-nowrap"
                >
                  kola@gmail.com
                </th>

                <td className="p-2 md:px-2 md:py-4">01/01/2021</td>
                <td className="p-2 md:px-2 md:py-4">
                  <label
                    htmlFor="default-toggle"
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-neutral ">
                      Inactive
                    </span>
                  </label>
                </td>
                <td className="p-2 md:px-2 md:py-4">22/05/2022</td>

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
                          Disable
                        </a>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full px-4 py-3 text-sm text-neutral06 hover:bg-gray-100"
                          data-modal-toggle="reassign-modal"
                        >
                          Reassign
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};
