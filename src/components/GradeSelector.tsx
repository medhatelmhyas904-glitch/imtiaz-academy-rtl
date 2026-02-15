import { GRADES } from "@/data/scheduleData";

interface GradeSelectorProps {
  selectedGrade: string | null;
  onSelectGrade: (id: string) => void;
}

const GradeSelector = ({ selectedGrade, onSelectGrade }: GradeSelectorProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {GRADES.map((grade, index) => (
        <button
          key={grade.id}
          onClick={() => onSelectGrade(grade.id)}
          className={`grade-btn animate-fade-in ${selectedGrade === grade.id ? "active" : ""}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <span className="relative z-10">{grade.name}</span>
        </button>
      ))}
    </div>
  );
};

export default GradeSelector;
