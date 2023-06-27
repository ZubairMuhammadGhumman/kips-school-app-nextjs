import React from "react";
import Layout from "@/components/Layout";
import ComplaintTable from "@/components/ComplaintTable";

export default function complaint() {
  return (
    <div>
      <Layout main_heading="Complaints">
        <ComplaintTable />
      </Layout>
    </div>
  );
}
