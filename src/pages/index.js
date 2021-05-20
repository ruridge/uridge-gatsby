import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";

function IndexPage() {
  const { siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <Seo title={siteTitle} />
      <h1 className="font-sans text-6xl font-medium text-purple-900">
        Hello!!!
      </h1>
    </Layout>
  );
}

export default IndexPage;
