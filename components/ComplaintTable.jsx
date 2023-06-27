import React, { useState } from "react";
import ComplaintPopup from "./ComplaintPopup";
export default function ComplaintTable() {
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
        {isPopupOpen && <ComplaintPopup onClose={handleClosePopup} />}
      </div>
      <div className="grid">
        <div className="w-full overflow-x-auto overflow-y-auto">
          <table className="w-full text-sm text-center shadow-md">
            <thead className="bg-[#FED5D7] ">
              <tr>
                <th className="pl-14 pr-24 py-7 border-r-2 border-[#F2CCCE] rounded-tl-md font-PoppinsBold">
                  #
                </th>
                <th className="px-28 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  DateTime
                </th>
                <th className="px-28 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  Reason
                </th>
                <th className="px-24 py-5 border-r-2 border-[#F2CCCE] font-PoppinsBold">
                  Status
                </th>
                <th className="px-20 py-5 rounded-tr-md font-PoppinsBold">
                  Action
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
                <td className="py-9 border-r-2 border-[#F2CCCE]">CANCELLED</td>
                <td>
                  <button className="bg-[#C32026] text-[#F4D9DA] px-9 py-2 rounded-sm text-sm shadow">
                    Cancel
                  </button>
                </td>
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
                <td className="py-9 border-r-2 border-[#F2CCCE]">DELIVERED</td>
                <td>
                  <button className="bg-[#C32026] text-[#F4D9DA] px-9 py-2 rounded-sm text-sm shadow">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
