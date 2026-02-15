import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import GradeSelector from "@/components/GradeSelector";
import ScheduleTable from "@/components/ScheduleTable";
import { GRADES } from "@/data/scheduleData";
import { GraduationCap } from "lucide-react";

const Index = () => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const activeGrade = GRADES.find((g) => g.id === selectedGrade);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Free Classes Section */}
      <section id="free-classes" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-accent/10 px-5 py-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-accent font-bold text-sm">مجاناً</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
              الحصص المجانية
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              اختر صفك الدراسي لعرض الجدول الأسبوعي
            </p>
          </div>

          {/* Grade Selection */}
          <GradeSelector selectedGrade={selectedGrade} onSelectGrade={setSelectedGrade} />

          {/* Schedule Display */}
          {activeGrade && (
            <div className="mt-10" key={activeGrade.id}>
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                جدول {activeGrade.name}
              </h3>
              <ScheduleTable grade={activeGrade} />
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="navy-gradient py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-bold text-lg" style={{ color: "hsl(45 90% 60%)" }}>
            امتياز أكاديمي
          </p>
          <p className="text-sm mt-2" style={{ color: "hsl(220 20% 70%)" }}>
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
