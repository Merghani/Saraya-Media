import { useState } from "react";

export default function HomePage() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <div className={`${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Language Toggle */}
      <div className="flex justify-end px-6 py-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-100"
        >
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>

      {/* Hero Section with Background and Overlay */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Saraya Media
            {language === "ar" && (
              <span className="text-lg md:text-xl block mt-2 font-bold tracking-wide">سرايا ميديا (عالم السرعة)</span>
            )}
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            {language === "en"
              ? "Driven by Creativity. Powered by Experience."
              : "مدفوعة بالإبداع. مدعومة بالخبرة."}
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-2xl shadow-md font-semibold">
            {language === "en" ? "Explore Our Work" : "استعرض أعمالنا"}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {language === "en" ? "About Us" : "من نحن"}
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-loose">
          {language === "en"
            ? "Saraya Media (World of Speed Services) is an Omani marketing and production house. Our team of experienced creatives, designers, and content specialists work in harmony with clients to deliver transparent, high-impact results."
            : "سرايا ميديا (عالم السرعة) هي شركة عُمانية للإنتاج والتسويق. يتكون فريقنا من محترفين مبدعين يعملون بتناغم مع عملائنا لتقديم نتائج مؤثرة وشفافة."}
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "en" ? "Our Services" : "خدماتنا"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              en: { title: "Photography", desc: "Events, Portraits, Products, Aerial" },
              ar: { title: "التصوير", desc: "فعاليات، بورتريه، منتجات، جوي" },
            },
            {
              en: { title: "Videography", desc: "Interviews, Chroma, Editing, Coverage" },
              ar: { title: "تصوير الفيديو", desc: "مقابلات، كرومة، مونتاج، تغطيات" },
            },
            {
              en: { title: "Motion Graphics", desc: "Logo Animation, Infographics, VFX" },
              ar: { title: "موشن جرافيك", desc: "تحريك شعارات، انفوجرافيك، مؤثرات" },
            },
            {
              en: { title: "Graphic Design", desc: "Brand Identity, Posters, Reports" },
              ar: { title: "تصميم جرافيكي", desc: "هوية، بوسترات، تقارير" },
            },
            {
              en: { title: "Content Writing", desc: "Social Media, SEO, Scripts" },
              ar: { title: "كتابة المحتوى", desc: "سوشيال ميديا، محركات بحث، سكربت" },
            },
            {
              en: { title: "Digital Marketing", desc: "Social, SEO, Email, Google Ads" },
              ar: { title: "تسويق رقمي", desc: "سوشيال، إيميلات، إعلانات قوقل" },
            },
          ].map((s, i) => (
            <div key={i} className="bg-white bg-opacity-10 backdrop-blur rounded-2xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">
                {language === "en" ? s.en.title : s.ar.title}
              </h3>
              <p>{language === "en" ? s.en.desc : s.ar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional sections would follow the same language toggle logic */}
    </div>
  );
}
