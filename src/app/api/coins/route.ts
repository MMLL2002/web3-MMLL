export const revalidate = 60;

const COINS = "bitcoin,ethereum,solana,binancecoin";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=" + COINS + "&vs_currencies=usd&include_24hr_change=true",
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return Response.json({ error: "Failed" }, { status: 502 });
    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ error: "Upstream unavailable" }, { status: 502 });
  }
}
