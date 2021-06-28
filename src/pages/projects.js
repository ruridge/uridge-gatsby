import { graphql, Link, useStaticQuery } from "gatsby";
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
            role
            introduction
            link
            linkText
            lastUpdated(formatString: "D MMMM YYYY")
            image {
              childImageSharp {
                gatsbyImageData(width: 574)
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
              "flex flex-col pb-6 md:relative md:pt-12 md:pb-20 ",
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
                className="border border-gray-200 rounded-lg dark:border-gray-700 md:shadow-md"
                style={{
                  // fix for rounding images bug in Safari
                  "-webkit-backface-visibility": "hidden",
                  "-webkit-transform": "translate3d(0, 0, 0)",
                }}
              />
            </div>
            <div
              className={classNames(
                "md:relative md:w-96 flex-none md:px-8 py-6 md:rounded-lg md:shadow-2xl md:bg-white md:top-10 md:dark:bg-gray-900",
                projectClasses.copy(index)
              )}
            >
              <Heading level={2}>{project.frontmatter.title}</Heading>
              <Paragraph size={Paragraph.size.SMALL}>
                <strong>Role:</strong> {project.frontmatter.role}
              </Paragraph>
              <Paragraph>{project.frontmatter.introduction}</Paragraph>
              {project.frontmatter.link && (
                <Link
                  to={project.frontmatter.link}
                  className="hover:no-underline group"
                >
                  <div className="inline-flex items-center mb-4 lg:mb-6">
                    <span className="group-hover:underline">
                      {project.frontmatter.linkText || "Visit the site"}
                    </span>
                    <span aria-hidden="true" class="ml-2">
                      →
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </article>
        ))}
    </Layout>
  );
}

export default ProjectsPage;
