import React from "react";
import Layout from "@/components/Layout";
import AttendanceReportTable from "@/components/AttendanceReportTable";
import AttendanceReportTabs from "@/components/AttendanceReportTabs";

export default function StudentAttendanceReport() {
  return (
    <div>
      <Layout main_heading="07:30 - 08:20 Physics (1-6)">
        <AttendanceReportTabs />
        <AttendanceReportTable />
      </Layout>
    </div>
  );
}
