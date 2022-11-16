import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Paragraph } from "../components/html-elements";
import { Icon } from "@iconify-icon/react";

const iconClassNames =
  "text-gray-400 hover:text-gray-500 p-3 dark:hover:text-gray-100";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();
  return (
    <footer className="text-xs text-center sm:text-sm">
      <div className="flex justify-center gap-2 mb-3">
        <a
          rel="me"
          href="https://social.treehouse.systems/@rob"
          className={iconClassNames}
        >
          <span className="sr-only">Twitter</span>
          <Icon icon="mdi:mastodon" height={24} />
        </a>
        <a href="https://github.com/ruridge/" className={iconClassNames}>
          <span className="sr-only">GitHub</span>
          <Icon icon="mdi:github" height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ruridge/"
          className={iconClassNames}
        >
          <span className="sr-only">LinkedIn</span>
          <Icon icon="mdi:linkedin" height={24} />
        </a>
        <a href="mailto:wicker_endings03@icloud.com" className={iconClassNames}>
          <span className="sr-only">Email me</span>
          <Icon icon="ion:mail-open" height={24} />
        </a>
      </div>
      <Paragraph size={Paragraph.size.SMALL}>
        <br />~<br />
        Copyright © {new Date().getFullYear()} {siteTitle}. All Rights Reserved.
      </Paragraph>
    </footer>
  );
};

export default Footer;
