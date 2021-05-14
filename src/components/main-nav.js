import * as React from "react";
import { Link } from "gatsby";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const isActiveDesktop = ({ isCurrent }) => {
  const baseClassNames = "px-1 md:px-3 py-2 text-sm lg:text-base font-semibold";
  return isCurrent
    ? {
        className: `text-gray-900 ${baseClassNames}`,
        "aria-current": "page",
      }
    : {
        className: `text-gray-500 hover:text-gray-900 ${baseClassNames}`,
      };
};

const isActiveMobile = ({ isCurrent }) => {
  const baseClassNames =
    "block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700";
  return isCurrent
    ? {
        className: `bg-blue-500 text-white ${baseClassNames}`,
        "aria-current": "page",
      }
    : {
        className: `text-gray-500 hover:bg-gray-200 hover:text-blue-500 ${baseClassNames}`,
      };
};

function MainNav(props) {
  const { mainNavLinks } = useSiteMetadata();
  // return <nav>Navigation: Home – Projects – Snippets</nav>;
  return (
    <Disclosure as="nav" className="bg-gray-50">
      {({ open }) => (
        <>
          <div className="pl-4 pr-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logos */}
              <div className="flex items-center flex-shrink-0">
                <Link to="/">
                  <span className="font-semibold">
                    ROBERT<span className="font-light">URIDGE</span>
                  </span>
                </Link>
              </div>
              <div className="flex">
                {/* Desktop Menu */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex items-baseline space-x-4 md:space-x-1 lg:space-x-3">
                    {mainNavLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        getProps={isActiveDesktop}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Mobile menu */}
                <div className="inset-y-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-blue-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          {/* Slide-over menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavLinks.map((item) => (
                <Link key={item.name} to={item.href} getProps={isActiveMobile}>
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default MainNav;
