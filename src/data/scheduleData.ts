export interface ClassSession {
  teacher: string;
  subject: string;
  zoomLink: string;
}

export interface GradeSchedule {
  id: string;
  name: string;
  schedule: Record<string, Record<string, ClassSession>>;
}

export const DAYS = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"] as const;

export const TIME_SLOTS = [
  "3:00 – 4:00",
  "4:00 – 5:00",
  "5:00 – 6:00",
  "6:00 – 7:00",
  "7:00 – 8:00",
  "8:00 – 9:00",
  "9:00 – 10:00",
] as const;

export const TIME_SLOT_HOURS: Record<string, { start: number; end: number }> = {
  "3:00 – 4:00": { start: 15, end: 16 },
  "4:00 – 5:00": { start: 16, end: 17 },
  "5:00 – 6:00": { start: 17, end: 18 },
  "6:00 – 7:00": { start: 18, end: 19 },
  "7:00 – 8:00": { start: 19, end: 20 },
  "8:00 – 9:00": { start: 20, end: 21 },
  "9:00 – 10:00": { start: 21, end: 22 },
};

export const GRADES: GradeSchedule[] = [
  {
    id: "grade-1-primary",
    name: "الصف الأول الابتدائي",
    schedule: {
      "الأحد": {
        "7:00 – 8:00": {
          teacher: "—",
          subject: "اللغة الإنجليزية (Connect Plus)",
          zoomLink: "https://us05web.zoom.us/j/85149719789?pwd=FyjjJujGcN4YNq4Yd6tUx0basxnsAZ.1",
        },
      },
    },
  },
  {
    id: "grade-2-primary",
    name: "الصف الثاني الابتدائي",
    schedule: {},
  },
  {
    id: "grade-3-primary",
    name: "الصف الثالث الابتدائي",
    schedule: {},
  },
  {
    id: "grade-4-primary",
    name: "الصف الرابع الابتدائي",
    schedule: {
      "السبت": {
        "8:00 – 9:00": {
          teacher: "مس ندى سعد",
          subject: "Science",
          zoomLink: "https://us05web.zoom.us/j/89473108725?pwd=0ZmTJu4np2tAaQ2LXzdaIYa625yEeB.1",
        },
      },
    },
  },
  {
    id: "grade-5-primary",
    name: "الصف الخامس الابتدائي",
    schedule: {
      "السبت": {
        "5:00 – 6:00": {
          teacher: "مس شيماء الفار",
          subject: "Science",
          zoomLink: "https://us05web.zoom.us/j/84894094082?pwd=YGAyx5MObHRwjbZaJUHQQwmdaZs0at.1",
        },
      },
      "الأحد": {
        "7:00 – 8:00": {
          teacher: "مس إيمان إبراهيم",
          subject: "التربية الإسلامية",
          zoomLink: "https://us05web.zoom.us/j/5017683072?pwd=IJUxtzhZN97x6Bprh8JGeDtZmhZ3KJ.1",
        },
      },
    },
  },
  {
    id: "grade-6-primary",
    name: "الصف السادس الابتدائي",
    schedule: {
      "السبت": {
        "8:00 – 9:00": {
          teacher: "ميس ساره",
          subject: "العلوم",
          zoomLink: "https://us04web.zoom.us/j/75131769472?pwd=ylz3pmqDJCfg4r7Paw3Vn6AL8yYrhx.1",
        },
      },
    },
  },
  {
    id: "grade-1-prep",
    name: "الصف الأول الإعدادي",
    schedule: {
      "السبت": {
        "8:00 – 9:00": {
          teacher: "—",
          subject: "تجويد",
          zoomLink: "#",
        },
      },
      "الأحد": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "لغة فرنسية",
          zoomLink: "#",
        },
        "6:00 – 7:00": {
          teacher: "—",
          subject: "ماث",
          zoomLink: "#",
        },
      },
      "الاثنين": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "أصول دين وفقه",
          zoomLink: "#",
        },
      },
      "الثلاثاء": {
        "6:00 – 7:00": {
          teacher: "—",
          subject: "ساينس",
          zoomLink: "#",
        },
        "8:00 – 9:00": {
          teacher: "—",
          subject: "عربي عام",
          zoomLink: "#",
        },
        "9:00 – 10:00": {
          teacher: "—",
          subject: "عربي أزهر",
          zoomLink: "#",
        },
      },
      "الأربعاء": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "دراسات",
          zoomLink: "#",
        },
        "7:00 – 8:00": {
          teacher: "—",
          subject: "تحفيظ وتجويد",
          zoomLink: "#",
        },
      },
      "الخميس": {
        "7:00 – 8:00": {
          teacher: "—",
          subject: "رياضيات",
          zoomLink: "#",
        },
        "8:00 – 9:00": {
          teacher: "—",
          subject: "انجليزي",
          zoomLink: "#",
        },
        "9:00 – 10:00": {
          teacher: "—",
          subject: "علوم",
          zoomLink: "#",
        },
      },
    },
  },
  {
    id: "grade-2-prep",
    name: "الصف الثاني الإعدادي",
    schedule: {
      "السبت": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "علوم",
          zoomLink: "#",
        },
        "6:00 – 7:00": {
          teacher: "—",
          subject: "لغة فرنسية",
          zoomLink: "#",
        },
        "7:00 – 8:00": {
          teacher: "أسماء معوض",
          subject: "اللغة العربية",
          zoomLink: "https://us05web.zoom.us/j/9266697397?pwd=KQx0YWAaQPvZxhqT0CtRLPFmrXhyGu.1&omn=83147814426",
        },
      },
      "الأحد": {
        "7:00 – 8:00": {
          teacher: "—",
          subject: "عربي أزهر",
          zoomLink: "#",
        },
        "9:00 – 10:00": {
          teacher: "—",
          subject: "عربي عام",
          zoomLink: "#",
        },
      },
      "الاثنين": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "دراسات",
          zoomLink: "#",
        },
        "6:00 – 7:00": {
          teacher: "—",
          subject: "أصول دين وفقه",
          zoomLink: "#",
        },
        "8:00 – 9:00": {
          teacher: "—",
          subject: "تجويد",
          zoomLink: "#",
        },
      },
      "الثلاثاء": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "ساينس",
          zoomLink: "#",
        },
        "6:00 – 7:00": {
          teacher: "—",
          subject: "رياضيات",
          zoomLink: "#",
        },
      },
      "الخميس": {
        "6:00 – 7:00": {
          teacher: "—",
          subject: "ماث",
          zoomLink: "#",
        },
        "9:00 – 10:00": {
          teacher: "—",
          subject: "لغة انجليزية",
          zoomLink: "#",
        },
      },
    },
  },
  {
    id: "grade-3-prep",
    name: "الصف الثالث الإعدادي",
    schedule: {
      "السبت": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "ساينس",
          zoomLink: "#",
        },
        "8:00 – 9:00": {
          teacher: "مسيو علي المهياص",
          subject: "اللغة الفرنسية",
          zoomLink: "https://us04web.zoom.us/j/4599005902?pwd=VTVxcWcvQ3gvQlgvSEljbEF3dk5Ydz09",
        },
      },
      "الأحد": {
        "7:00 – 8:00": {
          teacher: "—",
          subject: "لغة انجليزية",
          zoomLink: "#",
        },
        "9:00 – 10:00": {
          teacher: "—",
          subject: "عربي أزهر",
          zoomLink: "#",
        },
      },
      "الاثنين": {
        "6:00 – 7:00": {
          teacher: "—",
          subject: "فقه وأصول دين",
          zoomLink: "#",
        },
        "7:00 – 8:00": {
          teacher: "—",
          subject: "عربي عام",
          zoomLink: "#",
        },
      },
      "الثلاثاء": {
        "5:00 – 6:00": {
          teacher: "—",
          subject: "دراسات",
          zoomLink: "#",
        },
      },
      "الأربعاء": {
        "6:00 – 7:00": {
          teacher: "—",
          subject: "ماث",
          zoomLink: "#",
        },
        "7:00 – 8:00": {
          teacher: "—",
          subject: "رياضيات",
          zoomLink: "#",
        },
      },
      "الخميس": {
        "8:00 – 9:00": {
          teacher: "—",
          subject: "علوم",
          zoomLink: "#",
        },
        "9:00 – 10:00": {
          teacher: "—",
          subject: "علوم",
          zoomLink: "#",
        },
      },
    },
  },
  {
    id: "grade-1-secondary",
    name: "الصف الأول الثانوي",
    schedule: {},
  },
  {
    id: "grade-2-secondary",
    name: "الصف الثاني الثانوي",
    schedule: {
      "السبت": {
        "8:00 – 9:00": {
          teacher: "أحمد ربيع (معلم خبير رياضيات)",
          subject: "الرياضيات",
          zoomLink: "https://us05web.zoom.us/j/82624753888?pwd=cfbkxrOPxXdarIpt9Y3LjaaqIdiCRS.1",
        },
      },
    },
  },
  {
    id: "grade-3-secondary",
    name: "الصف الثالث الثانوي",
    schedule: {
      "السبت": {
        "7:00 – 8:00": {
          teacher: "ساره عبداللطيف",
          subject: "الأحياء",
          zoomLink: "https://us05web.zoom.us/j/81241998886?pwd=2xs1PFfucINqK0Qtalwt6IYNLUnuyB.1",
        },
      },
    },
  },
];
