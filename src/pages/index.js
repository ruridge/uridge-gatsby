import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Paragraph, Heading } from "../components/html-elements";

function IndexPage() {
  const { siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <Seo title={siteTitle} />
      <Heading level={1} color={Heading.color.PURPLE}>
        Hello!
      </Heading>
      <Paragraph size={Paragraph.size.LARGE} maxWidthProse>
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
      </Paragraph>
      <Paragraph size={Paragraph.size.LARGE}>
        Thanks so much for stopping by. Hope you enjoy the rest of your{" "}
        {!(new Date().getDay() % 6) ? "weekend" : "week"} ✨
      </Paragraph>
    </Layout>
  );
}

export default IndexPage;
