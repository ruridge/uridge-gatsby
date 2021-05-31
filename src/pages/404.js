import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import { ArrowLeftIcon } from "@heroicons/react/outline";

function NotFoundPage() {
  return (
    <>
      <Seo title="404: Page not found" />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col justify-center flex-1 w-full max-w-screen-md px-6 mx-auto text-gray-900">
          <h1 className="py-10 text-6xl font-bold lg:text-8xl">
            Page not found
          </h1>
          <p className="text-3xl lg:text-4xl">
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            I couldn’t find what you were looking for.
          </p>
        </div>
        <div
          className="w-full max-w-screen-md px-6 pt-10 mx-auto"
          style={{ "padding-bottom": "20vh" }}
        >
          <p className="text-3xl lg:text-4xl">
            <Link to="/" className="text-blue-700 hover:underline">
              <div className="inline-flex items-center">
                <ArrowLeftIcon
                  className="w-8 h-8 mr-2 transform rotate-45"
                  aria-hidden="true"
                />
                Go to the homepage
              </div>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
