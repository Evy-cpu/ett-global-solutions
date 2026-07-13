"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Card, Input, Label } from "@/components/ui/primitives";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Mot de passe incorrect / Wrong password");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Erreur réseau / Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <Card className="w-full max-w-sm">
        <div className="mb-6 flex justify-center">
          <span className="rounded-lg bg-white p-2">
            <Image src="/logo_header.png" alt="ETT" width={140} height={42} className="h-9 w-auto" />
          </span>
        </div>
        <h1 className="text-center font-mont text-xl font-extrabold text-white">
          Admin – ETT GLOBAL SOLUTIONS
        </h1>
        <p className="mt-1 text-center text-xs text-slate-400">
          YOUR OBJECTIVE, OUR PRIORITY
        </p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="pwd">Mot de passe / Password</Label>
            <Input
              id="pwd"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "…" : "Se connecter / Sign in"}
          </Button>
        </form>
      </Card>
    </main>
  );
}
