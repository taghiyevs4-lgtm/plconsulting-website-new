import { getDictionary } from "@/lib/i18n";

export default async function Page({ params: { locale } }: { params: { locale: any } }) {
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="text-4xl text-[#c7a249] font-bold p-8">
        {dict.hero.title}
      </h1>
      <p className="px-8 text-white/80">{dict.hero.subtitle}</p>
    </main>
  );
}
