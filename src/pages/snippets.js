import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const paragraphClasses = "text-xl sm:text-2xl max-w-prose pb-6";

function Snippets() {
  return (
    <Layout>
      <Seo title="Snippets" />
      <h1 className="pb-6 text-4xl font-extrabold text-pink-600 sm:text-5xl">
        Snippets
      </h1>
      <p className={paragraphClasses}>Coming soon.</p>
    </Layout>
  );
}

export default Snippets;
