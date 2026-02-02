"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaWallet,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FaSearch,
      title: "Discover Market Opportunities",
      description:
        "Each match features a curated set of trending crypto assets.",
      bgColor: "bg-[#1A1B23]",
      borderColor: "border-[#1A1B23]",
      gradientFrom: "#00E699",
      gradientTo: "#00F0FF",
    },
    {
      number: "02",
      icon: FaWallet,
      title: "Build Your Portfolio",
      description:
        "Choose assets and allocate capital using a fixed virtual balance.",
      bgColor: "bg-[#1A1B23]",
      borderColor: "border-[#1A1B23]",
      gradientFrom: "#00F0FF",
      gradientTo: "#8A2BE2",
    },
    {
      number: "03",
      icon: FaUsers,
      title: "Compete in Live Matches",
      description:
        "Portfolios are locked. Markets move. Rankings update in real time.",

      bgColor: "bg-[#1A1B23]",
      borderColor: "border-[#1A1B23]",
      gradientFrom: "#8A2BE2",
      gradientTo: "#FF6B9D",
    },
    {
      number: "04",
      icon: FaTrophy,
      title: "Rank by Performance",
      description:
        "Players are ranked by portfolio PnL percentage at match end.",
      bgColor: "bg-[#1A1B23]",
      borderColor: "border-[#1A1B23]",
      gradientFrom: "#FF6B9D",
      gradientTo: "#00E699",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="relative  text-white  px-2"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A2BE2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00E699]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div
                  className={`
                  relative h-full p-6 sm:p-8 rounded-2xl border-2 ${step.borderColor}
                  ${step.bgColor} backdrop-blur-sm
                  transition-all duration-300
                  hover:border-opacity-60 hover:shadow-2xl
                `}
                  style={{
                    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 25px 50px -12px 33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 0 rgba(0, 0, 0, 0)";
                  }}
                >
                  {/* Number Badge */}
                  <div
                    className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg bg-[#1A1B23] inset-shadow-lg"

                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="mb-6 flex justify-center"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center shadow-lg rounded-full bg-[#1A1B23] border border-[#7c7c7c]"

                    >
                      <IconComponent className="text-white text-2xl" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-[#CCCCCC] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative gradient on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                    }}
                  ></div>
                </div>

                {/* Connecting line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00E699] to-[#8A2BE2] opacity-30 transform -translate-y-1/2 z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#00E699] to-[#8A2BE2] origin-left"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple Rules.{" "}
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
              Serious Strategy.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#CCCCCC] max-w-2xl mx-auto mt-6">
            No mid-game actions. No randomness. Just decisions and outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
