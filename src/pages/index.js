import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";

function IndexPage() {
  const { title } = useSiteMetadata();
  return (
    <Layout>
      <Seo tile={title} />
      <div className="max-w-screen-xl px-5 mx-auto">
        <span>{title}</span>
        <h1 className="font-sans text-6xl font-medium text-purple-900">
          Hello!!!
        </h1>
      </div>
    </Layout>
  );
}

export default IndexPage;
