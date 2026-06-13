export async function POST(request: Request) {
  try {
    const { email, txid } = await request.json();
    if (!email || !txid) {
      return Response.json({ error: "???????ID" }, { status: 400 });
    }
    if (txid.length < 10) {
      return Response.json({ error: "??ID?????" }, { status: 400 });
    }
    return Response.json({ success: true, message: "????????????????" });
  } catch {
    return Response.json({ error: "??????" }, { status: 400 });
  }
}
