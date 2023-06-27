import React from "react";
import Box from "./Box";
import SessionPerformanceChart from "./charts/SessionPerformanceChart";
export default function DashboardLeftSide() {
  return (
    <div className="col-span-2  pb-9 bg-[#FFFFFF] rounded-md shadow font-PoppinsRegular lg:order-1 order-2 lg:mt-0 mt-10">
      <div className="px-10 flex">
        <h1 className="font-semibold text-[#404346] pt-3 pb-3 border-b-2 border-[#C32026]">
          Overview
        </h1>
      </div>
      <div className="w-full h-px bg-[#727272] shadow"></div>
      <div className="pt-14 gap-x-5 grid grid-cols-12">
        <div className="flex flex-col gap-y-7 md:pl-7 pl-4 md:pr-0 pr-4 md:col-span-8 col-span-12">
          <Box
            icon="images/attendance-report-coloricon.png"
            heading="Total Attendance"
            paragraph="Seamlessly recaptiualize collaborative ROI vis-a-vis market
              positioning data."
            performance="75%"
            total_performance="95%"
            text_color={true}
          />
          <Box
            icon="images/performance-coloricon.png"
            heading="Performance"
            paragraph="Seamlessly recaptiualize collaborative ROI vis-a-vis market
              positioning data."
            performance="75%"
            total_performance="95%"
            text_color={false}
          />
          <Box
            icon="images/course-completion-coloricon.png"
            heading="Course Completion"
            paragraph="Seamlessly recaptiualize collaborative ROI vis-a-vis market
              positioning data."
            performance="75%"
            total_performance="95%"
            text_color={false}
          />
        </div>
        <div className="lg:pr-3 md:col-span-4 col-span-12 md:px-0 px-5">
          <SessionPerformanceChart />
        </div>
      </div>
    </div>
  );
}
