import React from "react";
import Layout from "@/components/Layout";
import NominalRollTable from "@/components/NominalRollTable";
import Tabs from "@/components/Tabs";

export default function NominalRoll() {
  return (
    <div>
      <Layout main_heading="07:30 - 08:20 Physics (1-6)">
        <Tabs />
        <NominalRollTable />
      </Layout>
    </div>
  );
}
