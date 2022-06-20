import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Heading, Paragraph } from "../components/html-elements";

function UsesPage() {
  return (
    <Layout>
      <Seo title="Uses" />
      <Heading level={1}>Uses</Heading>
      <Paragraph size={Paragraph.size.LARGE}>
        Page for listing the hardware and software I use for work.
      </Paragraph>
    </Layout>
  );
}

export default UsesPage;
