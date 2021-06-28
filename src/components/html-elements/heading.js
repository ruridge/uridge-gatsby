import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/class-names";

const H1 = ({ children, ...rest }) => <h1 {...rest}>{children}</h1>;
const H2 = ({ children, ...rest }) => <h2 {...rest}>{children}</h2>;
const H3 = ({ children, ...rest }) => <h3 {...rest}>{children}</h3>;
const H4 = ({ children, ...rest }) => <h4 {...rest}>{children}</h4>;
const H5 = ({ children, ...rest }) => <h5 {...rest}>{children}</h5>;
const H6 = ({ children, ...rest }) => <h6 {...rest}>{children}</h6>;

const Color = {
  GRAY: "gray",
  GREEN: "green",
  PINK: "pink",
  PURPLE: "purple",
};
const COLOR_MAP = {
  [Color.GRAY]: "text-gray-800 dark:text-gray-200",
  [Color.GREEN]: "text-green-600 dark:text-green-500",
  [Color.PINK]: "text-pink-600 dark:text-pink-500",
  [Color.PURPLE]: "text-purple-600 dark:text-purple-400",
};
const SIZE_MAP = {
  1: "text-4xl font-extrabold sm:text-5xl",
  2: "text-2xl font-extrabold sm:text-3xl",
  3: "text-xl font-extrabold sm:text-2xl",
  4: "text-lg font-extrabold sm:text-xl",
  5: "text-base font-extrabold sm:text-lg",
  6: "text-sm font-black sm:text-base",
};

function Heading({ children, level, size = null, color }) {
  if (size == null) {
    size = [1, 2, 3, 4, 5, 6][level - 1];
  }
  const Element = [H1, H2, H3, H4, H5, H6][level - 1];
  return (
    <Element
      className={classNames(COLOR_MAP[color], SIZE_MAP[size], "mb-4 lg:mb-6")}
    >
      {children}
    </Element>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.oneOf(["gray", "green", "pink", "purple"]),
};

Heading.defaultProps = {
  color: Color.GRAY,
};

Heading.color = Color;

export default Heading;
