import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Alumnos React",
  description: "Página para visualizar una lista de alumnos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
