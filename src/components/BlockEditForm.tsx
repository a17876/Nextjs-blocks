"use client";
import Editor from "@monaco-editor/react";
interface Block {
  id: number;
  title: string;
  code: string;
}
export default function BlockEditForm({ block }: { block: Block | null }) {
  function handleEditorChange(value: string | undefined, event: any) {}

  return (
    <Editor
      height="50vh"
      defaultLanguage="javascript"
      defaultValue={block?.code}
      onChange={handleEditorChange}
      theme="vs-dark"
    />
  );
}
