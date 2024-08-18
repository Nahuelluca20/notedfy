"use client";

import React, { useState } from "react";
import NovelEditor from "./novel-editor";

export const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [],
    },
  ],
};

export default function EditorWrapper() {
  const [content, setContent] = useState<string>("");

  return (
    <div>
      <NovelEditor initialValue={defaultValue} onChange={setContent} />
    </div>
  );
}
