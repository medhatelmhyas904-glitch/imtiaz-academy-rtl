import { useEffect, useState } from "react";
import { ClassSession, TIME_SLOT_HOURS } from "@/data/scheduleData";

interface ClassCardProps {
  session: ClassSession;
  day: string;
  timeSlot: string;
}

const DAYS_MAP: Record<string, number> = {
  "السبت": 6,
  "الأحد": 0,
  "الاثنين": 1,
  "الثلاثاء": 2,
  "الأربعاء": 3,
  "الخميس": 4,
};

function getClassStatus(day: string, timeSlot: string): "live" | "ended" | "upcoming" {
  const now = new Date();
  // Egypt time offset UTC+2
  const egyptOffset = 2 * 60;
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const egyptDate = new Date(utcMs + egyptOffset * 60000);

  const currentDay = egyptDate.getDay();
  const currentHour = egyptDate.getHours();

  const classDay = DAYS_MAP[day];
  const slotInfo = TIME_SLOT_HOURS[timeSlot];

  if (classDay === undefined || !slotInfo) return "upcoming";

  if (currentDay === classDay) {
    if (currentHour >= slotInfo.start && currentHour < slotInfo.end) return "live";
    if (currentHour >= slotInfo.end) return "ended";
  }

  return "upcoming";
}

const ClassCard = ({ session, day, timeSlot }: ClassCardProps) => {
  const [status, setStatus] = useState<"live" | "ended" | "upcoming">("upcoming");

  useEffect(() => {
    setStatus(getClassStatus(day, timeSlot));
    const interval = setInterval(() => setStatus(getClassStatus(day, timeSlot)), 60000);
    return () => clearInterval(interval);
  }, [day, timeSlot]);

  return (
    <div className="card-3d rounded-lg bg-card border border-border p-3 space-y-2 min-w-[160px]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-accent">📘 {session.subject}</span>
        {status === "live" && (
          <span className="live-badge">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(145 70% 45%)" }} />
            متاحة الآن
          </span>
        )}
        {status === "ended" && <span className="ended-badge">انتهت</span>}
      </div>

      <p className="text-sm font-bold text-foreground">👨‍🏫 {session.teacher}</p>

      <a
        href={session.zoomLink}
        target="_blank"
        rel="noopener noreferrer"
        className="join-btn w-full text-center block text-xs"
      >
        دخول الحصة
      </a>
    </div>
  );
};

export default ClassCard;
