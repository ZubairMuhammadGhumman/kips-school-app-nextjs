import React from "react";
import SideBar from "./SideBar";
import Heading from "./Heading";

export default function Layout(props) {
  const { children, main_heading } = props;

  return (
    <div className="flex">
      <SideBar />
      <div className="font-PoppinsRegular xl:ml-60 lg:ml-56 ml-16 md:w-full w-full">
        <div className="flex flex-col h-screen">
          <div className="flex justify-end items-center h-14 w-full bg-[#C32026]">
            <div className="border-[#DF8A8D] border-r-2 h-14 flex items-center gap-x-6">
              <img className="w-5 pb-1" src={"images/bell-icon.png"} />
              <img className="w-5" src={"images/calendar-icon.png"} />
              <img className="h-8 pr-6" src={"images/flag-icon.png"} />
            </div>
            <div className="flex items-center gap-x-2 pl-5 pr-7 pb-1 md:pl-5 sm:pl-6">
              <img
                className="h-5 md:mt-0 mt-2 md:ml-0 ml-1"
                src={"images/computer-icon.png"}
              />
              <h1 className="text-white text-sm font-semibold md:block hidden ">
                My Dashboard
              </h1>
            </div>
          </div>
          <Heading main_heading={main_heading} />
          <div>{children}</div>

          <div className="text-[#FAF4F4] font-RobotoRegular mt-auto w-full">
            <div className="flex items-center h-14 bg-[#C32026] md:px-8 px-0 xl:text-lg lg:text-sm lg:justify-between justify-center">
              <p>KIPS-ERP</p>
              <p className="lg:block hidden">
                Logged in user Muhammad Uzair with IP Address: 119.155.61.112 on
                07-04-2023 07:26:04pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
