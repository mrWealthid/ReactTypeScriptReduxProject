const ReservationHistory = () => {
  return (
    <div className="w-full">
      <section className="h-auto  px-2 py-4 space-y-6 bg-dashboard">
        {/* <!-- header --> */}
        <div className="inline-flex items-center">
          <span className="my-auto px-3">
            <svg
              width="9"
              height="18"
              viewBox="0 0 9 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00009 16.92L1.48009 10.4C0.710088 9.62996 0.710088 8.36996 1.48009 7.59996L8.00009 1.07996"
                stroke="#192252"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <h1 className="text-2xl font-medium capitalize ">
            reservation History
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4 p-4">
          <div className="bg-white rounded-xl p-4 gap-4">
            <div className="flex flex-col justify-around p-4">
              <div>
                <h3 className="text-lg font-bold capitalize ">
                  metro jarakara hotel & spa
                </h3>
                <small className="text-auraSecondary text-xs font-semibold">
                  Order ID: 10023423
                </small>
              </div>

              <div className="flex flex-row justify-between items-center border rounded-xl my-3">
                <div className="inline-flex ">
                  <div className="p-6">
                    <svg
                      width="34"
                      height="28"
                      viewBox="0 0 34 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.75 0.43335H13.5167V5.46668C13.5167 6.11668 12.9834 6.63335 12.35 6.63335C11.7167 6.63335 11.1834 6.11668 11.1834 5.46668V0.43335H9.25003C2.6667 0.43335 0.500033 2.40002 0.350033 8.55002C0.333367 8.85002 0.4667 9.16668 0.683367 9.38335C0.900033 9.61668 1.18337 9.73335 1.5167 9.73335C3.85003 9.73335 5.7667 11.6667 5.7667 14C5.7667 16.3334 3.85003 18.2667 1.5167 18.2667C1.20003 18.2667 0.900033 18.3834 0.683367 18.6167C0.4667 18.8334 0.333367 19.15 0.350033 19.45C0.500033 25.6 2.6667 27.5667 9.25003 27.5667H11.1834V22.5334C11.1834 21.8834 11.7167 21.3667 12.35 21.3667C12.9834 21.3667 13.5167 21.8834 13.5167 22.5334V27.5667H24.75C31.5834 27.5667 33.6667 25.4833 33.6667 18.65V9.35002C33.6667 2.51668 31.5834 0.43335 24.75 0.43335ZM27.7834 13.8333L26.2334 15.3334C26.1667 15.3834 26.15 15.4833 26.1667 15.5667L26.5334 17.6833C26.6 18.0667 26.45 18.4667 26.1167 18.7C25.8 18.9333 25.3834 18.9667 25.0334 18.7833L23.1167 17.7833C23.05 17.75 22.95 17.75 22.8834 17.7833L20.9667 18.7833C20.8167 18.8667 20.65 18.9 20.4834 18.9C20.2667 18.9 20.0667 18.8333 19.8834 18.7C19.5667 18.4667 19.4 18.0833 19.4667 17.6833L19.8334 15.5667C19.85 15.4833 19.8167 15.4 19.7667 15.3334L18.2167 13.8333C17.9334 13.5667 17.8334 13.15 17.95 12.7834C18.0667 12.4 18.3834 12.1334 18.7834 12.0834L20.9167 11.7667C21 11.75 21.0667 11.7 21.1167 11.6333L22.0667 9.70002C22.25 9.35002 22.6 9.13335 23 9.13335C23.4 9.13335 23.75 9.35002 23.9167 9.70002L24.8667 11.6333C24.9 11.7167 24.9667 11.7667 25.05 11.7667L27.1834 12.0834C27.5834 12.1334 27.9 12.4167 28.0167 12.7834C28.1667 13.15 28.0667 13.55 27.7834 13.8333Z"
                        fill="#F48220"
                      />
                    </svg>
                  </div>

                  <div className="p-2">
                    <p className="text-lg font-semibold capitalize">
                      message admin{" "}
                    </p>
                    <small className="text-xs font-auraSecondary capitalize">
                      make enquires
                    </small>
                  </div>
                </div>

                <div className="px-3">
                  <svg
                    width="9"
                    height="18"
                    viewBox="0 0 9 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.909912 16.9201L7.42991 10.4001C8.19991 9.63008 8.19991 8.37008 7.42991 7.60008L0.909912 1.08008"
                      stroke="#192252"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <div className="flex flex-col justify-around p-3">
                  <div className="flex flex-row justify-between">
                    <div>
                      <h3 className="capitalize font-semibold text-base float-right">
                        booking details
                      </h3>
                    </div>
                    <div></div>
                  </div>

                  <div className="flex flex-row py-3 justify-between">
                    <div>
                      <small className="capitalize text-xs ">check-in</small>
                    </div>
                    <div>
                      <small className="capitalize text-xs font-semibold">
                        {" "}
                        21 Dec 2021{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-row pb-3 justify-between">
                    <div>
                      <small className="capitalize text-xs ">check-out</small>
                    </div>
                    <div>
                      <small className="capitalize text-xs font-semibold">
                        {" "}
                        24 Dec 2021{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-row pb-3 justify-between">
                    <div>
                      <small className="capitalize text-xs ">time</small>
                    </div>
                    <div>
                      <small className="capitalize text-xs font-semibold">
                        {" "}
                        04:00pm{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-row pb-3 justify-between">
                    <div>
                      <small className="capitalize text-xs ">Visitor</small>
                    </div>

                    <div>
                      <small className="capitalize text-xs font-semibold">
                        {" "}
                        mr serif sorunke
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-row pb-3 justify-between">
                    <div>
                      <small className="capitalize text-xs ">room</small>
                    </div>

                    <div>
                      <small className="capitalize text-xs font-semibold">
                        1 room{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-row pb-3 justify-between">
                    <div>
                      <small className="capitalize text-xs ">
                        payment type
                      </small>
                    </div>

                    <div>
                      <small className="capitalize text-xs font-semibold">
                        paystack
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-row pb-3 justify-between">
                    <div>
                      <small className="capitalize text-xs ">
                        reservation status
                      </small>
                    </div>

                    <div>
                      <small className="capitalize text-xs bg-auraPrimary100 text-auraPrimary p-2 font-semibold">
                        ongoing
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 2nd box --> */}
          <div className=" rounded-xl  gap-4">
            <div className="flex flex-col justify-between gap-4">
              <div className="bg-white  rounded-xl p-4 flex flex-col justify-between">
                <div className="flex flex-col md:flex-row my-4 md:items-center justify-around">
                  <div>
                    <img
                      src="../../img/booking_img.svg"
                      className="w-full md:full"
                      alt=""
                      height="150"
                    />
                  </div>
                  <div className="md:p-3 p-6 items-center  flex flex-col justify-between my-6">
                    <div>
                      <h3 className="text-base mb-2 font-semibold uppercase font-auraSecondary">
                        APARTMENT
                      </h3>
                      <h3 className="text-sm mb-2 font-semibold capitalize ">
                        metro jayakarta hotel & spa
                      </h3>
                      <div className="inline-flex">
                        <img src="../../img/icon/location.svg" alt="pics" />
                        <span className="capitalize font-auraSecondary text-sm px-2">
                          Agungi lekki lagos
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between px-2">
                      <div>
                        <img
                          src="../../img/icon/box1.svg"
                          className="inline"
                          alt="pics"
                        />

                        <span className="capitalize font-auraSecondary ">
                          2
                        </span>
                      </div>
                      <div>
                        <img
                          src="../../img/icon/toilet.svg"
                          className="inline"
                          alt="pics"
                        />

                        <span className="capitalize font-auraSecondary">3</span>
                      </div>
                      <div>
                        <img
                          src="../../img/icon/building size.svg"
                          className="inline"
                          alt="pics"
                        />

                        <span className="capitalize font-auraSecondary ">
                          24M
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start md:my-3 my-2 mx-3 p-3">
                  <div>
                    <button className="bg-auraPrimary text-white hover:bg-auraSecondary focus:ring-4   focus:ring-auraPrimary100 rounded mr-8    text-sm py-1 px-4  text-center">
                      pause booking
                    </button>

                    <button className="bg-transparent hover:bg-auraPrimary hover:text-white  text-center text-sm text-auraPrimary px-6 py-1 border border-auraPrimary italic rounded">
                      cancel
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white  gap4 rounded-xl   ">
                <div>
                  <div className="flex flex-col justify-around p-3">
                    <div className="flex flex-row justify-between">
                      <div>
                        <h3 className="capitalize font-semibold text-base float-right italic">
                          payment breakdown
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-row py-3 justify-between">
                      <div>
                        <small className="capitalize text-xs ">
                          Total amount
                        </small>
                      </div>
                      <div>
                        <small className="capitalize text-xs font-semibold">
                          {" "}
                          &#8358; 21000
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row pb-3 justify-between">
                      <div>
                        <small className="capitalize text-xs ">Discount</small>
                      </div>
                      <div>
                        <small className="capitalize text-xs font-semibold">
                          {" "}
                          &#8358;100
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row pb-3 justify-between">
                      <div>
                        <small className="capitalize text-xs ">
                          total amount payable
                        </small>
                      </div>
                      <div>
                        <small className="capitalize text-xs font-semibold">
                          {" "}
                          &#8358; 25,000{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row pb-3 justify-between">
                      <div>
                        <small className="capitalize text-xs ">
                          Amount due to host based on calculation
                        </small>
                      </div>

                      <div>
                        <small className="capitalize text-xs font-semibold">
                          {" "}
                          &#8358; 20,000
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row pb-3 justify-between">
                      <div>
                        <small className="capitalize text-xs ">
                          amount due to aura
                        </small>
                      </div>

                      <div>
                        <small className="capitalize text-xs font-semibold">
                          &#8358; 00{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-row pb-3 justify-between">
                      <div>
                        <small className="uppercase text-xs ">vat</small>
                      </div>

                      <div>
                        <small className="capitalize text-xs font-semibold">
                          No
                        </small>
                      </div>
                    </div>

                    <hr />
                    <div className="flex flex-row pb-3 justify-between">
                      <div>
                        <small className="capitalize text-xs font-semibold  italic ">
                          total{" "}
                        </small>
                      </div>

                      <div>
                        <small className="capitalize text-xs text-auraPrimary p-2 font-semibold">
                          &#8358; 25,500
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationHistory;
