import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { authOptions } from "@/src/lib/auth";

export async function getAuthenticatedToken(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: authOptions.secret,
  });

  return token;
}
