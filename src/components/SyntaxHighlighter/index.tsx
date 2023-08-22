"use client";

import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const SyntaxHighlighter = ({ ...props }) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-gray-900 text-white/70 absolute top-0 w-full px-3 py-1 text-xs rounded-t">
        <p>{props.language}</p>
        <button className="bg-gray-800 hover:bg-gray-700 rounded px-2 py-1 hover:text-white cursor-pointer">
          Copy
        </button>
      </div>
      <Prism
        {...props}
        style={vscDarkPlus}
        customStyle={{
          paddingTop: "2.4rem",
          borderRadius: "0.25rem",
        }}
      >
        {String(props.children).replace(/\n$/, "")}
      </Prism>
    </div>
  );
};
