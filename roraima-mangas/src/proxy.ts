import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getAuthenticatedToken } from "@/src/lib/auth-guard";

export async function proxy(request: NextRequest) {
  const token = await getAuthenticatedToken(request);
  const { pathname } = request.nextUrl;
  const loginPath = pathname === "/admin/login";

  if (loginPath && token?.id) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (loginPath) {
    if (request.nextUrl.search) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return NextResponse.next();
  }

  if (!token?.id) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
