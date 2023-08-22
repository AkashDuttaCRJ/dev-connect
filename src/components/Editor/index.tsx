"use client";

import React, { memo, useEffect, useRef } from "react";
import EditorJS, { LogLevels, OutputData } from "@editorjs/editorjs";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};

const EditorBlock = ({ data, onChange, holder }: Props) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        logLevel: "ERROR" as LogLevels,
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [data, holder, onChange]);

  return <div id={holder} />;
};

export default memo(EditorBlock);
