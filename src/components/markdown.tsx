import ReactMarkdown from "react-markdown";
import copy from "copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface IProps {
  content: string;
}

export default function Markdown({ content }: IProps) {
  const handleCopy = (text: string) => {
    copy(text);
    console.log("copied", text);
  };

  return (
    <ReactMarkdown
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div>
              <div className="flex rounded-xl  w-full justify-end  bg-white/5 p-2 ">
                <button
                  onClick={() =>
                    handleCopy(String(children).replace(/\n$/, ""))
                  }
                >
                  copy
                </button>
              </div>
              <SyntaxHighlighter
                wrapLines
                language={match[1]}
                style={gruvboxDark}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
