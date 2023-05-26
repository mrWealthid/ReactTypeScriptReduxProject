import React from "react";
// import axios from "axios";
import {  Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

export const SharedLayout = () => {
  //   useEffect(() => {
  //     const cancelToken = axios.CancelToken.source();

  //     axios("https://jsonplaceholder.typicode.com/todos", {
  //       cancelToken: cancelToken.token,
  //     })
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));

  //     return () => {Y
  //       cancelToken.cancel();
  //     };
  //   }, []);

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/todos")
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <main className="flex min-h-screen ">
        {/* <SmSidebar/> */}
        <Sidebar />
        <div className="flex flex-col bg-white w-screen">
          <Navbar />

          <div className="bg-gray-100 flex-col flex px-4 mt-2 min-h-screen">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
