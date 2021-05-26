import * as React from "react";
import PropTypes from "prop-types";
import MainNav from "./main-nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased text-gray-900">
      <div className={"bg-gray-50 main-menu"}>
        <div className="pl-4 pr-2 mx-auto max-w-screen-lg sm:px-6 lg:px-8">
          <MainNav />
        </div>
      </div>
      <main className="flex-1">
        <div className="px-4 py-6 mx-auto max-w-screen-lg sm:px-6 lg:px-8 sm:py-9 lg:py-12">
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
