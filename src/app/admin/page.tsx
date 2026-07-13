import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { isAdminAuthed } from "@/lib/auth";
import { getAdminStats } from "@/lib/admin-stats";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPage() {
  if (!(await isAdminAuthed())) {
    redirect("/admin/login");
  }

  const stats = await getAdminStats();
  return <AdminDashboard initial={stats} />;
}
