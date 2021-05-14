module.exports = {
  siteMetadata: {
    title: "Robert Uridge",
    siteUrl: `https://www.uridge.com`,
    siteLanguage: "en-GB",
    image: "/images/og-default.png",
    description:
      "Hi I'm Rob, a Web Developer with ten years of experience. I specialise in React applications, CSS architecture at scale and building responsive, testable and maintainable UI components.",
    twitterUsername: "@roburidge",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
