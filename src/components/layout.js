import * as React from "react";
import PropTypes from "prop-types";
import MainNav from "./main-nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased text-gray-900 bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-300 bg-opacity-70 backdrop-filter backdrop-blur-xl">
        <div className="max-w-screen-lg pl-4 pr-2 mx-auto sm:px-6 lg:px-8">
          <MainNav />
        </div>
      </div>
      <main className="flex-1">
        <div className="max-w-screen-lg px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-9 lg:py-12">
          {children}
        </div>
      </main>
      <div className="hidden sm:p-6 lg:p-8 sm:block">
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
