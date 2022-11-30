import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  function addStyle(val: string) {
    if (val) {
      return {
        color: "white",
        background: "#ff931f",
        textDecoration: "none",
        display: "block",
        padding: "10px",
        borderRadius: "10px",
      };
    }
    return {
      color: "#545e6f",
      background: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px",
    };
  }

  const routes = [
    {
      path: "",
      text: "Overview",
    },
    { path: "user", text: "User Management" },
    { path: "verification", text: "Verification" },
    { path: "reservation", text: "Reservation" },
  ];

  return (
    <div className="flex flex-col  w-1/4 gap-22 bg-gray-900 text-white py-8">
      {/* <h2 className="p-4 text-center text-lg">Admin Dashboard</h2> */}
      <section className="flex flex-col bg-inherit  mt-10 px-2">
        {routes.map((route, index) => (
          <NavLink
            style={({ isActive }: any) => addStyle(isActive)}
            to={route.path}
            key={route.text}
            end={index === 0 && true}
            className={
              "hover:translate-x-1 text-sm transition-all duration-500"
            }
          >
            {route.text}{" "}
          </NavLink>
        ))}
      </section>
    </div>
  );
};
