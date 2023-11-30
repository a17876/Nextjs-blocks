"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";


export async function editBlock(id: number, code: string, formData: FormData) {
//   call prisma to update the code block using code parameter
    await db.snippet.update({
        where: { id },
        data: { code },
    });
    redirect(`/blocks/${id}`);
}



