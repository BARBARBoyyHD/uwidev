import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next 16 i18n pattern: the bare "/" has no page of its own (every page lives
// under /[lang], whose layout is the root layout). This proxy resolves the
// locale from Accept-Language before rendering. Default: English.
function getLocale(request: NextRequest): "en" | "id" {
  const acceptLanguage = (request.headers.get("accept-language") ?? "")
    .trim()
    .toLowerCase();
  return acceptLanguage.startsWith("id") ? "id" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${getLocale(request)}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};