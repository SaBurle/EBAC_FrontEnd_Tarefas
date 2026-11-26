import type { Metadata } from "next";
import "@/styles/globals.css";
import Layout from "./components/Layout";


export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "No Portal de Viagens, você conhece destinos turísticos para a sua próxima viagem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
