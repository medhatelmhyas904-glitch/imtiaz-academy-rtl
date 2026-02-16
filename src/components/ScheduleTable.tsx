import { useState, useEffect } from "react";
import { DAYS, TIME_SLOTS, TIME_SLOT_HOURS, GradeSchedule } from "@/data/scheduleData";
import ClassCard from "./ClassCard";

interface ScheduleTableProps {
  grade: GradeSchedule;
}

const DAYS_MAP: Record<string, number> = {
  "السبت": 6,
  "الأحد": 0,
  "الاثنين": 1,
  "الثلاثاء": 2,
  "الأربعاء": 3,
  "الخميس": 4,
};

function getEgyptNow() {
  const now = new Date();
  const egyptOffset = 2 * 60;
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utcMs + egyptOffset * 60000);
}

const ScheduleTable = ({ grade }: ScheduleTableProps) => {
  const [egyptNow, setEgyptNow] = useState(getEgyptNow);

  useEffect(() => {
    const interval = setInterval(() => setEgyptNow(getEgyptNow()), 60000);
    return () => clearInterval(interval);
  }, []);

  const currentDay = egyptNow.getDay();
  const currentHour = egyptNow.getHours();

  const isCurrentDay = (day: string) => DAYS_MAP[day] === currentDay;
  const isCurrentSlot = (slot: string) => {
    const info = TIME_SLOT_HOURS[slot];
    return info ? currentHour >= info.start && currentHour < info.end : false;
  };

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
              className={`p-3 font-bold text-sm text-center ${
                isCurrentDay(day)
                  ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                  : "bg-muted text-foreground"
              }`}
            >
              {day}
              {isCurrentDay(day) && <span className="block text-[10px] font-normal mt-0.5">اليوم</span>}
            </div>
          ))}
        </div>

        {/* Rows */}
        {TIME_SLOTS.map((slot) => (
          <div key={slot} className="grid grid-cols-7 border-b border-border last:border-b-0">
            <div
              className={`p-3 text-xs font-semibold flex items-center justify-center text-center ${
                isCurrentSlot(slot)
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                  : "text-muted-foreground bg-muted/50"
              }`}
            >
              {slot}
              {isCurrentSlot(slot) && <span className="mr-1 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />}
            </div>
            {DAYS.map((day) => {
              const session = grade.schedule[day]?.[slot];
              const isLiveCell = isCurrentDay(day) && isCurrentSlot(slot);
              return (
                <div
                  key={day}
                  className={`p-2 flex items-center justify-center min-h-[100px] ${
                    isLiveCell
                      ? "bg-emerald-500/10"
                      : isCurrentDay(day)
                      ? "bg-emerald-500/5"
                      : ""
                  }`}
                >
                  {session ? (
                    <ClassCard session={session} day={day} timeSlot={slot} isLive={isLiveCell} />
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
