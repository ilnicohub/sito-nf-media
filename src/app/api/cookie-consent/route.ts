import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import crypto from "crypto";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || process.env.KV_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || process.env.KV_REST_API_READ_ONLY_TOKEN || "",
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    
    // Create an anonymous hash to prove consent without storing PII
    const hash = crypto.createHash('sha256').update(`${ip}-${userAgent}-${Date.now()}`).digest('hex');
    
    // Store in KV with a prefix
    await redis.set(`consent:${hash}`, {
      timestamp: Date.now(),
      status: "accepted"
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore salvataggio consent KV:", error);
    return NextResponse.json({ success: false }); 
  }
}
