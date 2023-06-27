import Layout from "@/components/Layout";
import React from "react";

import Table from "@/components/Table";

export default function MyAttendance() {
  return (
    <div>
      <Layout main_heading="Attendance Summary">
        <Table />
      </Layout>
    </div>
  );
}
