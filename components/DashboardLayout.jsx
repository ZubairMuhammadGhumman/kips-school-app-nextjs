import React from "react";
import Heading from "./Heading";
import DashboardLeftSide from "./DashboardLeftSide";
import DashboardRightSide from "./DashboardRightSide";
import LastMonthPerformanceChart from "./charts/LastMonthPerformanceChart";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DashboardLayout() {
  return (
    <div className="px-8 ">
      <div className="mt-10 grid lg:grid-cols-3 lg:gap-7 grid-cols-1 gap-0">
        <DashboardLeftSide />
        <DashboardRightSide />
      </div>
      <div className=" grid lg:grid-cols-3 lg:gap-7 grid-cols-1 gap-0  md:mb-10 mb-3">
        <div className=" col-span-1 lg:mt-8 mt-8">
          <Calendar className="!h-full !w-full !rounded-xl !border-transparent " />
        </div>
        <LastMonthPerformanceChart width="col-span-2" />
      </div>
    </div>
  );
}
