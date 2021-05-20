import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

function NotFoundPage() {
  return (
    <>
      <Seo title="404: Page not found" />
      <div className="flex flex-col min-h-screen">
        <div class="flex-1 w-full flex flex-col justify-center max-w-screen-md px-6 mx-auto">
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
          class="max-w-screen-md px-6 mx-auto w-full pt-10"
          style={{ "padding-bottom": "20vh" }}
        >
          <p className="text-3xl lg:text-4xl">
            <Link to="/" className="text-blue-700 hover:underline">
              Go to the homepage
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
