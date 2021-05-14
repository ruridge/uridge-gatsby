import * as React from "react";
import PropTypes from "prop-types";
import MainNavBar from "./main-nav-bar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <MainNavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
