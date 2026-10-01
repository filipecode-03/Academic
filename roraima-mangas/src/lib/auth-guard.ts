import { getServerSession } from "next-auth";

import { authOptions } from "@/src/lib/auth";

export async function getAuthenticatedSession() {
  const session = await getServerSession(authOptions);

  return session;
}