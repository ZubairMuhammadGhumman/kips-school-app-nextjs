import React from "react";
import Layout from "@/components/Layout";
import LeaveTable from "@/components/LeaveTable";

export default function leave() {
  return (
    <div>
      <Layout main_heading="Leave Applications">
        <LeaveTable />
      </Layout>
    </div>
  );
}
