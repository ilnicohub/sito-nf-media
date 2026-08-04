import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import crypto from "crypto";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || process.env.KV_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || process.env.KV_REST_API_READ_ONLY_TOKEN || "",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { consentType, preferences } = body;

    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    
    // Create an anonymous hash to prove consent without storing PII
    const hash = crypto.createHash('sha256').update(`${ip}-${userAgent}`).digest('hex');
    const timestamp = Date.now();
    
    // Store in KV with a prefix
    await redis.set(`consent:${hash}`, {
      timestamp,
      consentType: consentType || "unknown",
      preferences: preferences || {}
    });

    // Also push to a list of logs for auditing (keeping only the last 10000 records to save space)
    await redis.lpush("consent_logs", JSON.stringify({
      hash,
      timestamp,
      consentType: consentType || "unknown",
      preferences: preferences || {}
    }));
    await redis.ltrim("consent_logs", 0, 9999);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore salvataggio consent KV:", error);
    return NextResponse.json({ success: false }); 
  }
}
