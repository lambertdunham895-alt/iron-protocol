import { useState, useEffect, useMemo } from "react";

// ─── ICON SYSTEM ────────────────────────────────────────────────────────────
// Clean, minimal stroke-based SVG icons for a sleek high-performance feel.

const Icon = ({ name, size = 18, color = "currentColor", stroke = 1.75, style = {} }) => {
  const s = { width: size, height: size, display: "inline-block", flexShrink: 0, verticalAlign: "middle", ...style };
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", style: s };
  switch (name) {
    case "home": return <svg {...props}><path d="M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></svg>;
    case "check": return <svg {...props}><path d="M5 12l5 5 9-11"/></svg>;
    case "checkCircle": return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>;
    case "dumbbell": return <svg {...props}><path d="M6 5v14M3 8v8M18 5v14M21 8v8M6 12h12"/></svg>;
    case "utensils": return <svg {...props}><path d="M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M6 12v9M18 3a4 4 0 0 0-4 4v5h4v9"/></svg>;
    case "calendar": return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case "chart": return <svg {...props}><path d="M3 3v18h18M7 14l4-4 4 4 5-6"/></svg>;
    case "refresh": return <svg {...props}><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></svg>;
    case "bolt": return <svg {...props}><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>;
    case "sun": return <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
    case "moon": return <svg {...props}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>;
    case "clipboard": return <svg {...props}><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/></svg>;
    case "bed": return <svg {...props}><path d="M2 20v-7h20v7M2 13V6M22 13V9a2 2 0 0 0-2-2H12v6M6 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>;
    case "coffee": return <svg {...props}><path d="M17 8h1a3 3 0 0 1 0 6h-1M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v3M10 2v3M14 2v3"/></svg>;
    case "flame": return <svg {...props}><path d="M12 2s4 5 4 9a4 4 0 0 1-8 0c0-1.5.5-2.5 1-3 0 1.5 1 2 1 2s-.5-3 2-8z"/></svg>;
    case "beef": return <svg {...props}><path d="M4 12a5 5 0 0 1 10 0v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/><circle cx="9" cy="12" r="1.5"/></svg>;
    case "droplet": return <svg {...props}><path d="M12 2s7 7.5 7 13a7 7 0 0 1-14 0c0-5.5 7-13 7-13z"/></svg>;
    case "ban": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>;
    case "shirt": return <svg {...props}><path d="M16 3l-4 3-4-3-5 2 2 5 3-1v11h8V9l3 1 2-5z"/></svg>;
    case "walk": return <svg {...props}><circle cx="13" cy="4" r="2"/><path d="M9 20l2-6 2 2v4M11 14L9 9l3-2 3 3 2 2"/></svg>;
    case "shield": return <svg {...props}><path d="M12 2l8 3v7c0 5-3.5 9-8 10-4.5-1-8-5-8-10V5z"/></svg>;
    case "target": return <svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={color}/></svg>;
    case "plus": return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus": return <svg {...props}><path d="M5 12h14"/></svg>;
    case "cart": return <svg {...props}><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M3 3h3l2.7 13.3a1 1 0 0 0 1 .7h8.6a1 1 0 0 0 1-.7L22 7H6"/></svg>;
    case "basket": return <svg {...props}><path d="M3 9h18l-2 11H5zM8 9l4-7 4 7"/></svg>;
    case "box": return <svg {...props}><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>;
    case "broom": return <svg {...props}><path d="M14 4l6 6M8 10l6 6-4 4a3 3 0 0 1-4-4zM14 10l-4 4M3 21l3-3"/></svg>;
    case "hammer": return <svg {...props}><path d="M14 4l6 6-3 3-6-6zM11 7L3 15l3 3 8-8M13 13l4 4"/></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

// ─── CONSTANTS & DATA ───────────────────────────────────────────────────────

const QUOTES = [
  "Stay dangerous.",
  "Structure creates freedom.",
  "Tired men still win.",
  "Consistency beats emotion.",
  "Protect the mission.",
  "Discipline is the bridge between goals and accomplishment.",
  "The grind doesn't care about your feelings.",
  "Hard work beats talent when talent doesn't work hard.",
  "You don't rise to the level of your goals. You fall to the level of your systems.",
  "Every rep counts. Every meal matters. Every minute is a choice.",
  "Be the man who shows up — every single day.",
  "Comfort is the enemy of progress.",
  "Own the morning. Own the day.",
  "No one's coming to save you. That's the good news.",
  "Build the body. Sharpen the mind. Forge the discipline.",
];

const SCHEDULE = [
  { time: "2:15 AM", label: "Wake Up", icon: "bolt", category: "routine" },
  { time: "2:30 AM", label: "Pre-Work Snack", icon: "coffee", category: "meal" },
  { time: "3:00 AM", label: "Work Starts", icon: "hammer", category: "work" },
  { time: "7:00 AM", label: "Meal 1", icon: "utensils", category: "meal" },
  { time: "11:00 AM", label: "Meal 2", icon: "beef", category: "meal" },
  { time: "3:00 PM", label: "Work Ends", icon: "check", category: "work" },
  { time: "4:00 PM", label: "Dinner", icon: "utensils", category: "meal" },
  { time: "4:30 PM", label: "Workout / Walk", icon: "dumbbell", category: "fitness" },
  { time: "6:00 PM", label: "Optional Snack", icon: "coffee", category: "meal" },
  { time: "6:15 PM", label: "Prep Tomorrow", icon: "clipboard", category: "routine" },
  { time: "6:45 PM", label: "Wind Down", icon: "moon", category: "routine" },
  { time: "7:00 PM", label: "Sleep Target", icon: "bed", category: "sleep" },
];

const HABITS = [
  { id: "wake", label: "Wake on time", icon: "sun" },
  { id: "workout", label: "Workout", icon: "dumbbell" },
  { id: "walk", label: "Walk 20 mins", icon: "walk" },
  { id: "protein", label: "Protein goal", icon: "beef" },
  { id: "water", label: "Water intake", icon: "droplet" },
  { id: "nojunk", label: "No junk food", icon: "ban" },
  { id: "prep", label: "Prep clothes/lunch", icon: "shirt" },
  { id: "bed", label: "In bed on time", icon: "bed" },
];

const WORKOUTS = {
  A: {
    name: "Workout A — Push Power",
    day: "Monday",
    exercises: [
      { name: "DB Floor Press", sets: 4, reps: "10-12" },
      { name: "DB Overhead Press", sets: 3, reps: "10" },
      { name: "DB Lateral Raises", sets: 3, reps: "12-15" },
      { name: "DB Skull Crushers", sets: 3, reps: "12" },
      { name: "Push-Ups (Burnout)", sets: 2, reps: "Max" },
    ],
  },
  B: {
    name: "Workout B — Pull Strength",
    day: "Wednesday",
    exercises: [
      { name: "DB Bent-Over Row", sets: 4, reps: "10-12" },
      { name: "DB Reverse Fly", sets: 3, reps: "12-15" },
      { name: "DB Bicep Curl", sets: 3, reps: "12" },
      { name: "DB Hammer Curl", sets: 3, reps: "10" },
      { name: "DB Shrugs", sets: 3, reps: "15" },
    ],
  },
  C: {
    name: "Workout C — Legs & Core",
    day: "Friday",
    exercises: [
      { name: "DB Goblet Squat", sets: 4, reps: "12-15" },
      { name: "DB Romanian Deadlift", sets: 4, reps: "10-12" },
      { name: "DB Lunges (each leg)", sets: 3, reps: "10" },
      { name: "DB Calf Raises", sets: 3, reps: "20" },
      { name: "Plank Hold", sets: 3, reps: "45 sec" },
    ],
  },
  walk: {
    name: "Active Recovery",
    day: "Tuesday / Thursday",
    exercises: [
      { name: "Brisk Walk", sets: 1, reps: "20-30 min" },
      { name: "Hip Circles", sets: 2, reps: "10 each" },
      { name: "Cat-Cow Stretch", sets: 2, reps: "10" },
      { name: "Shoulder Pass-Through", sets: 2, reps: "10" },
      { name: "Deep Squat Hold", sets: 3, reps: "30 sec" },
    ],
  },
};

const MEALS = [
  { time: "2:30 AM", label: "Pre-Work Snack", suggestions: ["2 hard-boiled eggs + banana", "Greek yogurt + granola", "Protein shake + oats", "PB toast + apple slices"] },
  { time: "7:00 AM", label: "Meal 1", suggestions: ["Chicken breast + rice + veggies", "Turkey wrap + side salad", "Tuna + crackers + fruit", "Beef jerky + trail mix + cheese stick"] },
  { time: "11:00 AM", label: "Meal 2", suggestions: ["Steak tips + sweet potato", "Ground turkey bowl + beans", "Salmon + brown rice", "Pulled pork + coleslaw"] },
  { time: "4:00 PM", label: "Dinner", suggestions: ["Grilled chicken thighs + roasted potatoes", "Beef stir fry + rice", "Baked salmon + asparagus", "Pork chops + mashed potatoes + greens"] },
  { time: "6:00 PM", label: "Optional Snack", suggestions: ["Cottage cheese + berries", "Casein shake", "Almonds + dark chocolate", "Cheese + crackers"] },
];

const SUNDAY_RESET = [
  { id: "grocery", label: "Grocery shopping", icon: "cart" },
  { id: "laundry", label: "Laundry", icon: "basket" },
  { id: "mealprep", label: "Meal prep", icon: "box" },
  { id: "goals", label: "Review goals", icon: "target" },
  { id: "workouts", label: "Plan workouts", icon: "clipboard" },
  { id: "clean", label: "Clean house", icon: "broom" },
  { id: "clothes", label: "Set clothes for Monday", icon: "shirt" },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// ─── HELPERS ────────────────────────────────────────────────────────────────

const getDateKey = (d = new Date()) => d.toISOString().split("T")[0];
const getDayName = (d = new Date()) => ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()];

const getWeekDates = () => {
  const now = new Date();
  const day = now.getDay();
  const start = new Date(now);
  start.setDate(now.getDate() - day);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
};

const timeToMinutes = (timeStr) => {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let h = parseInt(match[1]);
  const m = parseInt(match[2]);
  const ampm = match[3].toUpperCase();
  if (ampm === "PM" && h !== 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;
  return h * 60 + m;
};

const getCurrentMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

const formatCountdown = (mins) => {
  if (mins < 0) return "Done";
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
};

const loadData = (key, fallback) => {
  try {
    const stored = localStorage.getItem(`iron_${key}`);
    return stored ? JSON.parse(stored) : fallback;
  } catch { return fallback; }
};

const saveData = (key, value) => {
  try { localStorage.setItem(`iron_${key}`, JSON.stringify(value)); } catch {}
};

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

const ProgressRing = ({ pct, size = 60, stroke = 5, color = "#dc2626" }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s ease" }} />
    </svg>
  );
};

const StreakFire = ({ count }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#f97316", fontWeight: 700, fontSize: 13 }}>
    <Icon name="flame" size={14} color="#f97316" />
    {count}
  </span>
);

const IconTile = ({ name, color = "rgba(255,255,255,0.7)", bg = "rgba(255,255,255,0.05)", size = 32 }) => (
  <div style={{
    width: size, height: size, borderRadius: 8,
    background: bg,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
    border: "1px solid rgba(255,255,255,0.04)",
  }}>
    <Icon name={name} size={Math.round(size * 0.5)} color={color} />
  </div>
);

// ─── TAB: HOME ──────────────────────────────────────────────────────────────

function HomeTab({ habits, todayKey }) {
  const [now, setNow] = useState(getCurrentMinutes());
  useEffect(() => {
    const t = setInterval(() => setNow(getCurrentMinutes()), 30000);
    return () => clearInterval(t);
  }, []);

  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], [todayKey]);
  const dayName = getDayName();
  const todayHabits = habits[todayKey] || {};
  const habitsDone = HABITS.filter(h => todayHabits[h.id]).length;
  const habitPct = Math.round((habitsDone / HABITS.length) * 100);

  const nextIdx = SCHEDULE.findIndex(s => timeToMinutes(s.time) > now);
  const nextItem = nextIdx >= 0 ? SCHEDULE[nextIdx] : null;
  const countdown = nextItem ? timeToMinutes(nextItem.time) - now : 0;

  const currentIdx = nextIdx > 0 ? nextIdx - 1 : SCHEDULE.length - 1;
  const dayProgress = Math.min(100, Math.round(((now - timeToMinutes(SCHEDULE[0].time)) / (timeToMinutes(SCHEDULE[SCHEDULE.length - 1].time) - timeToMinutes(SCHEDULE[0].time))) * 100));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={styles.quoteBanner}>
        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>Daily Protocol</div>
        <div style={{ fontSize: 18, fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1.4 }}>"{quote}"</div>
      </div>

      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{dayName}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ProgressRing pct={habitPct} size={64} stroke={5} />
            <span style={{ position: "absolute", fontSize: 14, fontWeight: 800, color: "#fff" }}>{habitPct}%</span>
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
            <span>Day Progress</span>
            <span>{Math.max(0, dayProgress)}%</span>
          </div>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: `${Math.max(0, dayProgress)}%` }} />
          </div>
        </div>

        {nextItem && (
          <div style={styles.nextUp}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#dc2626", marginBottom: 6 }}>Next Up</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 700, color: "#fff" }}>
                <Icon name={nextItem.icon} size={18} color="#dc2626" />
                {nextItem.label}
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#dc2626", fontVariantNumeric: "tabular-nums" }}>in {formatCountdown(countdown)}</span>
            </div>
          </div>
        )}
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Today's Protocol</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {SCHEDULE.map((item, i) => {
            const itemMin = timeToMinutes(item.time);
            const isPast = itemMin <= now;
            const isCurrent = i === currentIdx;
            return (
              <div key={i} style={{ display: "flex", alignItems: "stretch", gap: 12, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%", flexShrink: 0,
                    background: isCurrent ? "#dc2626" : isPast ? "#4ade80" : "rgba(255,255,255,0.15)",
                    boxShadow: isCurrent ? "0 0 10px rgba(220,38,38,0.6)" : "none",
                  }} />
                  {i < SCHEDULE.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: isPast ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.07)" }} />
                  )}
                </div>
                <div style={{ flex: 1, paddingBottom: 16, opacity: isPast && !isCurrent ? 0.4 : 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: isCurrent ? 700 : 500, color: isCurrent ? "#fff" : "rgba(255,255,255,0.7)" }}>
                      <Icon name={item.icon} size={15} color={isCurrent ? "#dc2626" : "rgba(255,255,255,0.45)"} />
                      {item.label}
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontVariantNumeric: "tabular-nums" }}>{item.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── TAB: HABITS ────────────────────────────────────────────────────────────

function HabitsTab({ habits, setHabits, todayKey, streaks }) {
  const todayHabits = habits[todayKey] || {};
  const done = HABITS.filter(h => todayHabits[h.id]).length;
  const pct = Math.round((done / HABITS.length) * 100);
  const weekDates = getWeekDates();

  const toggle = (id) => {
    setHabits(prev => {
      const updated = { ...prev, [todayKey]: { ...(prev[todayKey] || {}), [id]: !(prev[todayKey] || {})[id] } };
      saveData("habits", updated);
      return updated;
    });
  };

  const weekScore = weekDates.reduce((acc, d) => {
    const key = getDateKey(d);
    const dayHabits = habits[key] || {};
    return acc + HABITS.filter(h => dayHabits[h.id]).length;
  }, 0);
  const maxWeekScore = 7 * HABITS.length;
  const weekPct = Math.round((weekScore / maxWeekScore) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ ...styles.card, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ProgressRing pct={pct} size={80} stroke={6} />
            <span style={{ position: "absolute", fontSize: 20, fontWeight: 800, color: "#fff" }}>{done}/{HABITS.length}</span>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 8, textTransform: "uppercase", letterSpacing: 1 }}>Today</div>
        </div>
        <div style={{ ...styles.card, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: 16 }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ProgressRing pct={weekPct} size={80} stroke={6} color="#3b82f6" />
            <span style={{ position: "absolute", fontSize: 20, fontWeight: 800, color: "#fff" }}>{weekPct}%</span>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 8, textTransform: "uppercase", letterSpacing: 1 }}>Week Score</div>
        </div>
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>This Week</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, textAlign: "center" }}>
          {weekDates.map((d, i) => {
            const key = getDateKey(d);
            const dayHabits = habits[key] || {};
            const dayDone = HABITS.filter(h => dayHabits[h.id]).length;
            const dayPct = Math.round((dayDone / HABITS.length) * 100);
            const isToday = key === todayKey;
            return (
              <div key={i} style={{
                padding: "8px 0", borderRadius: 8,
                background: isToday ? "rgba(220,38,38,0.15)" : "transparent",
                border: isToday ? "1px solid rgba(220,38,38,0.3)" : "1px solid transparent",
              }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>{DAYS[i]}</div>
                <div style={{ display: "flex", justifyContent: "center", height: 18, alignItems: "center" }}>
                  {dayPct === 100 ? (
                    <Icon name="check" size={16} color="#4ade80" stroke={2.5} />
                  ) : dayPct > 0 ? (
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#f59e0b" }}>{dayDone}</span>
                  ) : (
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.15)" }}>·</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Daily Habits</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {HABITS.map(h => {
            const checked = !!todayHabits[h.id];
            const streak = streaks[h.id] || 0;
            return (
              <button key={h.id} onClick={() => toggle(h.id)} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 12px", borderRadius: 10,
                background: checked ? "rgba(74,222,128,0.08)" : "rgba(255,255,255,0.03)",
                border: checked ? "1px solid rgba(74,222,128,0.2)" : "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer", width: "100%", textAlign: "left",
                transition: "all 0.2s",
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center",
                  background: checked ? "#4ade80" : "rgba(255,255,255,0.08)",
                  flexShrink: 0, transition: "all 0.2s",
                }}>
                  {checked && <Icon name="check" size={16} color="#000" stroke={3} />}
                </div>
                <IconTile name={h.icon} color={checked ? "#4ade80" : "rgba(255,255,255,0.55)"} bg={checked ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.04)"} size={32} />
                <span style={{ fontSize: 14, fontWeight: 500, color: checked ? "#fff" : "rgba(255,255,255,0.7)", flex: 1 }}>
                  {h.label}
                </span>
                {streak > 1 && <StreakFire count={streak} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── TAB: FITNESS ───────────────────────────────────────────────────────────

function FitnessTab({ workoutLog, setWorkoutLog, todayKey, bodyWeight, setBodyWeight }) {
  const dayName = getDayName();
  const workoutKey = dayName === "Monday" ? "A" : dayName === "Wednesday" ? "B" : dayName === "Friday" ? "C" : ["Tuesday","Thursday"].includes(dayName) ? "walk" : null;
  const todayWorkout = workoutKey ? WORKOUTS[workoutKey] : null;
  const todayLog = workoutLog[todayKey] || {};

  const toggleSet = (exIdx, setIdx) => {
    setWorkoutLog(prev => {
      const dayLog = { ...(prev[todayKey] || {}) };
      const exKey = `ex${exIdx}`;
      const sets = [...(dayLog[exKey] || [])];
      sets[setIdx] = !sets[setIdx];
      dayLog[exKey] = sets;
      const updated = { ...prev, [todayKey]: dayLog };
      saveData("workoutLog", updated);
      return updated;
    });
  };

  const logWeight = () => {
    const w = prompt("Enter today's weight (lbs):");
    if (w && !isNaN(w)) {
      setBodyWeight(prev => {
        const updated = { ...prev, [todayKey]: parseFloat(w) };
        saveData("bodyWeight", updated);
        return updated;
      });
    }
  };

  const recentWeights = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const k = getDateKey(d);
    return { date: DAYS[d.getDay()], weight: bodyWeight[k] || null };
  });
  const validWeights = recentWeights.filter(w => w.weight);
  const maxW = validWeights.length ? Math.max(...validWeights.map(w => w.weight)) : 200;
  const minW = validWeights.length ? Math.min(...validWeights.map(w => w.weight)) : 150;
  const wRange = Math.max(maxW - minW, 5);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)" }}>
              {todayWorkout ? todayWorkout.name : "Rest Day"}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>25 lb Dumbbells Only</div>
          </div>
          <IconTile name="dumbbell" color="#dc2626" bg="rgba(220,38,38,0.1)" size={40} />
        </div>

        {todayWorkout ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {todayWorkout.exercises.map((ex, exIdx) => {
              const exSets = todayLog[`ex${exIdx}`] || [];
              const allDone = Array.from({ length: ex.sets }).every((_, i) => exSets[i]);
              return (
                <div key={exIdx} style={{
                  padding: "12px 14px", borderRadius: 10,
                  background: allDone ? "rgba(74,222,128,0.06)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${allDone ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.06)"}`,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: allDone ? "#4ade80" : "#fff" }}>{ex.name}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{ex.sets}×{ex.reps}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {Array.from({ length: ex.sets }).map((_, setIdx) => (
                      <button key={setIdx} onClick={() => toggleSet(exIdx, setIdx)} style={{
                        width: 32, height: 32, borderRadius: 6, border: "none", cursor: "pointer",
                        background: exSets[setIdx] ? "#dc2626" : "rgba(255,255,255,0.08)",
                        color: exSets[setIdx] ? "#fff" : "rgba(255,255,255,0.3)",
                        fontSize: 12, fontWeight: 700,
                        transition: "all 0.15s",
                      }}>
                        {setIdx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: 32, color: "rgba(255,255,255,0.3)" }}>
            {dayName === "Saturday" || dayName === "Sunday" ? "Rest & recover. You've earned it." : "Active recovery day. Walk + mobility."}
          </div>
        )}
      </div>

      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)" }}>Weight Tracker</div>
          <button onClick={logWeight} style={{ ...styles.smallBtn, display: "inline-flex", alignItems: "center", gap: 4 }}>
            <Icon name="plus" size={12} stroke={2.5} /> Log
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80, marginBottom: 8 }}>
          {recentWeights.map((w, i) => {
            const h = w.weight ? Math.max(10, ((w.weight - minW) / wRange) * 60 + 10) : 4;
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontVariantNumeric: "tabular-nums" }}>
                  {w.weight || "—"}
                </span>
                <div style={{
                  width: "100%", maxWidth: 28, height: h, borderRadius: 4,
                  background: w.weight ? (i === 6 ? "#dc2626" : "rgba(59,130,246,0.5)") : "rgba(255,255,255,0.05)",
                }} />
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>{w.date}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Weekly Split</div>
        {Object.entries(WORKOUTS).map(([key, w]) => (
          <div key={key} style={{
            display: "flex", justifyContent: "space-between", padding: "8px 0",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            opacity: w.day.includes(dayName) ? 1 : 0.4,
          }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{w.day}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: w.day.includes(dayName) ? "#dc2626" : "rgba(255,255,255,0.5)" }}>{w.name.split("—")[1] || w.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TAB: MEALS ─────────────────────────────────────────────────────────────

function MealsTab() {
  const now = getCurrentMinutes();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={styles.card}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <IconTile name="target" color="#dc2626" bg="rgba(220,38,38,0.1)" size={40} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)" }}>Protein Target</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>150–200g daily across all meals</div>
          </div>
        </div>
      </div>

      {MEALS.map((meal, i) => {
        const mealMin = timeToMinutes(meal.time);
        const isPast = mealMin < now;
        const isNext = !isPast && (i === 0 || timeToMinutes(MEALS[i-1].time) < now);
        return (
          <div key={i} style={{
            ...styles.card,
            border: isNext ? "1px solid rgba(220,38,38,0.3)" : "1px solid rgba(255,255,255,0.06)",
            opacity: isPast ? 0.4 : 1,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name="utensils" size={16} color={isNext ? "#dc2626" : "rgba(255,255,255,0.5)"} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: isNext ? "#dc2626" : "#fff" }}>{meal.label}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{meal.time}</div>
                </div>
              </div>
              {isNext && (
                <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(220,38,38,0.15)", color: "#dc2626", fontWeight: 600 }}>
                  Next Meal
                </span>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {meal.suggestions.map((s, j) => (
                <div key={j} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", paddingLeft: 12, borderLeft: "2px solid rgba(255,255,255,0.06)" }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── TAB: SCHEDULE ──────────────────────────────────────────────────────────

function ScheduleTab({ overtime, setOvertime }) {
  const adjustMin = overtime * 60;

  const adjustedSchedule = SCHEDULE.map(item => {
    const min = timeToMinutes(item.time);
    if (item.category === "work" && item.label === "Work Ends") {
      const newMin = min + adjustMin;
      const h = Math.floor(newMin / 60);
      const m = newMin % 60;
      const ampm = h >= 12 ? "PM" : "AM";
      const hh = h > 12 ? h - 12 : h === 0 ? 12 : h;
      return { ...item, time: `${hh}:${String(m).padStart(2,"0")} ${ampm}` };
    }
    if (min > timeToMinutes("3:00 PM") && item.category !== "work") {
      const newMin = min + adjustMin;
      const h = Math.floor(newMin / 60);
      const m = newMin % 60;
      const ampm = h >= 12 ? "PM" : "AM";
      const hh = h > 12 ? h - 12 : h === 0 ? 12 : h;
      return { ...item, time: `${hh}:${String(m).padStart(2,"0")} ${ampm}` };
    }
    return item;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Overtime Adjuster</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
          <button onClick={() => setOvertime(Math.max(0, overtime - 0.5))} style={{ ...styles.smallBtn, width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
            <Icon name="minus" size={14} stroke={2.5} />
          </button>
          <span style={{ fontSize: 20, fontWeight: 800, color: overtime > 0 ? "#f59e0b" : "#fff", minWidth: 60, textAlign: "center" }}>
            {overtime > 0 ? `+${overtime}h` : "None"}
          </span>
          <button onClick={() => setOvertime(Math.min(4, overtime + 0.5))} style={{ ...styles.smallBtn, width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
            <Icon name="plus" size={14} stroke={2.5} />
          </button>
        </div>
        {overtime > 0 && (
          <div style={{ textAlign: "center", fontSize: 12, color: "#f59e0b", marginTop: 8 }}>
            Schedule shifted by {overtime} hour{overtime !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Full Day Schedule</div>
        {adjustedSchedule.map((item, i) => {
          const catColors = { routine: "#8b5cf6", meal: "#f59e0b", work: "#3b82f6", fitness: "#dc2626", sleep: "#6366f1" };
          const color = catColors[item.category] || "#666";
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < adjustedSchedule.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <div style={{ width: 4, height: 28, borderRadius: 2, background: color }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", width: 70, fontVariantNumeric: "tabular-nums" }}>{item.time}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                <Icon name={item.icon} size={14} color={color} />
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div style={{ ...styles.card, border: "1px solid rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.05)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#818cf8", marginBottom: 12 }}>
          <Icon name="shield" size={16} color="#818cf8" />
          Sleep Protection Mode
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { time: "6:15 PM", label: "Prep tomorrow — clothes, lunch, bag", icon: "clipboard" },
            { time: "6:45 PM", label: "Lights down — phone off — wind down", icon: "moon" },
            { time: "7:00 PM", label: "Sleep target — lights out", icon: "bed" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#818cf8", fontWeight: 600, width: 65, fontVariantNumeric: "tabular-nums" }}>{item.time}</span>
              <Icon name={item.icon} size={14} color="rgba(129,140,248,0.7)" />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TAB: PROGRESS ──────────────────────────────────────────────────────────

function ProgressTab({ habits, workoutLog, bodyWeight, streaks }) {
  const last30 = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    return getDateKey(d);
  });

  const workoutsCompleted = last30.filter(k => {
    const log = workoutLog[k];
    return log && Object.keys(log).length > 0;
  }).length;

  const habitScores = last30.map(k => {
    const dayH = habits[k] || {};
    return HABITS.filter(h => dayH[h.id]).length;
  });
  const avgHabitScore = Math.round(habitScores.reduce((a,b) => a+b, 0) / 30 * 10) / 10;
  const totalHabitPct = Math.round((avgHabitScore / HABITS.length) * 100);

  const validWeights = last30.filter(k => bodyWeight[k]).map(k => bodyWeight[k]);
  const avgWeight = validWeights.length ? Math.round(validWeights.reduce((a,b) => a+b,0) / validWeights.length * 10) / 10 : "—";

  const maxStreak = Math.max(0, ...Object.values(streaks));

  const last28 = Array.from({ length: 28 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (27 - i));
    return { date: d, key: getDateKey(d) };
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          { label: "Workouts", value: workoutsCompleted, sub: "last 30 days", color: "#dc2626", icon: "dumbbell" },
          { label: "Avg Weight", value: avgWeight, sub: "lbs", color: "#3b82f6", icon: "chart" },
          { label: "Habit Score", value: `${totalHabitPct}%`, sub: "avg completion", color: "#4ade80", icon: "check" },
          { label: "Best Streak", value: maxStreak, sub: "days", color: "#f59e0b", icon: "flame" },
        ].map((s, i) => (
          <div key={i} style={{ ...styles.card, padding: 16 }}>
            <div style={{ marginBottom: 8 }}>
              <Icon name={s.icon} size={16} color={s.color} />
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: s.color, fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 1, marginTop: 6 }}>{s.label}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Weekly Discipline Score</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 100 }}>
          {Array.from({ length: 7 }).map((_, i) => {
            const d = new Date();
            const dayOfWeek = d.getDay();
            const offset = dayOfWeek - i;
            const dd = new Date(d);
            dd.setDate(d.getDate() - offset);
            const key = getDateKey(dd);
            const dayH = habits[key] || {};
            const score = HABITS.filter(h => dayH[h.id]).length;
            const pct = (score / HABITS.length) * 100;
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{Math.round(pct)}%</span>
                <div style={{
                  width: "100%", maxWidth: 32, height: Math.max(4, pct * 0.8), borderRadius: 4,
                  background: pct === 100 ? "#4ade80" : pct >= 50 ? "#f59e0b" : pct > 0 ? "#dc2626" : "rgba(255,255,255,0.05)",
                  transition: "height 0.3s",
                }} />
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>{DAYS[i]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>28-Day Streak Calendar</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
          {last28.map(({ date, key }, i) => {
            const dayH = habits[key] || {};
            const score = HABITS.filter(h => dayH[h.id]).length;
            const pct = score / HABITS.length;
            const bg = pct === 1 ? "#4ade80" : pct >= 0.75 ? "#22c55e" : pct >= 0.5 ? "#f59e0b" : pct > 0 ? "#dc2626" : "rgba(255,255,255,0.04)";
            return (
              <div key={i} style={{
                aspectRatio: "1", borderRadius: 4, background: bg,
                opacity: pct > 0 ? (0.3 + pct * 0.7) : 0.3,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, color: pct > 0 ? "#000" : "rgba(255,255,255,0.15)", fontWeight: 700,
              }}>
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── TAB: RESET ─────────────────────────────────────────────────────────────

function ResetTab({ sundayChecklist, setSundayChecklist, setOvertime }) {
  const toggle = (id) => {
    setSundayChecklist(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      saveData("sundayChecklist", updated);
      return updated;
    });
  };

  const done = SUNDAY_RESET.filter(s => sundayChecklist[s.id]).length;
  const pct = Math.round((done / SUNDAY_RESET.length) * 100);

  const resetTomorrow = () => {
    if (confirm("Reset tomorrow's schedule to default? This clears overtime and pre-checks.")) {
      setOvertime(0);
      alert("Tomorrow reset. Clean slate.");
    }
  };

  const missedDayRecovery = () => {
    alert("Missed Day Recovery activated.\n\nNo guilt. Just get back on track:\n• Complete today's habits\n• Do a 20-min walk minimum\n• Hit protein goal\n• Be in bed on time\n\nOne good day erases a bad one.");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)" }}>Sunday Reset</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>Weekly system reboot</div>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ProgressRing pct={pct} size={50} stroke={4} color="#8b5cf6" />
            <span style={{ position: "absolute", fontSize: 12, fontWeight: 800, color: "#fff" }}>{done}/{SUNDAY_RESET.length}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {SUNDAY_RESET.map(item => {
            const checked = !!sundayChecklist[item.id];
            return (
              <button key={item.id} onClick={() => toggle(item.id)} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 12px", borderRadius: 10,
                background: checked ? "rgba(139,92,246,0.08)" : "rgba(255,255,255,0.03)",
                border: checked ? "1px solid rgba(139,92,246,0.2)" : "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer", width: "100%", textAlign: "left",
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center",
                  background: checked ? "#8b5cf6" : "rgba(255,255,255,0.08)",
                  flexShrink: 0,
                }}>
                  {checked && <Icon name="check" size={16} color="#fff" stroke={3} />}
                </div>
                <IconTile name={item.icon} color={checked ? "#a78bfa" : "rgba(255,255,255,0.55)"} bg={checked ? "rgba(139,92,246,0.1)" : "rgba(255,255,255,0.04)"} size={32} />
                <span style={{ fontSize: 14, fontWeight: 500, color: checked ? "#fff" : "rgba(255,255,255,0.7)" }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={styles.card}>
        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Quick Actions</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button onClick={resetTomorrow} style={{ ...styles.actionBtn, display: "flex", alignItems: "center", gap: 12 }}>
            <Icon name="refresh" size={18} color="#dc2626" />
            <span>One-Tap Reset Tomorrow</span>
          </button>
          <button onClick={missedDayRecovery} style={{ ...styles.actionBtn, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", display: "flex", alignItems: "center", gap: 12 }}>
            <Icon name="bolt" size={18} color="#f59e0b" />
            <span>Missed Day Recovery Mode</span>
          </button>
        </div>
      </div>

      <div style={{ ...styles.card, background: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.15)", textAlign: "center", padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          <IconTile name="target" color="#dc2626" bg="rgba(220,38,38,0.12)" size={48} />
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.5, marginBottom: 8 }}>
          "The Sunday Reset isn't just chores.<br />It's building the machine that builds the man."
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: 2, textTransform: "uppercase" }}>— Iron Protocol</div>
      </div>
    </div>
  );
}

// ─── STYLES ─────────────────────────────────────────────────────────────────

const styles = {
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 14,
    padding: 20,
  },
  quoteBanner: {
    background: "linear-gradient(135deg, rgba(220,38,38,0.1), rgba(30,30,40,0.8))",
    border: "1px solid rgba(220,38,38,0.15)",
    borderRadius: 14,
    padding: 20,
    textAlign: "center",
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    background: "rgba(255,255,255,0.06)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
    background: "linear-gradient(90deg, #dc2626, #f59e0b)",
    transition: "width 0.6s ease",
  },
  nextUp: {
    background: "rgba(220,38,38,0.06)",
    border: "1px solid rgba(220,38,38,0.12)",
    borderRadius: 10,
    padding: "10px 14px",
  },
  smallBtn: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    padding: "6px 14px",
    borderRadius: 8,
    cursor: "pointer",
  },
  actionBtn: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    background: "rgba(220,38,38,0.08)",
    border: "1px solid rgba(220,38,38,0.15)",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left",
  },
};

// ─── MAIN APP ───────────────────────────────────────────────────────────────

const TABS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "habits", label: "Habits", icon: "checkCircle" },
  { id: "fitness", label: "Fitness", icon: "dumbbell" },
  { id: "meals", label: "Meals", icon: "utensils" },
  { id: "schedule", label: "Schedule", icon: "calendar" },
  { id: "progress", label: "Progress", icon: "chart" },
  { id: "reset", label: "Reset", icon: "refresh" },
];

export default function App() {
  const todayKey = getDateKey();
  const [tab, setTab] = useState("home");
  const [habits, setHabits] = useState(() => loadData("habits", {}));
  const [workoutLog, setWorkoutLog] = useState(() => loadData("workoutLog", {}));
  const [bodyWeight, setBodyWeight] = useState(() => loadData("bodyWeight", {}));
  const [sundayChecklist, setSundayChecklist] = useState(() => loadData("sundayChecklist", {}));
  const [overtime, setOvertime] = useState(0);

  const streaks = useMemo(() => {
    const result = {};
    HABITS.forEach(h => {
      let streak = 0;
      for (let i = 0; i < 365; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const k = getDateKey(d);
        if ((habits[k] || {})[h.id]) streak++;
        else break;
      }
      result[h.id] = streak;
    });
    return result;
  }, [habits]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#fff",
      fontFamily: "'Barlow', 'Barlow Condensed', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@600;700;800&display=swap" rel="stylesheet" />

      <div style={{
        padding: "20px 20px 12px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: "linear-gradient(180deg, rgba(220,38,38,0.04), transparent)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #dc2626, #991b1b)",
          }}>
            <Icon name="bolt" size={20} color="#fff" stroke={2.5} />
          </div>
          <div>
            <div style={{
              fontSize: 20, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase",
              fontFamily: "'Barlow Condensed', sans-serif",
              background: "linear-gradient(90deg, #fff, rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Iron Protocol
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: 2, textTransform: "uppercase" }}>
              Discipline System
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 16px 120px", maxWidth: 480, margin: "0 auto" }}>
        {tab === "home" && <HomeTab habits={habits} todayKey={todayKey} />}
        {tab === "habits" && <HabitsTab habits={habits} setHabits={setHabits} todayKey={todayKey} streaks={streaks} />}
        {tab === "fitness" && <FitnessTab workoutLog={workoutLog} setWorkoutLog={setWorkoutLog} todayKey={todayKey} bodyWeight={bodyWeight} setBodyWeight={setBodyWeight} />}
        {tab === "meals" && <MealsTab />}
        {tab === "schedule" && <ScheduleTab overtime={overtime} setOvertime={setOvertime} />}
        {tab === "progress" && <ProgressTab habits={habits} workoutLog={workoutLog} bodyWeight={bodyWeight} streaks={streaks} />}
        {tab === "reset" && <ResetTab sundayChecklist={sundayChecklist} setSundayChecklist={setSundayChecklist} setOvertime={setOvertime} />}
      </div>

      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "rgba(10,10,15,0.95)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "8px 4px env(safe-area-inset-bottom, 8px)",
        display: "flex", justifyContent: "space-around",
      }}>
        {TABS.map(t => {
          const active = tab === t.id;
          return (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              padding: "6px 4px", background: "none", border: "none", cursor: "pointer",
              color: active ? "#dc2626" : "rgba(255,255,255,0.35)",
              transition: "color 0.15s",
              minWidth: 0,
            }}>
              <Icon name={t.icon} size={20} color={active ? "#dc2626" : "rgba(255,255,255,0.4)"} stroke={active ? 2 : 1.75} />
              <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
