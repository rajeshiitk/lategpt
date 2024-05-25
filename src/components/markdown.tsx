import ReactMarkdown from "react-markdown";
import copy from "copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  gruvboxDark,
  darcula,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface IProps {
  content: string;
}

export default function Markdown({ content }: IProps) {
  const handleCopy = (text: string) => {
    copy(text);
    toast.success("Copied to clipboard;");
  };

  return (
    <ReactMarkdown
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div>
              <div className="flex rounded-xl  w-full justify-start  bg-white/5 p-2 ">
                <Button
                  variant="ghost"
                  onClick={() =>
                    handleCopy(String(children).replace(/\n$/, ""))
                  }
                >
                  copy
                </Button>
              </div>
              <SyntaxHighlighter
                wrapLines
                customStyle={{
                  overflowX: "auto",
                  maxWidth: "100vw",
                }}
                language={match[1]}
                style={darcula}
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
