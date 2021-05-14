import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle
            siteUrl
            siteLanguage
            image
            siteDescription
            twitterUsername
            mainNavLinks {
              name
              href
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
