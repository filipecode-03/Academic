import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AdminShell from "@/src/components/admin/admin-shell";
import { authOptions } from "@/src/lib/auth";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/admin/login");
  }

  return <AdminShell>{children}</AdminShell>;
}
