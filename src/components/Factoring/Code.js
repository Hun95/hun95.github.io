import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/vsDark';
import styled from 'styled-components';

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const Wrapp = styled.article`
  position: relative;

  width: 100%;
`;

const Pre = styled.pre`
  background: #1e1e1e;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  margin: 1.5rem 0;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: 'Courier New', Courier, monospace;

  .token-line {
    line-height: 1.5;
  }
  .code-tab {
    position: absolute;
    top: 0;
    right: 5%;
    color: rgb(156, 220, 254);
    font-size: 0.7rem;
    font-weight: 700;
    transform: translateY(-100%);
    text-transform: uppercase;
    padding: 0.05rem 0.85rem 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #1e1e1e;

    @media only screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
`;

const ButtonWrap = styled.button`
  transform: translateY(-100%);
  position: absolute;
  top: 2.5rem;
  right: 5%;
  border: none;
  box-shadow: none;
  text-decoration: none;
  background: #e2e8f022;
  border-radius: 8px;
  cursor: pointer;
  color: #e2e8f0;
  font-size: 14px;
  line-height: 1;
  padding: 8px 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Code = ({ codeString, children, language, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={false}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Wrapp>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre
              className={className}
              style={{
                ...style,
              }}
            >
              <ButtonWrap
                onClick={() => {
                  copyToClipboard(codeString);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 3000);
                }}
              >
                {isCopied ? '🎉 Copied!' : 'Copy'}
              </ButtonWrap>

              <div className='code-tab'>{language}</div>

              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} style={{ style }}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          )}
        </Highlight>
      </Wrapp>
    );
  }
};
