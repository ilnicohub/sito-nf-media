import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const dateStr = searchParams.get("date");
  const timeStr = searchParams.get("time");

  if (!dateStr || !timeStr) {
    return new NextResponse("Missing date or time parameters", { status: 400 });
  }

  try {
    const date = new Date(dateStr);
    const [hours, minutes] = timeStr.split(":");
    
    const pad = (n: number) => n.toString().padStart(2, "0");
    const yyyy = date.getFullYear();
    const mm = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    
    const startHour = parseInt(hours, 10);
    const startStr = `${yyyy}${mm}${dd}T${pad(startHour)}${minutes}00`;
    
    const endDate = new Date(date);
    endDate.setHours(startHour, parseInt(minutes, 10) + 30);
    const endStr = `${yyyy}${mm}${dd}T${pad(endDate.getHours())}${pad(endDate.getMinutes())}00`;
    
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//NF Media Lab//Booking//IT",
      "BEGIN:VEVENT",
      `UID:${new Date().getTime()}@nfmedialab.it`,
      `DTSTART;TZID=Europe/Rome:${startStr}`,
      `DTEND;TZID=Europe/Rome:${endStr}`,
      "SUMMARY:Video Call con NF Media Lab",
      "DESCRIPTION:Video Call conoscitiva con il team di NF Media Lab.\\n\\nA breve riceverai il link di invito via email.",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const headers = new Headers();
    headers.set("Content-Type", "text/calendar; charset=utf-8");
    headers.set("Content-Disposition", 'attachment; filename="videocall-nfmedialab.ics"');

    return new NextResponse(icsContent, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error("Error generating ICS:", error);
    return new NextResponse("Error generating calendar file", { status: 500 });
  }
}
