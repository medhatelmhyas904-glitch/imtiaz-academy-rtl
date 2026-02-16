import { ClassSession } from "@/data/scheduleData";

interface ClassCardProps {
  session: ClassSession;
  day: string;
  timeSlot: string;
  isLive?: boolean;
}

const ClassCard = ({ session, isLive }: ClassCardProps) => {
  return (
    <div
      className={`card-3d rounded-lg p-3 space-y-2 min-w-[160px] border ${
        isLive
          ? "bg-emerald-500/10 border-emerald-500/40 ring-1 ring-emerald-500/30"
          : "bg-card border-border"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-accent">📘 {session.subject}</span>
        {isLive && (
          <span className="live-badge">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(145 70% 45%)" }} />
            متاحة الآن
          </span>
        )}
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
