import { db } from "@/db";
import React from "react";
import Editor from "@monaco-editor/react";
import BlockEditForm from "@/components/BlockEditForm";

interface BlockEditProps {
  params: {
    id: string;
  };
}

export default async function BlockEditPage({ params }: BlockEditProps) {
    // step1. talk to prisma to get the block that matches params.id
  const id = params.id;
  const block = await db.snippet.findUnique({ where: { id: parseInt(id) } });
  return (
    // step2. pass the block of data - as a prop to our client component
    <BlockEditForm block={block} /> // client component
  );
}

