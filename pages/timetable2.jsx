import React from "react";
import Layout from "@/components/Layout";
import TimetableTabs1 from "@/components/TimetableTabs1";
import CourseCoverage from "@/components/CourseCoverage";

export default function Timetable2() {
  return (
    <Layout main_heading="Course Coverage">
      <TimetableTabs1 />
      <CourseCoverage />
    </Layout>
  );
}
