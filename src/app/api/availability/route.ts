import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || process.env.KV_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || process.env.KV_REST_API_READ_ONLY_TOKEN || "",
});

export async function GET() {
  try {
    const bookedSlotsKeys = await redis.smembers('booked_slots');
    
    const booked = bookedSlotsKeys.map(key => {
      const parts = key.split(':');
      const date = parts[1];
      const time = parts.slice(2).join(":");
      return { date, time };
    });

    return NextResponse.json({ success: true, booked });
  } catch (error) {
    console.error("Errore fetch KV availability:", error);
    return NextResponse.json({ success: false, booked: [] }); // fallback
  }
}
