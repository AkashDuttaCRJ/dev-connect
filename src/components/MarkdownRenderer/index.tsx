import ReactMarkdown from "react-markdown";
import { SyntaxHighlighter } from "../SyntaxHighlighter";

const H1 = ({ ...props }) => {
  return <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />;
};

const H2 = ({ ...props }) => {
  return <h2 className="text-xl font-bold mt-6 mb-4" {...props} />;
};

const H3 = ({ ...props }) => {
  return <h3 className="text-lg font-bold mt-6 mb-4" {...props} />;
};

const H4 = ({ ...props }) => {
  return <h4 className="text-base font-bold mt-6 mb-4" {...props} />;
};

const H5 = ({ ...props }) => {
  return <h5 className="text-sm font-bold mt-6 mb-4" {...props} />;
};

const H6 = ({ ...props }) => {
  return <h6 className="text-xs font-bold mt-6 mb-4" {...props} />;
};

const Code = ({ ...props }) => {
  const { inline, ...rest } = props;

  const match = /language-(\w+)/.exec(rest.className || "");

  return !inline && match ? (
    <SyntaxHighlighter {...props} language={match[1]}>
      {String(rest.children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-slate-200 rounded text-sm p-1" {...rest}>
      {rest.children}
    </code>
  );
};

const Link = ({ ...props }) => {
  return (
    <a
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

const Paragraph = ({ ...props }) => {
  return <p className="text-base mt-6 mb-4" {...props} />;
};

const MarkdownRenderer = ({ ...props }) => {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    code: Code,
    a: Link,
    p: Paragraph,
  };
  return (
    <ReactMarkdown className="p-4" components={components} {...props}>
      {props.children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
