export const revalidate = 120;

interface NewsItem { title: string; link: string; desc: string; }

export async function GET() {
  try {
    const res = await fetch("https://cointelegraph.com/rss", {
      next: { revalidate: 120 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; NewsBot)" },
    });
    if (!res.ok) return Response.json({ error: "RSS failed" }, { status: 502 });
    const xml = await res.text();
    const items: NewsItem[] = [];
    let pos = 0;
    while (items.length < 9) {
      const start = xml.indexOf("<item>", pos);
      if (start < 0) break;
      const end = xml.indexOf("</item>", start);
      if (end < 0) break;
      const item = xml.slice(start + 6, end);
      pos = end + 7;

      const getTag = (tag: string) => {
        const m = item.match(new RegExp("<" + tag + "[^>]*>(.*?)</" + tag + ">", "s"));
        if (!m) return "";
        return m[1].replace(/<!\[CDATA\[(.*?)\]\]>/, "$1").replace(/<[^>]+>/g, "").slice(0, 200);
      };
      items.push({ title: getTag("title"), link: getTag("link"), desc: getTag("description") });
    }
    return Response.json(items);
  } catch {
    return Response.json({ error: "Failed" }, { status: 502 });
  }
}
