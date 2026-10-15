import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AdminLoginForm from "@/src/components/admin/admin-login-form";
import { authOptions } from "@/src/lib/auth";

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin");

  return <AdminLoginForm />;
}
