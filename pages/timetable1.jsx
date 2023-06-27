import React from "react";
import Layout from "../components/Layout";
import Timetable1Tabs from "@/components/Timetable1Tabs";
import Timetable1Table from "@/components/Timetable1Table";

export default function Timetable1() {
  return (
    <div>
      <Layout main_heading="KIPS Family Portal - Faculty">
        <Timetable1Tabs />
        <Timetable1Table />
      </Layout>
    </div>
  );
}
