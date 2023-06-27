import React, { useState } from "react";
import LeavePopup from "@/components/LeavePopup";

export default function LeaveTable() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="p-6 font-PoppinsRegular">
      <div className="flex justify-end w-full pb-7">
        <button
          className="bg-[#007FC6] text-[#D5EAF6] px-16 py-3 shadow-md rounded-md font-thin text-lg"
          onClick={handleOpenPopup}
        >
          Submit New Application
        </button>
        {isPopupOpen && <LeavePopup onClose={handleClosePopup} />}
      </div>
      <div className="grid">
        <div className="w-full overflow-x-auto overflow-y-hidden pb-10">
          <table className="w-full text-sm text-center shadow-md ">
            <thead className="bg-[#FED5D7] ">
              <tr>
                <th className="pl-14 pr-24 py-7 border-r-2 border-[#F2CCCE] rounded-tl-md font-PoppinsBold">
                  #
                </th>
                <th className="px-14 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  Date & Time
                </th>
                <th className="px-14 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  Reason
                </th>
                <th className="px-14 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  From
                </th>
                <th className="px-14 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  To
                </th>
                <th className="px-14 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  Days
                </th>
                <th className="px-14 py-5 rounded-tr-md font-PoppinsBold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b-2 border-[#F2CCCE] font-PoppinsMedium">
                <td className="pl-14 pr-24 py-7 border-r-2 border-[#F2CCCE]">
                  1
                </td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">
                  2023-04-12 14:38:52
                </td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">
                  Personal Complaint
                </td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">2023-01-12</td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">2023-04-12</td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">2</td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">Approve</td>
              </tr>
              <tr className="bg-white border-b border-[#F2CCCE] font-PoppinsMedium">
                <td className="pl-14 pr-24 py-7 border-r-2 border-[#F2CCCE]">
                  1
                </td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">
                  2023-04-12 14:38:52
                </td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">
                  Personal Complaint
                </td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">2023-01-12</td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">2023-04-12</td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">2</td>
                <td className="py-9 border-r-2 border-[#F2CCCE]">Approve</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
