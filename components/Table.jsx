import React from "react";

export default function Table() {
  return (
    <div className="grid">
      <div className="pt-8 px-7 font-PoppinsRegular w-full overflow-x-auto overflow-y-hidden pb-10 ">
        <table className="bg-white h-full w-full shadow-lg mb-6 rounded-lg">
          <thead>
            <tr>
              <th
                rowSpan="2"
                className="px-11 py-14 bg-[#0081C8] text-white rounded-tl-lg border-r-2 border-[#7EB7D7] font-thin"
              >
                Sr#
              </th>
              <th
                rowSpan="2"
                className="px-14 py-16 bg-[#0081C8] text-white font-thin"
              >
                Date
              </th>

              <th colSpan="3" className="px-11 py-7 bg-[#D5FEEB] font-semibold">
                In
              </th>
              <th
                colSpan="3"
                className="font-PoppinsSemiBold px-11 py-7 bg-[#A6D3EC]"
              >
                Out
              </th>
            </tr>
            <tr className="font-bold">
              <td className="bg-[#FED5D7] border-r-2 border-zinc-300 px-12 py-7">
                Time
              </td>
              <td className="bg-[#FED5D7] border-r-2 border-zinc-300 px-12 py-7">
                Campus
              </td>
              <td className="bg-[#FED5D7] border-r-2 border-zinc-300 px-12 py-7">
                Type
              </td>
              <td className="bg-[#FED5D7] border-r-2 border-zinc-300 px-12 py-7">
                Time
              </td>
              <td className="bg-[#FED5D7] border-r-2 border-zinc-300 px-12 py-7">
                Campus
              </td>
              <td className="bg-[#FED5D7]  px-12 py-7">Type</td>
            </tr>
          </thead>
          <tbody>
          <tr className="border-b-2">
            <td className="px-12 py-5  border-r-2 border-[#EADEDF] rounded-bl-lg ">
              01
            </td>
            <td className="p-5 border-r-2 border-[#EADEDF]">11-04-2023</td>
            <td className="px-6 py-5 border-r-2 border-[#EADEDF]">
              12:26:58 PM
            </td>
            <td className="px-7 py-5 border-r-2 border-[#EADEDF]">
              Trial campus
            </td>
            <td className="px-6 py-5 border-r-2 border-[#EADEDF]">Automated</td>
            <td className="px-16 py-5 border-r-2 border-[#EADEDF]">-</td>
            <td className="px-20 py-5 border-r-2 border-[#EADEDF]">-</td>
            <td className="px-14 py-5">-</td>
          </tr>
          <tr className="bg-white h-80"></tr>
        </tbody>
        </table>
      </div>
    </div>
  );
}
