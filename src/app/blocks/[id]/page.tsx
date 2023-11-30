import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlockShowPageProps {
  params: { id: string };
}

export default async function BlockShowPage(props: BlockShowPageProps) {
  const block = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!block) {
    return notFound(); // not-found.tsx를 찾는다.
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{block.title}</h1>
        <div className="flex gap-4">
          <Link className="p-2 border rounded" href={`/blocks/${block.id}/edit`}>Edit</Link>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded ">
        <code>{block.code}</code>
      </pre>

    </div>
  );
  // return <pre>{block?.code}</pre>
  // return <pre>{JSON.stringify(props)}</pre>;
}
