import { DAYS, TIME_SLOTS, GradeSchedule } from "@/data/scheduleData";
import ClassCard from "./ClassCard";

interface ScheduleTableProps {
  grade: GradeSchedule;
}

const ScheduleTable = ({ grade }: ScheduleTableProps) => {
  return (
    <div className="animate-fade-in-up overflow-x-auto rounded-xl border border-border bg-card shadow-lg">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-7 border-b border-border">
          <div className="p-3 font-bold text-sm text-muted-foreground bg-muted text-center">
            الوقت
          </div>
          {DAYS.map((day) => (
            <div
              key={day}
              className="p-3 font-bold text-sm text-center bg-muted text-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Rows */}
        {TIME_SLOTS.map((slot) => (
          <div key={slot} className="grid grid-cols-7 border-b border-border last:border-b-0">
            <div className="p-3 text-xs font-semibold text-muted-foreground bg-muted/50 flex items-center justify-center text-center">
              {slot}
            </div>
            {DAYS.map((day) => {
              const session = grade.schedule[day]?.[slot];
              return (
                <div
                  key={day}
                  className="p-2 flex items-center justify-center min-h-[100px]"
                >
                  {session ? (
                    <ClassCard session={session} day={day} timeSlot={slot} />
                  ) : (
                    <span className="text-xs text-muted-foreground/40">—</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTable;
