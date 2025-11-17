export default {
  nav: {
    home: "Ana səhifə",
    about: "Haqqımızda",
    services: "Xidmətlər",
    team: "Komanda",
    contact: "Əlaqə",
  },
  hero: {
    title: "Prime Legal & Consulting",
    subtitle:
      "Hüquq, maliyyə, HR və tədbir idarəçiliyi üzrə inteqrə olunmuş konsaltinq tərəfdaşınız.",
    short:
      "Biz şirkətlərin hüquqi təhlükəsizliyini, maliyyə dayanıqlığını və insan resurslarının effektiv idarə olunmasını təmin edən kompleks həllər təklif edirik. Strateji yanaşma, şəffaf şərtlər və operativ icra – hamısı bir mərkəzdən.",
    ctas: ["Məsləhət alın", "Bizimlə əlaqə saxlayın"],
  },
  about: {
    title: "Haqqımızda",
    premiumIntro1:
      "Prime Legal & Consulting Bakıda fəaliyyət göstərən, hüquq, maliyyə və insan resursları üzrə ixtisaslaşmış konsaltinq şirkətidir. Biz bizneslərin gündəlik əməliyyatlarında və strateji qərarlarında etibarlı tərəfdaş kimi çıxış edirik.",
    premiumIntro2:
      "Komandamız bankçılıq, korporativ idarəetmə, müqavilə münasibətləri, vergi, uyğunluq (compliance), HR sistemləri və tədbir idarəçiliyi üzrə çoxillik təcrübəyə malik peşəkar mütəxəssislərdən ibarətdir.",
    premiumIntro3:
      "Məqsədimiz – müştərilərimizə yalnız məsləhət deyil, nəticə gətirən həllər təqdim etməkdir. Bunun üçün hər bir layihəyə fərdi yanaşır, biznes modelinizi, riskləri və hədəflərinizi nəzərə alaraq optimal yol xəritəsi hazırlayırıq.",
    bullets: [
      "Strategiya + icra bir mərkəzdə",
      "Şəffaf qiymət siyasəti və SLA əsaslı xidmət",
      "Məxfilik, diskretlik və məlumat təhlükəsizliyi zəmanəti",
      "Yerli və beynəlxalq təcrübəyə əsaslanan praktiki yanaşma",
    ],
  },
  services: {
    title: "Xidmətlər",
    // Sürətli kartlar (fallback üçün saxlayırıq)
    items: [
      { title: "Hüquq", text: "Korporativ, müqavilələr, əmək hüququ, bank və tənzimləmə." },
      { title: "Maliyyə", text: "Maliyyə planlama, audit, vergi, investisiya strukturları." },
      { title: "HR", text: "Seçim, performans, ödəniş və motivasiya sistemləri." },
      { title: "Tədbirlər", text: "Konfrans, təlim, PR dəstəyi və tədbir idarəçiliyi." },
    ],
    // Genişləndirilmiş məzmun (sənin istədiyin detallı variant)
    details: [
      {
        icon: "⚖️",
        title: "Hüquqi Konsaltinq və Dəstək",
        intro:
          "Biz şirkətlərə gündəlik fəaliyyətlərində və strateji layihələrində kompleks hüquqi dəstək göstəririk:",
        points: [
          "Korporativ hüquq və şirkətlərin qeydiyyatı, restrukturlaşdırma",
          "Müqavilələrin hazırlanması, hüquqi rəy və risk analizi",
          "Əmək münasibətlərinin hüquqi tənzimlənməsi, daxili qaydalar və siyasətlər",
          "Bank və maliyyə hüququ, tənzimləyici tələblərə (compliance) uyğunluq",
          "Məhkəmə və arbitraj işlərində hüquqi mövqenin hazırlanması, mübahisə idarəçiliyi",
        ],
        closing:
          "Məqsədimiz – mübahisələri minimallaşdıran, biznesi qoruyan və inkişaf etdirən hüquqi çərçivə yaratmaqdır.",
        image: "/images/legal.jpg",
      },
      {
        icon: "💼",
        title: "Maliyyə və Vergi Konsaltinqi",
        intro:
          "Maliyyə göstəricilərinin düzgün planlanması və idarə olunması biznesin dayanıqlığının əsas şərtidir. Təklif etdiyimiz xidmətlər:",
        points: [
          "Maliyyə planlama və büdcələşdirmə",
          "Daxili maliyyə analizi və hesabatlılıq sistemlərinin qurulması",
          "Vergi planlaması və vergi risklərinin idarə olunması",
          "Auditə hazırlıq və audit proseslərinin koordinasiyası",
          "İnvestisiya layihələrinin maliyyə modellərinin hazırlanması",
        ],
        closing:
          "Biz həm gündəlik əməliyyatlara, həm də uzunmüddətli inkişaf strategiyanıza uyğun maliyyə həlləri formalaşdırırıq.",
        image: "/images/finance.jpg",
      },
      {
        icon: "👥",
        title: "İnsan Resurslarının İdarə Edilməsi",
        intro:
          "Doğru komanda – hər bir strategiyanın əsas resursudur. HR xidmətlərimiz çərçivəsində:",
        points: [
          "İşə qəbul və talentların seçimi (recruitment, headhunting)",
          "Vəzifə təsvirləri, struktur və ştat cədvəllərinin optimallaşdırılması",
          "Performans idarəetmə sistemlərinin qurulması",
          "Ödəniş və bonus siyasətlərinin hazırlanması",
          "Korporativ dəyərlər və HR siyasətlərinin formalaşdırılması",
        ],
        closing:
          "Məqsədimiz – motivasiyalı, şəffaf və nəticəyönümlü HR mühiti yaratmaqla biznesinizin inkişafını sürətləndirməkdir.",
        image: "/images/hr.jpg",
      },
      {
        icon: "🎤",
        title: "Tədbir və Layihə İdarəçiliyi",
        intro:
          "Biz biznes və ictimai tədbirlərin peşəkar səviyyədə planlanması və icrasını təmin edirik:",
        points: [
          "Konfrans, forum və biznes görüşlərinin təşkili",
          "Təlim və seminarların planlanması, proqramın hazırlanması",
          "PR dəstəyi və kommunikasiya strategiyası",
          "Protokol və mərasim idarəçiliyi",
          "Partnyorlar və sponsorlarla işin koordinasiyası",
        ],
        closing:
          "Hər tədbir üçün fərdi konsepsiya hazırlayır, büdcə və zaman çərçivəsinə uyğun effektiv icra təqdim edirik.",
        image: "/images/event.jpg",
      },
    ],
  },
  contact: {
    title: "Əlaqə",
    email: "E-poçt",
    address: "Ünvan",
    cta:
      "Biznesinizlə bağlı sualınız, layihəniz və ya hüquqi/maliyyə/HR ehtiyacınız var? Aşağıdakı əlaqə vasitələri ilə bizimlə əlaqə saxlayın, qısa zamanda geri dönüş edək.",
  },
};
