import React from "react";
import Layout from "@/components/Layout";
import TimetableTabs3 from "@/components/TimetableTabs3";
import TestMarks from "@/components/TestMarks";
import CourseCoverage from "@/components/CourseCoverage";

export default function Timetable3() {
  return (
    <div>
      <Layout main_heading="Course Coverage">
        <TimetableTabs3 />
        <CourseCoverage />
      </Layout>
    </div>
  );
}
