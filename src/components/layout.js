import * as React from "react";
import PropTypes from "prop-types";
import MainNav from "./main-nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased text-gray-900">
      <MainNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
