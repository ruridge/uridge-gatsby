import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Heading, Paragraph, CodeBlock } from "../../components/html-elements";

const components = {
  p: Paragraph,
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
  ul: (props) => <ul className="pl-5 mb-4 list-disc lg:mb-6" {...props} />,
  ol: (props) => <ol className="pl-5 mb-4 list-decimal lg:mb-6" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="relative pl-5 font-serif italic font-medium text-gray-900 border-l-4 border-gray-200"
      {...props}
    />
  ),
  pre: CodeBlock,
  code: (props) => <em className="italic" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  strong: (props) => <strong className="font-bold" {...props} />,
  hr: (props) => (
    <hr
      className="block w-full h-0.5 mb-4 bg-gray-100 border-none lg:mb-6"
      {...props}
    />
  ),
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  a: (props) => <a className="text-blue-700 hover:underline" {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img className="rounded-md" {...props} />,
};

function BlogPost({ data }) {
  const post = data.mdx.frontmatter;

  return (
    <Layout>
      <Seo title={post.title} />
      <Heading level={1} color={Heading.color.PINK}>
        {post.title}
      </Heading>
      <div class="mb-8 sm:mb-16">
        <dl className="text-sm">
          <dt className="float-left pr-1 font-bold ">Originally Posted:</dt>
          <dd className="float-left pr-4">{post.publishedOn}</dd>
          <dt className="float-left pr-1 font-bold ">Category:</dt>
          <dd>{post.category}</dd>
        </dl>
        {post.introduction && (
          <div class="mt-4 sm:mt-2">
            <Paragraph size={Paragraph.size.LARGE} maxWidthProse>
              {post.introduction}
            </Paragraph>
          </div>
        )}
      </div>
      <MDXProvider components={components}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}

export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        publishedOn(formatString: "DD MMMM YYYY")
        category
        title
        introduction
      }
      body
    }
  }
`;
