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

  const editBlockAction = actions.editBlock.bind(null, block.id, code);

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
        {/* input 또 있다면 formData로 갈 것이다.  */}
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
