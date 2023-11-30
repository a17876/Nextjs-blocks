"use client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";
import type { Snippet } from "@prisma/client";

interface BlockEditFormProps {
  block: {
    id: number;
    title: string;
    code: string;
  };
}
export default function BlockEditForm({ block }: BlockEditFormProps) {
  const [code, setCode] = useState(block.code);

  function handleEditorChange(value: string = "") {
    console.log(value);
    setCode(value);
  }

  const editBlockAction = actions.editBlock.bind(null, code);

  return (
    <div className="mt-10">
      <Editor
        theme="vs-dark"
        height="30vh"
        defaultLanguage="javascript"
        defaultValue={block?.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      
      <form action={editBlockAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
