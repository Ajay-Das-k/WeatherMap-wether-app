import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = "e659621a0b714c69daddb80ae9517b02";

    const searchParams = new URL(req.url, "https://example.com").searchParams;

    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    if (!lat || !lon) {
      throw new Error("Latitude and longitude are required.");
    }

    const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const dailyRes = await axios.get(dailyUrl);

    return NextResponse.json(dailyRes.data);
  } catch (error) {
    console.error("Error in getting daily data:", error);
    return new Response("Error in getting daily data", { status: 500 });
  }
}
