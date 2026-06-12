import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, txid } = await request.json();
    if (!email || !txid) {
      return NextResponse.json({ error: "Missing email or txid" }, { status: 400 });
    }
    const supabase = await createClient();
    const { error } = await supabase.from("payments").insert({
      email, txid, amount: 1, status: "pending",
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Invalid request" }, { status: 400 });
  }
}
