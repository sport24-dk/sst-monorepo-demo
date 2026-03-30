import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean SST Monorepo",
  description: "Next.js app deployed with SST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
