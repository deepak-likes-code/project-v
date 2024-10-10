import { Inter } from "next/font/google";
import { useState } from "react";
import YesCard from "../components/YesCard";
import TypewriterText from "@/components/TypeWriterText";
import Footer from "@/components/Footer";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import ComicBookViewer from "@/components/ComicBookViewer";
import GiftChecklist from "@/components/GiftList";

export default function Home() {
  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <GiftChecklist />
        </div>
      </main>
      <Footer />
    </div>
  );
}
