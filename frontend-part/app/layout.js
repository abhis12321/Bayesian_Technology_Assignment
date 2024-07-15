import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bayesian-Technology-Assignment",
  description: "An assignment for intern role skill test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${inter.className} bg-lime-950/50 text-gray-200/80 min-h-[100vh] w-full`}>{children}</body>
    </html>
  );
}
