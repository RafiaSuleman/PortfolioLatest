import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import PageTransition from '../components/ui/PageTransition'
import StairTransition from '../components/ui/StairTransition'
import { cn } from "@/lib/utils";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});
export const metadata: Metadata = {
  title: "Rafia Portfolio",
  description: "Full-Stack Web Developer | Next.js | AWS cloud deployment",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable} >
        <main>
        <Header/>
         <StairTransition/> 
        <PageTransition> {children}</PageTransition>
       
        </main>
      
      </body>
    </html>
  );
}
