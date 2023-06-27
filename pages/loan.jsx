import React from "react";
import Layout from "@/components/Layout";
import LoanTable from "@/components/LoanTable";

export default function loan() {
  return (
    <div>
      <Layout main_heading="Loan Applications">
        <LoanTable />
      </Layout>
    </div>
  );
}
