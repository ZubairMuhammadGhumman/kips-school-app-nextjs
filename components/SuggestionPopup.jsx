import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function SuggestionPopup(props) {
  const { onClose } = props;

  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-[#C9DEE9] bg-opacity-40 font-PoppinsRegular">
      <div className="bg-white rounded-xl p-8 w-7/12 shadow-2xl">
        <div className="flex justify-between">
          <h1 className="text-md font-PoppinsSemiBold ">
            Submit New Suggestion
          </h1>

          <div className="cursor-pointer">
            <AiFillCloseCircle size={"25"} onClick={onClose} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-7">
          <label className="text-xs font-bold">Suggestion Type</label>
          <select className="border-2 border-[#D9D7D7] text-[#D9D6D6] rounded-lg px-5 py-3 font-PoppinsRegular outline-none  text-sm">
            <option className="text-xs ">Choose</option>
            <option value="">Select-1</option>
            <option value="">Select-2</option>
            <option value="">Select-2</option>
          </select>
        </div>
        <div className="">
          <h1 className="text-xs font-bold mt-5 mb-3">Suggestion Detail</h1>
          <textarea
            className="w-full rounded-lg border-2 border-[#D9D7D7] outline-none"
            name=""
            id=""
            cols="30"
            rows="9"
          ></textarea>
        </div>

        <div className="md:flex grid gap-y-2 justify-center w-full gap-x-12 mt-12">
          <button className="xl:text-lg text-xs lg:px-16 px-7 bg-[#C32026] text-[#D5EAF6] py-3 shadow-md rounded-md font-thin">
            Suggestion List
          </button>
          <button
            className="xl:text-lg text-xs lg:px-16 px-7 bg-[#007FC6] text-[#D5EAF6] py-3 shadow-md rounded-md font-thin"
            onClick={onClose}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
