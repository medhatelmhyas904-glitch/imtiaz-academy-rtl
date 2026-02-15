import { GraduationCap } from "lucide-react";

const HeroSection = () => {
  const scrollToSchedule = () => {
    document.getElementById("free-classes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative overflow-hidden navy-gradient min-h-[85vh] flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-accent/30 bg-accent/10 px-6 py-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold text-sm">منصة تعليمية متميزة</span>
          </div>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s", color: "hsl(45 90% 60%)" }}
        >
          امتياز أكاديمي
        </h1>

        <p
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s", color: "hsl(0 0% 95%)" }}
        >
          طريقك للتفوق يبدأ هنا
        </p>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s", color: "hsl(220 20% 75%)" }}
        >
          تعليم متميز للمنهج المصري والدولي بأفضل المعلمين
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button onClick={scrollToSchedule} className="join-btn text-lg px-8 py-3">
            احجز الآن
          </button>
          <button
            onClick={scrollToSchedule}
            className="rounded-lg border-2 border-accent/40 px-8 py-3 text-lg font-bold transition-all duration-300 hover:border-accent hover:bg-accent/10"
            style={{ color: "hsl(45 90% 65%)" }}
          >
            الحصص المجانية
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
