import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "prism-react-renderer/themes/nightOwl";
import Confetti from "react-dom-confetti";
import styled from "styled-components";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",

  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const Wrapper = props => <div style={{ position: "relative" }} {...props} />;
const ConfettiWrapper = props => (
  <div style={{ position: "absolute", top: 0, right: 0 }} {...props} />
);

const Btn = styled.div`
  border-radius: 8px;
  white-space: nowrap;
  font-size: 15px;
  margin-left: 4%;
  text-decoration: none;
  position: absolute;
  top: 2px;
  outline: none;
  left: 0;
  background-color: gray;
  padding: 3px 2px;
  color: white;
  font-weight: bold;
`;
const Button = props => (
  <button
    style={{
      border: "none",
      boxShadow: "none",
      textDecoration: "none",
      position: "absolute",
      top: 0,
      right: 0,
      margin: "8px",
      padding: "8px 12px",
      background: "#E2E8F022",

      borderRadius: "8px",
      cursor: "pointer",
      color: "#E2E8F0",
      fontSize: "14px",
      fontFamily: "sans-serif",
      lineHeight: "1",
    }}
    {...props}
  />
);

export const Code = ({ codeString, children, language, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  console.log(language);
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Wrapper>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                padding: "3rem 2rem 2rem 2rem",

                position: "relative",
              }}
            >
              <Button
                onClick={() => {
                  copyToClipboard(codeString);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 3000);
                }}
              >
                {isCopied ? "🎉 Copied!" : "Copy"}
              </Button>

              <Btn>{language}</Btn>

              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} style={style}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <ConfettiWrapper>
          <Confetti active={isCopied} config={config} />
        </ConfettiWrapper>
      </Wrapper>
    );
  }
};
