import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";

  let data: Record<string, string> = {};
  try {
    if (contentType.includes("application/json")) {
      data = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await req.formData();
      form.forEach((value, key) => {
        data[key] = String(value);
      });
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      form.forEach((value, key) => {
        data[key] = String(value);
      });
    } else {
      // Attempt to parse FormData by default (for standard HTML forms)
      const form = await req.formData();
      form.forEach((value, key) => {
        data[key] = String(value);
      });
    }
  } catch {
    // ignore malformed body; validation below will handle
  }

  const name = (data["name"] || "").trim();
  const email = (data["email"] || "").trim();
  const message = (data["message"] || "").trim();
  const company = (data["company"] || "").trim();
  const budget = (data["budget"] || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true, received: { name, email, company, budget, message } }, { status: 200 });
}
