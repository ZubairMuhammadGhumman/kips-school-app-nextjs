import React from "react";
import Layout from "@/components/Layout";
import DashboardLayout from "@/components/DashboardLayout";

export default function dashboard() {
  return (
    <div className="">
      <Layout main_heading="Faculity Dashboard">
        <DashboardLayout />
      </Layout>
    </div>
  );
}
