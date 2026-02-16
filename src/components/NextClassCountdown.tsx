import { useState, useEffect } from "react";
import { GradeSchedule, DAYS, TIME_SLOT_HOURS } from "@/data/scheduleData";
import { Clock, Video } from "lucide-react";

const DAYS_MAP: Record<string, number> = {
  "السبت": 6,
  "الأحد": 0,
  "الاثنين": 1,
  "الثلاثاء": 2,
  "الأربعاء": 3,
  "الخميس": 4,
};

const DAY_NUMBER_TO_NAME: Record<number, string> = Object.fromEntries(
  Object.entries(DAYS_MAP).map(([k, v]) => [v, k])
);

function getEgyptNow() {
  const now = new Date();
  const egyptOffset = 2 * 60;
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utcMs + egyptOffset * 60000);
}

interface NextClass {
  subject: string;
  teacher: string;
  day: string;
  timeSlot: string;
  zoomLink: string;
  diffMs: number;
}

function findNextClass(grade: GradeSchedule): NextClass | null {
  const now = getEgyptNow();
  const currentDayNum = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let best: NextClass | null = null;

  for (const day of DAYS) {
    const dayNum = DAYS_MAP[day];
    const sessions = grade.schedule[day];
    if (!sessions) continue;

    for (const [slot, session] of Object.entries(sessions)) {
      const info = TIME_SLOT_HOURS[slot];
      if (!info) continue;

      const slotStartMinutes = info.start * 60;

      // Calculate days difference
      let daysDiff = dayNum - currentDayNum;
      if (daysDiff < 0) daysDiff += 7;

      // If same day, check if slot is in the future
      if (daysDiff === 0) {
        if (slotStartMinutes <= currentMinutes) {
          // Check if still ongoing
          const slotEndMinutes = info.end * 60;
          if (currentMinutes < slotEndMinutes) {
            // Currently live - show as 0 diff
            const diffMs = 0;
            if (!best || diffMs < best.diffMs) {
              best = { subject: session.subject, teacher: session.teacher, day, timeSlot: slot, zoomLink: session.zoomLink, diffMs };
            }
          }
          continue; // Already passed
        }
      }

      const diffMinutes = daysDiff * 24 * 60 + (slotStartMinutes - currentMinutes);
      const diffMs = diffMinutes * 60000;

      if (!best || diffMs < best.diffMs) {
        best = { subject: session.subject, teacher: session.teacher, day, timeSlot: slot, zoomLink: session.zoomLink, diffMs };
      }
    }
  }

  return best;
}

function formatCountdown(ms: number) {
  if (ms <= 0) return null; // live now
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

interface Props {
  grade: GradeSchedule;
}

const NextClassCountdown = ({ grade }: Props) => {
  const [nextClass, setNextClass] = useState<NextClass | null>(() => findNextClass(grade));

  useEffect(() => {
    const interval = setInterval(() => setNextClass(findNextClass(grade)), 1000);
    return () => clearInterval(interval);
  }, [grade]);

  if (!nextClass) return null;

  const isLive = nextClass.diffMs === 0;
  const countdown = formatCountdown(nextClass.diffMs);

  return (
    <div className={`animate-fade-in rounded-xl border p-4 md:p-5 ${
      isLive
        ? "border-emerald-500/40 bg-emerald-500/10"
        : "border-accent/30 bg-accent/5"
    }`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Info */}
        <div className="flex items-center gap-3 text-center md:text-right">
          {isLive ? (
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">حصة متاحة الآن!</span>
            </div>
          ) : (
            <Clock className="w-5 h-5 text-accent shrink-0" />
          )}
          <div>
            <p className="font-bold text-foreground text-sm md:text-base">
              {isLive ? "الحصة الحالية" : "الحصة القادمة"}: <span className="text-accent">{nextClass.subject}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {nextClass.day} • {nextClass.timeSlot}
              {nextClass.teacher !== "—" && ` • ${nextClass.teacher}`}
            </p>
          </div>
        </div>

        {/* Countdown or Join */}
        <div className="flex items-center gap-3">
          {isLive ? (
            <a
              href={nextClass.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="join-btn flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              دخول الحصة
            </a>
          ) : countdown ? (
            <div className="flex items-center gap-2" dir="ltr">
              {countdown.days > 0 && (
                <CountdownUnit value={countdown.days} label="يوم" />
              )}
              <CountdownUnit value={countdown.hours} label="ساعة" />
              <span className="text-accent font-bold text-lg">:</span>
              <CountdownUnit value={countdown.minutes} label="دقيقة" />
              <span className="text-accent font-bold text-lg">:</span>
              <CountdownUnit value={countdown.seconds} label="ثانية" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center min-w-[48px]">
    <span className="text-xl md:text-2xl font-black text-foreground tabular-nums leading-none">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] text-muted-foreground mt-1">{label}</span>
  </div>
);

export default NextClassCountdown;
