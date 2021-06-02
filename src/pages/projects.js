import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Heading, Paragraph } from "../components/html-elements";
import classNames from "../utils/class-names";

function isOdd(num) {
  return Boolean(num % 2);
}

const projectClasses = {
  container: (position) =>
    isOdd(position) ? "md:flex-row-reverse" : "md:flex-row",
  image: (position) => (isOdd(position) ? "md:right-8" : "md:left-8"),
  copy: (position) => (isOdd(position) ? "md:left-16" : "md:right-16"),
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
              "flex pt-12 pb-20 flex-col md:relative",
              projectClasses.container(index)
            )}
          >
            <div
              className={classNames(
                "md:relative md:w-3/5",
                projectClasses.image(index)
              )}
            >
              <GatsbyImage
                image={getImage(project.frontmatter.image)}
                alt=""
                className="border rounded md:shadow-md"
              />
            </div>
            <div
              className={classNames(
                "md:relative md:w-96 flex-none md:px-8 py-6 md:rounded md:shadow-2xl md:bg-white md:top-10 h-96",
                projectClasses.copy(index)
              )}
            >
              <Heading level={2}>{project.frontmatter.title}</Heading>
              <Paragraph>{project.frontmatter.abstract}</Paragraph>
            </div>
          </article>
        ))}
    </Layout>
  );
}

export default ProjectsPage;
