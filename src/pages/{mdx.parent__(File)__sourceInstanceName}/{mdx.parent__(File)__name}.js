import * as React from "react";
import { graphql, Link } from "gatsby";

function BlogPost({ data }) {
  const post = data.mdx.frontmatter;

  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{post.title}</h1>
        <em>{post.publishedOn}</em> - {post.category}
        <div dangerouslySetInnerHTML={{ __html: data.mdx.rawBody }} />
      </main>
    </div>
  );
}

export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        publishedOn(formatString: "MM-DD-YYYY")
        category
        title
      }
      rawBody
    }
  }
`;
