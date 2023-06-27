import Layout from "@/components/Layout";
import React from "react";
import SuggestionTable from "@/components/SuggestionTable";

export default function suggestion() {
  return (
    <div>
      <Layout main_heading="Suggestions">
        <SuggestionTable />
      </Layout>
    </div>
  );
}
