import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeHighlightProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeHighlight: React.FC<CodeHighlightProps> = ({
  code,
  language = "javascript",
  className = "",
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        borderRadius: "0.5rem",
        padding: "1rem",
        fontFamily: "monospace",
        background: "var(--color-primary-50, #2d2d2d)",
        color: "var(--color-primary-700, #f8f8f2)",
        overflowX: "auto",
      }}
      className={className}
      showLineNumbers={false}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

CodeHighlight.displayName = "CodeHighlight";