import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.formData();
    const file: File | null = data.get("image") as unknown as File;

    const name = `${randomUUID()}${file.name}`;
    const path = join("./public/upload", name);
    const bytes = await file.arrayBuffer();
    const buffer = await Buffer.from(bytes);
    await writeFile(path, buffer);

    console.log(`Enviado para ${path}`);
    return NextResponse.json({
      message: "Upload de imagem criado com sucesso",
    });
  } catch (error) {
    console.log(error);
  }
}
