import { z } from "zod";
import { NextResponse } from "next/server";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = Schema.parse(json);

    // TODO: hier könntest du Supabase-Insert oder Mailversand integrieren
    // await db.messages.insert(data)

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}