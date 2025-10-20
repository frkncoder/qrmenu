import React from "react";
// Eğer proje tsconfig ile '@/*' alias'ı kullanıyorsa:
import { Button } from "@/components/ui/button";
// Aksi halde (alias yoksa) relative yol deneyin:
// import { Button } from "../components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="p-8 rounded-lg bg-white shadow">
        <h1 className="text-2xl font-bold mb-4">QR OKU</h1>
        <p className="mb-6">shadcn UI örneği</p>
        <Button>Örnek Buton</Button>
      </div>
    </main>
  );
}