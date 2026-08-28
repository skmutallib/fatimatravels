import { NextRequest, NextResponse } from "next/server";

type GoogleSuggestion = {
  placePrediction?: {
    placeId: string;
    text?: { text: string };
  };
};

async function searchGoogle(q: string, apiKey: string) {
  const res = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
    },
    body: JSON.stringify({
      input: q,
      includedRegionCodes: ["in"],
      languageCode: "en",
    }),
  });

  if (!res.ok) return null;

  const data: { suggestions?: GoogleSuggestion[] } = await res.json();
  return (data.suggestions ?? [])
    .filter((s): s is Required<GoogleSuggestion> => Boolean(s.placePrediction?.text?.text))
    .map((s) => ({
      id: s.placePrediction.placeId,
      label: s.placePrediction.text!.text,
    }));
}

async function searchOsm(q: string) {
  const params = new URLSearchParams({
    format: "jsonv2",
    q,
    countrycodes: "in",
    addressdetails: "1",
    limit: "6",
  });

  const res = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: {
      "User-Agent": "FatimaToursAndTravels/1.0 (booking form location search)",
      "Accept-Language": "en",
    },
  });

  if (!res.ok) return null;

  const data: Array<{ place_id: number; display_name: string }> = await res.json();
  return data.map((item) => ({ id: item.place_id, label: item.display_name }));
}

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();

  if (!q) {
    return NextResponse.json({ results: [], source: "osm" });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (apiKey) {
    const results = await searchGoogle(q, apiKey);
    if (results) {
      return NextResponse.json({ results, source: "google" });
    }
  }

  const results = await searchOsm(q);
  if (!results) {
    return NextResponse.json({ results: [], source: "osm" }, { status: 502 });
  }

  return NextResponse.json({ results, source: "osm" });
}
