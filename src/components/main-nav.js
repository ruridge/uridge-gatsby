import * as React from "react";
import { Link } from "gatsby";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSiteMetadata } from "../hooks/use-site-metadata";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isActive(baseClassNames, isCurrentClassNames, notCurrentClassNames) {
  return ({ isCurrent }) => {
    return isCurrent
      ? {
          className: `${isCurrentClassNames} ${baseClassNames}`,
          "aria-current": "page",
        }
      : { className: `${notCurrentClassNames} ${baseClassNames}` };
  };
}

function MainNav() {
  const { mainNavLinks } = useSiteMetadata();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <nav className="bg-gray-50">
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
                    getProps={isActive(
                      "px-1 md:px-3 py-2 text-sm lg:text-base font-semibold",
                      "text-gray-900",
                      "text-gray-500 hover:text-gray-900"
                    )}
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
                  "inline-flex items-center justify-center p-2 text-gray-500 rounded-md",
                  "hover:text-blue-500 hover:bg-gray-200",
                  "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
                )}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide-over mobile menu */}
      <Transition show={dialogOpen} as={React.Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden sm:hidden"
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
              <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
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
                <div className="relative max-w-md" style={{ width: "80vw" }}>
                  {/* Mobile menu content */}
                  <div className="h-full shadow-2xl bg-gray-50">
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
                    <div className="overflow-y-scroll">
                      <div className="p-4 space-y-3">
                        {mainNavLinks.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            getProps={isActive(
                              "block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-700",
                              "bg-blue-500 text-white focus:ring-offset-2",
                              "text-gray-500 hover:bg-gray-200 hover:text-blue-500 focus:ring-inset"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
}

export default MainNav;
