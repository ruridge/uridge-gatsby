import * as React from "react";
import PropTypes from "prop-types";
import MainNav from "./main-nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased text-gray-900 bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-300 bg-opacity-60 dark:bg-gray-900 dark:border-gray-700 dark:bg-opacity-70 backdrop-filter backdrop-blur-xl">
        <div className="max-w-screen-lg mx-auto safe-x safe-t">
          <MainNav />
        </div>
      </div>
      <main className="flex-1">
        <div className="max-w-screen-lg py-6 mx-auto safe-x safe-b sm:py-9 lg:py-12">
          {children}
        </div>
      </main>
      <div className="hidden sm:block safe-x safe-b">
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
