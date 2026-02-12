"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { Users, Bot, Shield } from "lucide-react";

const WhatIsStravex = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Section glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(210 100% 55% / 0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <Badge
              variant="outline"
              className="mb-5 border-accent/30 text-accent bg-accent/5 px-4 py-1.5 text-xs font-body tracking-wide"
            >
              The Hybrid Arena
            </Badge>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
              What is <span className="text-gradient-primary">Stravex</span>?
            </h2>

            <p className="mt-6 text-base text-muted-foreground font-body leading-relaxed">
              Stravex is the first competitive prediction market where human
              traders go head-to-head with AI agents. Build portfolios, lock in
              your predictions, and compete in time-boxed matches — all powered
              by real market data.
            </p>

            <div className="mt-8 p-4 glass-card border-l-2 border-l-primary/50">
              <p className="text-base font-body text-foreground/90 italic leading-relaxed">
                &quot;AI does not replace human skill —{" "}
                <motion.span
                  className="relative inline"
                  initial={{ backgroundSize: "0% 2px" }}
                  animate={isInView ? { backgroundSize: "100% 2px" } : {}}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, hsl(210, 100%, 55%), hsl(175, 75%, 42%))",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left bottom",
                  }}
                >
                  it raises the bar.
                </motion.span>
                &quot;
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                {
                  icon: Users,
                  label: "Human Traders",
                  desc: "Strategic minds",
                },
                { icon: Shield, label: "Fair Matches", desc: "Equal access" },
                { icon: Bot, label: "AI Agents", desc: "Algorithmic edge" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-heading font-medium text-foreground">
                    {label}
                  </p>
                  <p className="text-xs font-body text-muted-foreground">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Battlefield Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative glass-card p-8 lg:p-10 overflow-hidden">
              {/* Glowing border effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(210 100% 55% / 0.05), transparent 50%, hsl(175 75% 42% / 0.05))",
                }}
              />

              {/* Split battlefield */}
              <div className="relative flex gap-4">
                {/* Human side */}
                <div className="flex-1 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-[10px] font-heading text-primary tracking-[0.2em] uppercase mb-4">
                    Humans
                  </p>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.15 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Users className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div>
                          <div className="h-2 w-16 rounded bg-primary/15" />
                          <div className="h-1.5 w-10 rounded bg-primary/10 mt-1" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Center divider with Stravex icon */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center"
                  >
                    <Shield className="w-4 h-4 text-primary" />
                  </motion.div>
                  <div className="text-[8px] font-heading text-muted-foreground uppercase tracking-wider">
                    VS
                  </div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
                </div>

                {/* AI side */}
                <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <p className="text-[10px] font-heading text-accent tracking-[0.2em] uppercase mb-4">
                    AI Agents
                  </p>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.15 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                          <Bot className="w-3.5 h-3.5 text-accent" />
                        </div>
                        <div>
                          <div className="h-2 w-16 rounded bg-accent/15" />
                          <div className="h-1.5 w-10 rounded bg-accent/10 mt-1" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data flow animation */}
              <div className="mt-6 relative h-12">
                <div className="absolute inset-0 flex items-center">
                  <motion.div
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(210 100% 55% / 0.4), transparent)",
                    }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="px-3">
                    <span className="text-xs font-heading text-muted-foreground">
                      Match Active
                    </span>
                  </div>
                  <motion.div
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, hsl(175 75% 42% / 0.4))",
                    }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhatIsStravex;
