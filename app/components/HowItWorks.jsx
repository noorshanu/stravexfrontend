"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Search, PieChart, Lock, Trophy } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Opportunities",
    description:
      "Scan real-time crypto markets. Analyze trends, identify patterns, and find your edge with live data feeds.",
    color: "primary",
    animation: "scan",
  },
  {
    icon: PieChart,
    title: "Build Your Portfolio",
    description:
      "Allocate your capital across crypto assets. Build a diversified prediction portfolio that reflects your market thesis.",
    color: "accent",
    animation: "pie",
  },
  {
    icon: Lock,
    title: "Compete in Live Matches",
    description:
      "Lock in your portfolio and enter time-boxed matches. Compete against other humans and AI agents simultaneously.",
    color: "primary",
    animation: "chart",
  },
  {
    icon: Trophy,
    title: "Rank by Performance",
    description:
      "Results are measured by real market performance. Climb the leaderboard and prove your market skill.",
    color: "accent",
    animation: "rank",
  },
];

const ScanAnimation = () => {
  return (
    <div className="relative h-20 w-full overflow-hidden rounded bg-black/20">
      <div className="absolute inset-0 flex items-center p-2">
        {/* Graph Line */}
        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Static background grid */}
          <path
            d="M0 10 H100 M0 20 H100 M0 30 H100"
            stroke="white"
            strokeOpacity="0.05"
            strokeWidth="0.5"
            fill="none"
          />

          {/* Main Path */}
          <motion.path
            d="M0 30 C10 32 15 20 25 25 C35 30 40 15 50 20 C60 25 65 10 75 15 C85 20 90 5 100 15"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Area under curve */}
          <motion.path
            d="M0 30 C10 32 15 20 25 25 C35 30 40 15 50 20 C60 25 65 10 75 15 C85 20 90 5 100 15 V 40 H 0 Z"
            fill="url(#scanGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          />

          {/* Scanning vertical line */}
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="40"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="2 2"
            animate={{ x1: [0, 100, 0], x2: [0, 100, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Signal dots at peaks */}
          {[25, 50, 75].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={20 - i * 2} // Approximate peak y
              r="2"
              fill="hsl(var(--primary))"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.8 + 1, // Staggered with scan line
                repeatDelay: 1,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

const PieAnimation = () => {
  const [slices] = useState([35, 25, 20, 20]);
  const colors = [
    "hsl(210, 100%, 55%)",
    "hsl(175, 75%, 42%)",
    "hsl(200, 100%, 65%)",
    "hsl(220, 50%, 30%)",
  ];

  const paths = useMemo(() => {
    let currentAngle = 0;
    const result = [];

    slices.forEach((slice) => {
      const startAngle = currentAngle;
      const angle = (slice / 100) * 360;
      currentAngle += angle;
      const endAngle = currentAngle;

      const x1 = (20 + 16 * Math.cos((Math.PI * startAngle) / 180)).toFixed(3);
      const y1 = (20 + 16 * Math.sin((Math.PI * startAngle) / 180)).toFixed(3);
      const x2 = (20 + 16 * Math.cos((Math.PI * endAngle) / 180)).toFixed(3);
      const y2 = (20 + 16 * Math.sin((Math.PI * endAngle) / 180)).toFixed(3);
      const largeArc = slice > 50 ? 1 : 0;

      result.push(
        `M 20 20 L ${x1} ${y1} A 16 16 0 ${largeArc} 1 ${x2} ${y2} Z`,
      );
    });

    return result;
  }, [slices]);

  return (
    <div className="relative h-20 w-full flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-16 h-16">
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill={colors[i]}
            opacity={0.6}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ transformOrigin: "50% 50%" }}
          />
        ))}
      </svg>
    </div>
  );
};

const ChartAnimation = () => {
  return (
    <div className="relative h-20 w-full overflow-hidden">
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <motion.path
          d="M 0 60 Q 20 50 40 55 T 80 40 T 120 45 T 160 25 T 200 30"
          fill="none"
          stroke="hsl(210, 100%, 55%)"
          strokeWidth="2"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="30"
          r="3"
          fill="hsl(210, 100%, 55%)"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

const RankAnimation = () => {
  const [ranks, setRanks] = useState([1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRanks((prev) => {
        const newRanks = [...prev];
        const i = Math.floor(Math.random() * 3);
        const j = Math.floor(Math.random() * 3);
        [newRanks[i], newRanks[j]] = [newRanks[j], newRanks[i]];
        return newRanks;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const widths = [100, 80, 60];
  const labels = ["Alpha_T", "Bot_X7", "Trader9"];

  return (
    <div className="space-y-2 px-2 py-2">
      {ranks.map((rank, i) => (
        <motion.div
          key={rank}
          layout
          className="flex items-center gap-2"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <span className="text-[10px] font-heading text-muted-foreground w-4">
            #{i + 1}
          </span>
          <div className="flex-1 h-4 rounded-full bg-muted/30 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(90deg, hsl(210 100% 55% / 0.6), hsl(175 75% 42% / 0.4))"
                    : i === 1
                      ? "hsl(210 100% 55% / 0.3)"
                      : "hsl(175 75% 42% / 0.2)",
                width: `${widths[rank - 1]}%`,
              }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <span className="text-[10px] font-body text-muted-foreground w-12 text-right">
            {labels[rank - 1]}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const animations = {
  scan: ScanAnimation,
  pie: PieAnimation,
  chart: ChartAnimation,
  rank: RankAnimation,
};

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 lg:py-32">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(175 75% 42% / 0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-5 border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-body tracking-wide"
          >
            Step-by-Step
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            How <span className="text-gradient-primary">Stravex</span> Works
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            From discovery to competition — four steps to prove your market
            mastery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const AnimComponent = animations[step.animation];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Card className="glass-card bg-black/40 backdrop-blur-xl border-white/5 h-full flex flex-col group hover:border-primary/50 hover:shadow-glow-sm transition-all duration-500">
                  <CardContent className="p-6 flex flex-col flex-1 relative overflow-hidden">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Step number */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-heading tracking-wider uppercase ${
                          step.color === "primary"
                            ? "text-primary/50"
                            : "text-accent/50"
                        }`}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          step.color === "primary"
                            ? "bg-primary/10"
                            : "bg-accent/10"
                        }`}
                      >
                        <step.icon
                          className={`w-4 h-4 ${
                            step.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Animation */}
                    <div className="mb-4 rounded-lg bg-muted/20 overflow-hidden">
                      <AnimComponent />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed mt-auto">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
