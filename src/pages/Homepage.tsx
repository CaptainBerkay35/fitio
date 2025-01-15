import React from "react";
import Layout from "../components/Layout.tsx";
import Banner from "../components/Banner.tsx";
import Services from "../components/Services.tsx";
import Information from "../components/Information.tsx";

export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <Information />
      <Services />
    </Layout>
  );
}
