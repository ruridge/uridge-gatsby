import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Heading } from "../components/html-elements";
import Layout from "../components/layout";
import Seo from "../components/seo";

function Snippets() {
  const data = useStaticQuery(graphql`
    query SnippetsQuery {
      allMdx(
        sort: { fields: frontmatter___lastUpdated, order: DESC }
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            title
            abstract
            category
            lastUpdated(formatString: "D MMMM YYYY")
          }
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Snippets" />

      <Heading level={1} color={Heading.color.PINK}>
        Snippets
      </Heading>

      <p className="mb-10 text-xl sm:text-2xl max-w-prose">
        This is a collection of useful tips and code snippets I've picked up
        along my web development journey.
      </p>
      {data.allMdx.nodes
        .filter(({ parent }) => parent.sourceInstanceName === "snippets")
        .map((snippet) => (
          <article className="p-4 mb-10 rounded shadow">
            <h2 className="mb-4 text-2xl font-bold">
              <Link
                key={snippet.parent.name}
                to={`/snippets/${snippet.parent.name}`}
                className="text-blue-700 hover:underline"
              >
                {snippet.frontmatter.title}
              </Link>
            </h2>
            <p className="mb-4">{snippet.frontmatter.abstract}</p>
            <dl className="text-sm">
              <dt className="float-left pr-1 font-bold ">Category:</dt>
              <dd>{snippet.frontmatter.category}</dd>
              <dt className="float-left pr-1 font-bold ">Last Updated:</dt>
              <dd>{snippet.frontmatter.lastUpdated}</dd>
            </dl>
          </article>
        ))}
    </Layout>
  );
}

export default Snippets;
