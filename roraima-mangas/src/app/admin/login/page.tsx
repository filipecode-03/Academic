import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AdminLoginForm from "@/src/components/admin/admin-login-form";
import { authOptions } from "@/src/lib/auth";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin");

  const { callbackUrl } = await searchParams;
  const destination =
    callbackUrl?.startsWith("/admin") && !callbackUrl.startsWith("/admin/login")
      ? callbackUrl
      : "/admin";

  return <AdminLoginForm callbackUrl={destination} />;
}
