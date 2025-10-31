import "./globals.css";

export const metadata = {
  title: "Prime Legal & Consulting — PL Consulting",
  description: "Trusted Partner in Legal & Business Growth — Baku, Azerbaijan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
