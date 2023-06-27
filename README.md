This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# for learning

 <Link
        className="flex gap-x-5 py-3 pl-8 w-full items-center"
        href={"/my-attendance"}
      >
        <img className="w-6" src={"images/attendance-icon.png"} />
        <h1>My Attendance</h1>
      </Link>

import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Popup(props) {
const { onClose } = props;

return (

<div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm font-PoppinsRegular">
<div className="bg-white rounded-xl p-8 w-7/12">
<div className="flex justify-between">
<h1 className="text-md font-PoppinsSemiBold ">{props.submit}</h1>

          <div className="cursor-pointer">
            <AiFillCloseCircle size={"25"} onClick={onClose} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-7">
          <label className="text-xs font-bold">{props.type}</label>
          <select className="border-2 border-[#D9D7D7] rounded-lg px-5 py-3 font-PoppinsRegular outline-none  text-sm">
            <option className="text-xs text-[#D9D6D6]">Choose</option>
            <option value="">Select-1</option>
            <option value="">Select-2</option>
            <option value="">Select-2</option>
          </select>
        </div>
        <div className="">
          <h1 className="text-xs font-bold mt-5 mb-3">{props.detail}</h1>
          <textarea
            className="w-full rounded-lg border-2 border-[#D9D7D7] outline-none"
            name=""
            id=""
            cols="30"
            rows="9"
          ></textarea>
        </div>

        <div className="flex justify-center w-full gap-x-12 mt-12">
          <button className="bg-[#C32026] text-[#D5EAF6] px-16 py-3 shadow-md rounded-md font-thin text-lg">
            {props.btn_1_name}
          </button>
          <button
            className="bg-[#007FC6] text-[#D5EAF6] px-16 py-3 shadow-md rounded-md font-thin text-lg"
            onClick={onClose}
          >
            {props.btn_2_name}
          </button>
        </div>
      </div>
    </div>

);
}

          <Popup
            submit="Submit New Complaint"
            type="Complaint Type"
            detail="Complaint Detail"
            btn_1_name="Complaint Listing"
            btn_2_name="Submit Application"
            onClose={handleClosePopup}
          />

 <div className="flex justify-center w-full gap-x-12 mt-12">
          <button className="bg-[#C32026] text-[#D5EAF6]  shadow-md rounded-md font-thin py-3 xl:px-14 lg:px-12 md:px-7 sm:px-3 px-px  xl:text-lg text-md text-xs  ">
            Complaint Listing
          </button>
          <button
            className="bg-[#007FC6] text-[#D5EAF6]   shadow-md rounded-md font-thin py-3 xl:px-16 lg:px-12 md:px-7 sm:px-3 px-px xl:text-lg text-md text-xs"
            onClick={onClose}
          >
            Submit Application
          </button>
        </div>
