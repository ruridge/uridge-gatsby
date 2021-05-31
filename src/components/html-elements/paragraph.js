import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/class-names";

const Size = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
const SIZE_MAPS = {
  [Size.SMALL]: "text-xs sm:text-sm",
  [Size.MEDIUM]: "text-base sm:text-lg",
  [Size.LARGE]: "text-xl sm:text-2xl",
};

function Paragraph({ children, size, maxWidthProse }) {
  return (
    <p
      className={classNames(
        SIZE_MAPS[size],
        maxWidthProse && "max-w-prose",
        "mb-4 lg:mb-6"
      )}
    >
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  maxWidthProse: PropTypes.bool,
};

Paragraph.defaultProps = {
  size: Size.MEDIUM,
  maxWidthProse: false,
};

Paragraph.size = Size;

export default Paragraph;
