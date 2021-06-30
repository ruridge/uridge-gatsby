import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/vsLight";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import classNames from "../../utils/class-names";

function getOsPreferredColorScheme() {
  const osPreferredColorScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
  return osPreferredColorScheme || "light";
}

export function CodeBlock(props) {
  const className = props.children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);

  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    setTheme(getOsPreferredColorScheme());
  }, []);

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={theme === "light" ? lightTheme : darkTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            className,
            "rounded-lg border mb-4 lg:mb-6 p-5 overflow-auto"
          )}
          style={style}
        >
          <div>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
}
