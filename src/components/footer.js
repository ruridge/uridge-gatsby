import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { MailOpenIcon } from "@heroicons/react/outline";
import TwitterIcon from "../images/svg/twitter.inline.svg";
import GithubIcon from "../images/svg/github.inline.svg";
import LinkedinIcon from "../images/svg/linkedin-icon.inline.svg";

const linkClassNames = "text-blue-700 hover:underline";
const iconClassNames = "text-gray-400 hover:text-gray-500 p-3";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();
  return (
    <footer className="text-xs text-center sm:text-sm">
      <div className="flex justify-center gap-2 mb-3">
        <a href="https://twitter.com/roburidge/" className={iconClassNames}>
          <span className="sr-only">Twitter</span>
          <TwitterIcon
            className="w-6 h-6"
            fill="currentColor"
            viewBox="-2 -2 28 28"
          />
        </a>
        <a href="https://github.com/roburidge/" className={iconClassNames}>
          <span className="sr-only">GitHub</span>
          <GithubIcon
            className="w-6 h-6"
            fill="currentColor"
            viewBox="-2 -2 28 28"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/roburidge/"
          className={iconClassNames}
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedinIcon
            className="w-6 h-6"
            fill="currentColor"
            viewBox="-2 -2 28 28"
          />
        </a>
        <a href="mailto:rob@uridge.com" className={iconClassNames}>
          <span className="sr-only">Email me</span>
          <MailOpenIcon className="block w-6 h-6" aria-hidden="true" />
        </a>
      </div>
      <div>
        This site is{" "}
        <a
          href="https://github.com/roburidge/uridge-gatsby"
          className={linkClassNames}
        >
          built in the open
        </a>{" "}
        using{" "}
        <a href="https://reactjs.org/" className={linkClassNames}>
          React
        </a>
        ,{" "}
        <a href="https://www.gatsbyjs.com/" className={linkClassNames}>
          Gatsby
        </a>
        ,{" "}
        <a href="https://tailwindcss.com/" className={linkClassNames}>
          Tailwind CSS
        </a>
        , and hosted with{" "}
        <a
          href="https://www.gatsbyjs.com/products/cloud/"
          className={linkClassNames}
        >
          Gatsby Cloud
        </a>
        .
      </div>
      ~
      <div>
        Copyright © {new Date().getFullYear()} {siteTitle}. All Rights Reserved.{" "}
      </div>
    </footer>
  );
};

export default Footer;
