import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBarLinks = [
  {
    id: 0,
    name: "Dashboard",
    path: "/dashboard",
    image: "images/laptop-icon.png",
  },
  {
    id: 1,
    name: "Timetable",
    // path: "/timetable",
    path: "/timetable1",
    // path: "/timetable2",
    // path: "/timetable3",
    image: "images/timetable-icon.png",
  },
  {
    id: 2,
    name: "My Attendance",
    path: "/my-attendance",
    image: "images/attendance-icon.png",
  },
  {
    id: 3,
    name: "My Performance",
    path: "/timetable3",
    image: "images/performance-icon.png",
  },
  {
    id: 4,
    name: "Student Attendance Report",
    path: "/student-attendance-report",
    image: "images/attendance-report-icon.png",
  },
  {
    id: 5,
    name: "Student Results",
    path: "/student-result",
    image: "images/student-result-icon.png",
  },
  {
    id: 6,
    name: "Nominal Roll",
    path: "/nominal-roll",
    image: "images/nominal-roll-icon.png",
  },
  {
    id: 7,
    name: "Complaint",
    path: "/complaint",
    image: "images/complaint-icon.png",
  },
  {
    id: 8,
    name: "Suggestion",
    path: "/suggestion",
    image: "images/suggestions-icon.png",
  },
  {
    id: 9,
    name: "Leave",
    path: "/leave",
    image: "images/suggestions-icon.png",
  },
  {
    id: 10,
    name: "Loan",
    path: "/loan",
    image: "images/suggestions-icon.png",
  },
];

export default function SideBar() {
  const { pathname } = useRouter();

  return (
    <div className="bg-[#0081C8] fixed text-white font-RobotoMedium text-sm  xl:w-60 lg:w-56 w-16 md:h-full h-full">
      <div className="border-b-2 border-[#1E90CF] ">
        <Link className="lg:block hidden" href={"/dashboard"}>
          <img className="px-3 py-2 pb-3 " src={"images/kips-logo.png"} />
        </Link>
      </div>
      {SideBarLinks.map((e, i) => (
        <Link
          key={i}
          className={
            "flex gap-x-5 py-3 w-full items-center lg:pl-8 lg:justify-start justify-center " +
            (pathname == e.path ? "bg-[#00457F]" : "")
          }
          href={e.path}
        >
          <img className="w-6" src={e.image} />
          <h1 className="lg:block hidden">{e.name}</h1>
        </Link>
      ))}
      {/* <div className="flex gap-x-5 py-3 pl-8 w-full items-center">
        <img className="w-5" src={"images/student-result-icon.png"} />
        <select className="w-32 outline-0 bg-[#0081C8]">
          <option value="">Requistions</option>
          <option value="">Leave</option>
          <option value="">Loan</option>
        </select>
      </div> */}
    </div>
  );
}
