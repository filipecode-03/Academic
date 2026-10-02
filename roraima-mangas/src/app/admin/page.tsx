import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/src/lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2">
        Olá, {session.user?.name ?? session.user?.email}.
      </p>
    </div>
  );
}