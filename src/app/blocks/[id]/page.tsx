import { db } from "@/db";
import Link from "next/link";

interface BlockShowPageProps {
  params: { id: string };
}

export default async function CodeDetail(props: BlockShowPageProps) {
  const block = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  return <pre>{block?.code}</pre>
  // return <pre>{JSON.stringify(props)}</pre>; 
}
