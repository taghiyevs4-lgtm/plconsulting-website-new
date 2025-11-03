import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      {/* HERO BÖLMƏSİ */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Prime Legal & Consulting"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#c7a249]">
            Prime Legal & Consulting
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Hüquq, Maliyyə, HR və Tədbir İdarəçiliyi üzrə Peşəkar Xidmətlər
          </p>
          <a
            href="#services"
            className="mt-8 inline-block px-8 py-3 bg-[#c7a249] text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Xidmətlərimiz
          </a>
        </div>
      </section>

      {/* XİDMƏTLƏR BÖLMƏSİ */}
      <section id="services" className="py-20 px-6 md:px-20 bg-[#111]">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#c7a249]">
          Xidmət Sahələrimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HÜQUQ */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition">
            <Image
              src="/images/legal.jpg"
              alt="Hüquq xidmətləri"
              width={400}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#c7a249] mb-2">
                Hüquq Xidmətləri
              </h3>
              <p className="text-gray-300 text-sm">
                Müştərilərimizə kommersiya, əmək, korporativ və bank hüququ
                sahələrində hüquqi dəstək təqdim edirik.
              </p>
            </div>
          </div>

          {/* MALİYYƏ */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition">
            <Image
              src="/images/finance.jpg"
              alt="Maliyyə xidmətləri"
              width={400}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#c7a249] mb-2">
                Maliyyə Konsaltinqi
              </h3>
              <p className="text-gray-300 text-sm">
                Şirkətlərin maliyyə strukturunun təhlili, planlaşdırılması və
                investisiya strategiyalarının hazırlanması.
              </p>
            </div>
          </div>

          {/* HR */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition">
            <Image
              src="/images/hr.jpg"
              alt="HR xidmətləri"
              width={400}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#c7a249] mb-2">
                HR və İdarəetmə
              </h3>
              <p className="text-gray-300 text-sm">
                İnsan resurslarının seçimi, qiymətləndirilməsi və motivasiya
                sistemlərinin hazırlanması.
              </p>
            </div>
          </div>

          {/* TƏDBİR MENECMENTİ */}
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition">
            <Image
              src="/images/event.jpg"
              alt="Tədbir menecmenti"
              width={400}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#c7a249] mb-2">
                Tədbir Menecmenti
              </h3>
              <p className="text-gray-300 text-sm">
                Korporativ tədbirlərin, konfransların və biznes görüşlərinin
                tam planlaşdırılması və idarə olunması.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
