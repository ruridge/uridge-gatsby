import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Heading, Paragraph } from "../components/html-elements";
import classNames from "../utils/class-names";

function isOdd(num) {
  return num % 2;
}

const projectClasses = {
  container: (position) => (isOdd(position) ? "flex-row-reverse" : "flex-row"),
  image: (position) => (isOdd(position) ? "right-8" : "left-8"),
  copy: (position) => (isOdd(position) ? "left-16" : "right-16"),
};

function ProjectsPage() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
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
            image {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
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
      <Seo title="Projects" />
      <Heading level={1} color={Heading.color.GREEN}>
        Projects
      </Heading>
      <Paragraph size={Paragraph.size.LARGE}>
        A curated selection of projects I have worked on for clients and
        employers over the years.
      </Paragraph>
      {data.allMdx.nodes
        .filter(({ parent }) => parent.sourceInstanceName === "projects")
        .map((project, index) => (
          <article
            className={classNames(
              "relative flex pt-12 pb-20",
              projectClasses.container(index)
            )}
          >
            <div
              className={classNames(
                "relative w-3/5",
                projectClasses.image(index)
              )}
            >
              <GatsbyImage
                image={getImage(project.frontmatter.image)}
                alt=""
                className="border rounded shadow-md"
              />
            </div>
            <div
              className={classNames(
                "relative w-2/5 px-8 py-6 rounded shadow-2xl bg-white top-10 h-96",
                projectClasses.copy(index)
              )}
            >
              <h2 className="mb-4 text-2xl font-bold">
                {project.frontmatter.title}
              </h2>
              <p className="mb-4">{project.frontmatter.abstract}</p>
            </div>
          </article>
        ))}
    </Layout>
  );
}

export default ProjectsPage;
