import React from "react";

export default function NominalRollTable() {
  return (
    <div className="block pt-8 px-7 font-PoppinsRegular w-full ">
      <div className="grid">
        <div className="w-full overflow-x-auto overflow-y-auto">
          <table className="bg-white h-full shadow-lg mb-9 ">
            <thead className="bg-[#FED5D7] font-bold text-sm shadow-md">
              <tr>
                <td className="pl-14 pr-32 py-5 rounded-tl-md rounded-bl-md">
                  Campus
                </td>
                <td className="px-32">Program</td>
                <td className="px-32">Discipline</td>
                <td className="px-32 rounded-tr-md rounded-br-md">Section</td>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b-2">
                <td className="pl-8 pr-12 py-5 border-r-2 border-[#EADEDF] ">
                  Trial campus
                </td>
                <td className="p-5 text-center border-r-2 border-[#EADEDF]">
                  Intermediate
                </td>
                <td className="pr-7 py-5 text-center border-r-2 border-[#EADEDF]">
                  FSc (Pre-Med)
                </td>
                <td className="text-center py-5 border-r-2 border-[#EADEDF]">
                  PMB-2
                </td>
              </tr>
              <tr className="bg-white h-44 ">
                <td></td>
                <td></td>
                <td colSpan="4" className="w-full ">
                  <button className="ml-72 shadow  bg-[#DC131B] text-[#D5EAF6] px-16 py-3 rounded-md font-thin text-lg">
                    Generate Nominal Roll
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
