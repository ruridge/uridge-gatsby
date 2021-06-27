import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Seo = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const {
    siteTitle,
    siteUrl,
    siteLanguage,
    image: defaultImage,
    siteDescription,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:site_name" content={siteTitle} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.image && (
        <meta
          name="twitter:image:alt"
          content="Banner for uridge.com, with Rob Uridge written in white on a purple background."
        />
      )}
      {seo.url && <link rel="canonical" href={seo.url} />}
      <meta
        name="theme-color"
        content="#fdfdfd"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#161f2c"
        media="(prefers-color-scheme: dark)"
      />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export default Seo;
