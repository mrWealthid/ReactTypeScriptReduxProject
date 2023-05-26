import React from "react";
import Chart from "react-apexcharts";
import {
  // CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const datas: any = {
  series: [
    {
      name: "Hotel",
      data: [1, 42, 21, 54, 45, 111, 100, 210],
    },
    {
      name: "Apartment",
      data: [22, 73, 88, 89, 42, 96, 100, 300],
    },
    {
      name: "Tours",
      data: [33, 40, 22, 33, 47, 188, 10, 150],
    },
    {
      name: "Restaurant",
      data: [31, 40, 28, 51, 42, 109, 100, 200],
    },
    {
      name: "Photography",
      data: [11, 32, 45, 32, 34, 52, 41, 250],
    },
    {
      name: "Workstation",
      data: [5, 8, 43, 35, 39, 54, 41, 280],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 5,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          // reset: true| '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
      height: 350,
      type: "area",
      fontFamily: "Raleway, Arial, sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    // colors: ["red", "yellow", "green", "blue", "black"],

    fill: {
      colors: undefined,
      opacity: 0,
      type: "solid",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },

    legend: {
      position: "top",
      offsetY: 5,
      horizontalAlign: "left",
    },
    stroke: {
      curve: "smooth",
      show: true,
      //   lineCap: 'butt',
      //   colors: undefined,
      width: 1,
      dashArray: 0,
    },
    xaxis: {
      title: {
        text: "Time(Years)",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "15px",

          fontWeight: 600,
          cssClass: "apexcharts-xaxis-title",
        },
      },
      type: "category",

      categories: [
        2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ],

      tickPlacement: "on",
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    yaxis: {
      title: {
        text: "Amount",

        style: {
          color: undefined,
          fontSize: "15px",

          fontWeight: 600,
          cssClass: "apexcharts-xaxis-title",
        },
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#b6b6b6",
          width: 1,
          dashArray: 0,
        },
      },
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
    },
  },
};

const Cards = ({
  bg = "",
  bgTwo = "bg-white",
  title = "",
  first = false,
  statusOne = "Active",
  statusTwo = "Inactive",
}) => {
  return (
    <div className={`card  ${bgTwo} flex-1 flex gap-3`}>
      <section className="flex  flex-col mt-4 gap-8 ">
        <section
          className={` ${
            /bg-white/.test(bgTwo) ? "text-black" : "text-white"
          } flex flex-col `}
        >
          <p className={`${first ? "italic" : ""} text-xs `}> {title}</p>
          <p className="text-2xl"> 150</p>
        </section>
        <button className="p-2 w-full rounded-lg text-xs text-black bg-gray-100">
          {" "}
          View details
        </button>
      </section>

      <section
        className={`${bg}  flex-1 rounded-lg  w-48 justify-center text-black flex gap-4`}
      >
        <div className="flex flex-col text-xs text-center justify-around">
          <p>{statusOne}</p>

          <p className="font-bold text-xl">150</p>
        </div>

        <div className="flex text-xs flex-col justify-around">
          <p>{statusTwo}</p>

          <p className="font-bold text-xl">250</p>
        </div>
      </section>
    </div>
  );
};

export const Overview = () => {
  return (
    <section>
      <p className="text-lg font-bold">Dashboard</p>
      <section className="flex mt-4 gap-3">
        <Cards
          bg={"bg-white"}
          bgTwo={"bg-gray-800"}
          title={"Total Customers"}
          first={true}
        />
        <Cards bg={"bg-blue-200"} title={"Total Host"} />
        <Cards
          bg={"wheat"}
          title={"Total Reservation"}
          statusOne={"Approved"}
          statusTwo={"Declined"}
        />
      </section>

      <section className="flex gap-2 my-5">
        <section className="bg-white w-5/6 rounded-lg p-4">
          <section className="flex justify-between p-2 items-center">
            <p>Revenue Statistics</p>

            <div>
              <select className="bg-gray-100 border-none text-xs px-5 rounded py-2">
                <option>Last 6 Months</option>
              </select>
            </div>
          </section>
          <hr></hr>
          <Chart series={datas.series} type="area" options={datas.options} />
          <p className="font-bold text-xs text-center">Total Revenue (600M)</p>
        </section>
        <section className="bg-white  w-2/6 flex flex-col gap-8  rounded-lg p-4">
          <div className="flex justify-between">
            <p>Summary</p>
            <section className="flex flex-col gap-5 justify-end">
              <select className="bg-gray-100 border-none rounded text-xs py-2 px-5">
                <option>Apartment</option>
              </select>

              <select className="wheat-light text-xs border-none  py-2 px-5 ml-6 rounded p-2">
                <option>Daily</option>
              </select>
            </section>
          </div>

          <div style={{ width: 150, height: 150, margin: "auto" }}>
            {/* <CircularProgressbar
              value={66}
              text={`
              ${7000}`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 1,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                textSize: "14px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors

                pathColor: "black",
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "white",
              })}
            /> */}

            <CircularProgressbarWithChildren
              value={66}
              strokeWidth={10}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 1,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                // textSize: "14px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors

                pathColor: "rgb(31, 41, 55)",
                textColor: "black",
                trailColor: "gainsboro",
                backgroundColor: "white",
              })}
            >
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

              <div style={{ fontSize: 18, fontWeight: 300 }}>Total</div>
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 3 }}>
                8000
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <section className="bg-gray-100 rounded-lg p-6 space-y-12">
            <div className="text-xs">
              <p>Accepted Reservation</p>
              <p className="text-green-500 font-bold">121</p>
            </div>

            <div className="text-xs">
              <p>Rejected Reservation</p>

              <p className="text-red-600 font-bold">886</p>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
