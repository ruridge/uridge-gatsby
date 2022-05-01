module.exports = {
  flags: {},
  siteMetadata: {
    siteTitle: "Robert Uridge",
    siteUrl: "https://www.uridge.com",
    siteLanguage: "en-GB",
    image: "/images/og-default.png",
    siteDescription:
      "Hi I'm Robert, a Web Developer with ten years of experience. I specialise in React applications, CSS architecture at scale and building responsive, testable and maintainable UI components.",
    twitterUsername: "@roburidge",
    mainNavLinks: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Projects",
        href: "/projects/",
      },
      {
        name: "Snippets",
        href: "/snippets/",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage{
              nodes {
                path
              }
            }
          }
        `,
        resolvePages: ({ allSitePage }) => allSitePage.nodes,
        serialize: (node) => ({
          url: node.path,
        }),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Robert Uridge",
        short_name: "Rob Uridge",
        description:
          "Hi, this is the personal website of Robert Uridge, a web developer from England, living in Taiwan.",
        lang: "en-GB",
        start_url: "/",
        background_color: "#f9fafb",
        theme_color: "#fdfdfd",
        icon: "src/images/icon.png",
        theme_color_in_head: false,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/snippets`,
        name: "snippets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/projects`,
        name: "projects",
      },
    },
  ],
};
