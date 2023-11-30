import { db } from "@/db";
import Link from "next/link";
import CodeDetail from "./blocks/[id]/page";

export default async function Home() {
  const blocks = await db.snippet.findMany();
  const renderBlocks = blocks.map((block) => (
    <Link
      key={block.id}
      href={`/blocks/${block.id}`}
      className="flex justify-between items-center p-2 border rounded"
      passHref
    > 
      {block.title}
      <div>View</div>
    </Link>
  ));
  return (
    <div>
      <div className="flex m-2 justify0between items-center">
        <h1 className="text-xl font-bold">Blocks</h1>
        <Link href={"/blocks/new"} className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex ">{renderBlocks}</div>
    </div>
  );
}
