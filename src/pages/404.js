import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { Heading, Paragraph } from "../components/html-elements";

function NotFoundPage() {
  return (
    <>
      <Seo title="404: Page not found" />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col justify-center flex-1 w-full max-w-screen-md mx-auto text-gray-900 safe-x safe-t dark:text-gray-200">
          <Heading level={1} size={Heading.size.TITAN}>
            Page not found
          </Heading>
          <div className="h-4" />
          <Paragraph size={Paragraph.size.XL}>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            I couldn’t find what you were looking for.
          </Paragraph>
        </div>
        <div
          className="w-full max-w-screen-md pt-10 mx-auto safe-x safe-b"
          style={{ "padding-bottom": "15vh" }}
        >
          <Paragraph size={Paragraph.size.XL}>
            <Link to="/">
              <div className="inline-flex items-center">
                <ArrowLeftIcon
                  className="w-8 h-8 mr-2 transform rotate-45"
                  aria-hidden="true"
                />
                Go to the homepage
              </div>
            </Link>
          </Paragraph>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
