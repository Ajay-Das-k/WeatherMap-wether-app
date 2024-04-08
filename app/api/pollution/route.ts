import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url, "https://example.com").searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    if (!lat || !lon) {
      throw new Error("Latitude and longitude are required.");
    }

    const apiKey = "bd5e378503939ddaee76f12ad7a97608";
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await axios.get(url);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error in getting pollution data:", error);
    return new Response("Error fetching pollution data", { status: 500 });
  }
}
