import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !user.email) return NextResponse.json({ member: false });
    const { data } = await supabase.from("payments").select("*")
      .eq("email", user.email).eq("status", "confirmed").maybeSingle();
    return NextResponse.json({ member: !!data, email: user.email });
  } catch { return NextResponse.json({ member: false }); }
}
