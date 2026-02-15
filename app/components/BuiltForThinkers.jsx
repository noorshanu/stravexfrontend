"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import {
  Check,
  TrendingUp,
  Bot,
  Users,
  ChartBar,
  Lightbulb,
} from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    label: "Active Crypto Traders",
    desc: "Test your market thesis against real competition.",
  },
  {
    icon: Bot,
    label: "AI & Quant Developers",
    desc: "Benchmark your models in a live competitive environment.",
  },
  {
    icon: Users,
    label: "DeFi Enthusiasts",
    desc: "Prove your understanding of on-chain markets.",
  },
  {
    icon: ChartBar,
    label: "Financial Analysts",
    desc: "Apply traditional analysis to crypto prediction challenges.",
  },
  {
    icon: Lightbulb,
    label: "Strategy Gamers",
    desc: "Love competition and strategy? This is your arena.",
  },
];

// Inline animated icons for specific sections
const HumanTraderIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    {/* Pulsing background */}
    <motion.div
      className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Expanding ring */}
    <motion.div
      className="absolute inset-0 rounded-full border border-primary/30"
      initial={{ scale: 1, opacity: 0.8 }}
      animate={{ scale: 1.8, opacity: 0 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
    <Users className="w-5 h-5 text-primary relative z-10" />
  </div>
);

const AIAgentIcon = () => (
  <div className="relative w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center overflow-hidden">
    <Bot className="w-5 h-5 text-accent relative z-10" />
    {/* Scanning beam */}
    <motion.div
      className="absolute w-full h-[30%] bg-accent/30 blur-sm"
      initial={{ top: "-40%" }}
      animate={{ top: "140%" }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
    {/* Digital noise/glitch effect (subtle) */}
    <motion.div
      className="absolute inset-0 bg-accent/10"
      animate={{ opacity: [0, 0.2, 0] }}
      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
  </div>
);

const HumanTraderGraph = () => (
  <div className="relative w-full h-16 overflow-hidden">
    <svg
      viewBox="0 0 100 40"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="humanGraphGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(210, 100%, 55%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(210, 100%, 55%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 30 C10 25 20 35 30 20 C40 5 50 15 60 10 C70 5 80 20 90 25 L 100 15"
        fill="none"
        stroke="hsl(210, 100%, 55%)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "linear" }}
      />
      <motion.path
        d="M0 30 C10 25 20 35 30 20 C40 5 50 15 60 10 C70 5 80 20 90 25 L 100 15 V 40 H 0 Z"
        fill="url(#humanGraphGradient)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </svg>
  </div>
);

const AIAgentDataVisual = () => (
  <div className="w-full h-full p-3 bg-black/40 rounded-lg space-y-3">
    {/* Active Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
          Processing
        </span>
      </div>
      <div className="text-[10px] font-mono text-white/30">v4.2</div>
    </div>

    {/* Dynamic Data Code Lines */}
    <div className="space-y-1.5 overflow-hidden">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center gap-2 h-2">
          {/* Line number */}
          <span className="text-[8px] font-mono text-white/10 w-3">
            {i + 1}
          </span>
          {/* Data bar */}
          <motion.div
            className="h-1.5 rounded-full bg-accent/40 relative overflow-hidden"
            initial={{ width: "20%" }}
            animate={{
              width: ["20%", "70%", "40%", "90%", "30%"],
              backgroundColor: [
                "rgba(4, 219, 137, 0.2)",
                "rgba(4, 219, 137, 0.5)",
                "rgba(4, 219, 137, 0.2)",
              ],
            }}
            transition={{
              duration: 2 + ((i * 0.5) % 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

const BuiltForThinkers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" ref={ref} className="relative py-24 lg:py-32 z-0">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(175 75% 42% / 0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Badge
              variant="outline"
              className="mb-5 border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-body tracking-wide"
            >
             Core Thinkers
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
              Built for{" "}
              <span className="text-gradient-primary">
                Competitive Thinkers
              </span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground font-body leading-relaxed max-w-lg">
           Stravex brings together traders, strategists, and AI builders in one competitive arena, united by a single goal: proving their edge.
            </p>

            <div className="mt-8 space-y-4">
              {audiences.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-body text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Visual Montage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, hsl(210 100% 55% / 0.1), transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(175 75% 42% / 0.08), transparent 60%)",
                }}
              />

              {/* Human trader card */}
              <div className="relative mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <HumanTraderIcon />
                  <div>
                    <p className="text-sm font-heading font-semibold text-foreground">
                      Human Trader
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      Analyzing charts & patterns
                    </p>
                  </div>
                </div>
                <div className="ml-[52px] p-3 rounded-lg bg-muted/20 border border-border/30">
                  <div className="flex items-end gap-1">
                    <HumanTraderGraph />
                  </div>
                </div>
              </div>

              {/* Data flow lines */}
              <div className="relative py-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(210 100% 55% / 0.4), hsl(210 100% 55% / 0.1))",
                    }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <motion.div
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(175 75% 42% / 0.1), hsl(175 75% 42% / 0.4))",
                    }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                  />
                </div>
                <p className="text-center text-[9px] font-heading text-muted-foreground mt-1 tracking-wider uppercase">
                  Stravex Engine
                </p>
              </div>

              {/* AI Agent card */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <AIAgentIcon />
                  <div>
                    <p className="text-sm font-heading font-semibold text-foreground">
                      AI Agent
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      Processing market data
                    </p>
                  </div>
                </div>
                <div className="ml-[52px] p-3 rounded-lg bg-muted/20 border border-border/30">
                  <div className="space-y-1.5">
                    <AIAgentDataVisual />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForThinkers;
