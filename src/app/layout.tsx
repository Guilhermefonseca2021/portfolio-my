import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Guilherme",
    default: "Guilherme",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-bold">
      <link
        rel="icon"
        href="https://iconape.com/wp-content/files/zx/367679/svg/rocket-logo-icon-png-svg.png"
        type="image/"
      />
      <body>{children}</body>
    </html>
  );
}
