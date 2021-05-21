import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const paragraphClasses = "text-xl sm:text-2xl max-w-prose pb-6";

function IndexPage() {
  const { siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <Seo title={siteTitle} />
      <h1 className="pb-6 text-4xl font-extrabold text-purple-600 sm:text-5xl">
        Hello!
      </h1>
      <p className={paragraphClasses}>
        You found my new website! This is very much a work in progress. I'm
        working on it in the open, so if you're interested in peeking behind the
        curtain you can{" "}
        <a
          className="text-blue-700 hover:underline"
          href="https://github.com/roburidge/uridge-gatsby"
        >
          view the source on GitHub
        </a>
        .
      </p>
      <p className={paragraphClasses}>
        Thanks so much for stopping by. Hope you enjoy the rest of your{" "}
        {!(new Date().getDay() % 6) ? "weekend" : "week"} ✨
      </p>
    </Layout>
  );
}

export default IndexPage;
