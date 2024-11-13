import Navbar from "@/components/Navbar";
// import Image from "next/image";
import React, { ReactNode } from "react";
// import blueLayer from "@/assets/blue-layer.avif";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-dvh h-full relative pb-[5rem]">
      <Navbar/>
      {children}
    </main>
  );
}
