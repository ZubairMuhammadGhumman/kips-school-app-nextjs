import React from "react";
import Layout from "@/components/Layout";

export default function StudentResult() {
  return (
    <div>
      <Layout main_heading="Student Test Report">
        <div className="p-5 grid grid-cols-12 ">
          <div className=" flex flex-col gap-y-5 px-8 py-8 bg-[#FFFFFF] mr-5 shadow-lg rounded-lg ml-2 md:col-span-8 col-span-12">
            <div className="flex flex-col gap-y-2">
              <label className="font-PoppinsSemiBold">Program</label>
              <select className="bg-[#F8F9FD] px-2 py-4 rounded-sm font-PoppinsRegular outline-none">
                <option value="">Choose...</option>
                <option value="">Select-1</option>
                <option value="">Select-2</option>
                <option value="">Select-2</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-PoppinsSemiBold">Discipline</label>
              <select className="bg-[#F8F9FD] px-2 py-4 rounded-sm font-PoppinsRegular outline-none">
                <option value="">Choose...</option>
                <option value="">Select-1</option>
                <option value="">Select-2</option>
                <option value="">Select-2</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-PoppinsSemiBold">Section</label>
              <select className="bg-[#F8F9FD] px-2 py-4 rounded-sm font-PoppinsRegular outline-none">
                <option value="">Choose...</option>
                <option value="">Select-1</option>
                <option value="">Select-2</option>
                <option value="">Select-2</option>
              </select>
            </div>
            <div className="flex font-PoppinsRegular pt-24 md:justify-end justify-center">
              <button className="bg-[#007DC2] rounded-sm text-[#F2F8FC] py-3 shadow text-lg md:px-14 px-5">
                Print Report
              </button>
            </div>
          </div>
          <div className="h-screen flex justify-center bg-[#FEE9EA] font-RobotoRegular ml-2 mr-3  shadow-md text-xl rounded-lg  md:mt-0 mt-5 md:col-span-4 col-span-12">
            <h1 className="font-PoppinsSemiBold  text-left pl-8 pt-5  border-b-2 border-r-2 border-[#F0DEDF] h-16 w-full xl:text-lg text-xs ">
              Campus
            </h1>
            <h1 className="font-PoppinsRegular text-center pt-5 border-b-2 border-[#F0DEDF] h-16 w-full xl:text-lg text-xs lg:px-0 px-2">
              Trial campus
            </h1>
          </div>
        </div>
      </Layout>
    </div>
  );
}
