import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="aqua">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <div className="flex justify-center items-center py-5 px-5 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
