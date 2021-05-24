import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const paragraphClasses = "text-xl sm:text-2xl max-w-prose pb-6";

function Snippets() {
  const data = useStaticQuery(graphql`
    query SnippetsQuery {
      snippets: allMdx {
        nodes {
          frontmatter {
            title
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Snippets" />
      <h1 className="pb-6 text-4xl font-extrabold text-pink-600 sm:text-5xl">
        Snippets
      </h1>
      <p className={paragraphClasses}>Coming soon.</p>
      <ul>
        {data.snippets.nodes.map((snippet) => (
          <li key={snippet.parent.name}>
            <Link to={`/snippets/${snippet.parent.name}`}>
              {snippet.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Snippets;
