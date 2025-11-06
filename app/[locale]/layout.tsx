import "../globals.css";

export async function generateStaticParams() {
  return [{ locale: "az" }, { locale: "en" }, { locale: "ru" }];
}
export const dynamicParams = false;

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "az" | "en" | "ru" };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
