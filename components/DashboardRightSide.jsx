import React from "react";

export default function DashboardRightSide() {
  return (
    <div className="col-span-1 bg-[#C32026] text-white font-RobotoMedium  rounded-md shadow lg:order-2 order-1 ">
      <div className="flex flex-col items-center pt-14 pb-5">
        <img className="w-28" src={"images/teacher-picture.png"} />
        <h1 className="text-2xl pt-2">Adeeb Khan</h1>
        <p className="text-xs">( Teacher )</p>
      </div>
      <div className="px-7 text-[#FDF5F5]">
        <div className="flex justify-between border-b-2 border-[#E9AFB2] py-3">
          <p>ERP#</p>
          <p>01</p>
        </div>
        <div className="flex justify-between border-b-2 border-[#E9AFB2] py-3">
          <p>CNIC/Expiry</p>
          <p>0123456789</p>
        </div>
        <div className="flex justify-between border-b-2 border-[#E9AFB2] py-3">
          <p>Employment Date</p>
          <p>01/02/2020</p>
        </div>
        <div className="flex justify-between border-b-2 border-[#E9AFB2] py-3">
          <p>Designation</p>
          <p>Professor</p>
        </div>
        <div className="flex justify-between border-b-2 border-[#E9AFB2] py-3">
          <p>Department</p>
          <p>Math</p>
        </div>
        <div className="flex justify-between py-5">
          <p>Workplace</p>
          <p>LHR BC2 (Garden Town Boys)</p>
        </div>
      </div>
    </div>
  );
}
