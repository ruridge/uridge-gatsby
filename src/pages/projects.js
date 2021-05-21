import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const paragraphClasses = "text-xl sm:text-2xl max-w-prose pb-6";

function ProjectsPage() {
  return (
    <Layout>
      <Seo title="Projects" />
      <h1 className="pb-6 text-4xl font-extrabold text-green-600 sm:text-5xl">
        Projects
      </h1>
      <p className={paragraphClasses}>
        Coming soon: My projects/portfolio of work, past and present.
      </p>
    </Layout>
  );
}

export default ProjectsPage;
