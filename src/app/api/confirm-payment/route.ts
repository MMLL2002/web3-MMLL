export async function POST(request: Request) {
  try {
    const { email, txid } = await request.json();
    if (!email || !txid) {
      return Response.json({ error: "Missing email or txid" }, { status: 400 });
    }
    if (txid.length < 10) {
      return Response.json({ error: "Invalid txid" }, { status: 400 });
    }
    return Response.json({ success: true, message: "Activation submitted" });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
