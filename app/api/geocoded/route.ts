import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = "bd5e378503939ddaee76f12ad7a97608";
    const searchParams = new URL(req.url, "https://example.com").searchParams;

    const city = searchParams.get("search");
    if (!city) {
      throw new Error("City name is required.");
    }

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    const response = await axios.get(url);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching geocoded data:", error);
    return new Response("Error fetching geocoded data", { status: 500 });
  }
}
