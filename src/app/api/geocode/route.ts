import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  const params = new URLSearchParams({
    format: "jsonv2",
    q,
    countrycodes: "in",
    addressdetails: "1",
    limit: "6",
  });

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?${params.toString()}`,
    {
      headers: {
        "User-Agent": "FatimaToursAndTravels/1.0 (booking form location search)",
        "Accept-Language": "en",
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json({ results: [] }, { status: 502 });
  }

  const data: Array<{ place_id: number; display_name: string }> =
    await res.json();

  return NextResponse.json({
    results: data.map((item) => ({
      id: item.place_id,
      label: item.display_name,
    })),
  });
}
