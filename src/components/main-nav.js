import * as React from "react";
import { Link } from "gatsby";
import { Dialog, Transition } from "@headlessui/react";
import {
  BookOpenIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Footer from "./footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isActive({ baseClasses, isCurrentClasses, notCurrentClasses }) {
  return ({ isCurrent }) => {
    return isCurrent
      ? {
          className: `${isCurrentClasses} ${baseClasses}`,
          "aria-current": "page",
        }
      : { className: `${notCurrentClasses} ${baseClasses}` };
  };
}

function delayClass(index) {
  switch (index) {
    case 0:
      return "delay-100";
    case 1:
      return "delay-200";
    case 2:
      return "delay-300";
    default:
      return "";
  }
}

function getMenuIcons(href) {
  switch (href) {
    case "/":
      return HomeIcon;
    case "/projects/":
      return BookOpenIcon;
    case "/snippets/":
      return DocumentDuplicateIcon;
    default:
      return XIcon;
  }
}

function MainNav() {
  const { mainNavLinks } = useSiteMetadata();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <>
      <nav className="flex items-center justify-between h-16 lg:h-20">
        {/* Logos */}
        <div className="flex items-center flex-shrink-0">
          <Link
            to="/"
            className="text-gray-900 dark:text-gray-100 hover:no-underline"
          >
            <span className="text-lg font-semibold sm:text-xl md:text-2xl">
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
                  getProps={isActive({
                    baseClasses:
                      "px-1 md:px-3 py-2 text-sm lg:text-base font-semibold",
                    isCurrentClasses: "text-gray-900 dark:text-gray-100",
                    notCurrentClasses:
                      "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
                  })}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu open button */}
          <div className="inset-y-0 flex items-center sm:hidden">
            <button
              onClick={openDialog}
              className={classNames(
                "inline-flex items-center justify-center p-2 -mr-2 text-gray-500 rounded-md",
                "hover:text-blue-500 hover:bg-gray-200",
                "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
              )}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      {/* Slide-over mobile menu */}
      <Transition show={dialogOpen} as={React.Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-20 overflow-hidden sm:hidden"
          open={dialogOpen}
          onClose={closeDialog}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={React.Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-black backdrop-filter backdrop-blur-px backdrop-grayscale" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={React.Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div
                  className="relative max-w-md overflow-x-hidden overflow-y-scroll"
                  style={{ width: "80vw" }}
                >
                  {/* Mobile menu content */}
                  <div className="flex flex-col h-full shadow-2xl bg-gray-50 dark:bg-gray-900">
                    {/* Mobile menu header */}
                    <div className="flex items-center justify-end h-16 pl-4 pr-2">
                      {/* Mobile menu close button */}
                      <button
                        className={classNames(
                          "inline-flex items-center justify-center p-2 text-gray-500 rounded-md",
                          "hover:text-blue-500 hover:bg-gray-200",
                          "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
                        )}
                        onClick={closeDialog}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                    {/* Mobile menu body */}
                    <div className="flex flex-col flex-1">
                      <div className="flex-1 py-4 pr-4 space-y-3">
                        {mainNavLinks.map((item, index) => {
                          const Icon = getMenuIcons(item.href);
                          return (
                            <Transition.Child
                              as={React.Fragment}
                              enter={`transform transition ease-in-out duration-500 ${delayClass(
                                index
                              )} sm:duration-700`}
                              enterFrom="translate-x-full"
                              enterTo="translate-x-0"
                              leave="transform transition ease-in-out duration-500 sm:duration-700"
                            >
                              <Link
                                key={item.name}
                                to={item.href}
                                getProps={isActive({
                                  baseClasses:
                                    "block flex px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-inset border-l-8 border-transparent",
                                  isCurrentClasses:
                                    "text-blue-500 border-blue-500",
                                  notCurrentClasses:
                                    "text-gray-500 hover:text-blue-500",
                                })}
                              >
                                <Icon
                                  className="block w-6 h-6 mr-3"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </Transition.Child>
                          );
                        })}
                      </div>
                      <div className="p-4 dark:text-gray-100">
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MainNav;
