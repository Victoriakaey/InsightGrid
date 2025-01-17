import type { Metadata } from "next";
import "./globals.css";
// import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
  title: "Insight Grid",
  description:
    "A modern, responsive, and interactive data visualization platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black/95 h-screen">
        {/* <ReduxProvider> */}
        {children}
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
