import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/lib/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Workshop",
  description: "Next JS workshop for SCE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
