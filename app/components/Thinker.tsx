'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaBrain,
  FaChartLine,
  FaUserTie,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaChess
} from 'react-icons/fa'

const Thinker = () => {
  const userTypes = [
    {
      icon: FaChartLine,
      title: 'Crypto Traders & Analysts',
      description: 'Leverage your market expertise and analytical skills to outperform the competition.',
      gradientFrom: '#00F0FF',
      gradientTo: '#00E699',
      features: ['Technical Analysis', 'Market Trends', 'Risk Management'],
    },
    {
      icon: FaUserTie,
      title: 'Market Strategists & Researchers',
      description: 'Apply your research methodology and strategic thinking to build winning portfolios.',
      gradientFrom: '#8A2BE2',
      gradientTo: '#00F0FF',
      features: ['Strategic Planning', 'Data Analysis', 'Portfolio Optimization'],
    },
    {
      icon: FaRocket,
      title: 'Competitive, Performance-Oriented Users',
      description: 'Thrive in a structured environment where skill and performance determine success.',
      gradientFrom: '#00E699',
      gradientTo: '#8A2BE2',
      features: ['Performance Tracking', 'Competitive Ranking', 'Skill Development'],
    },
  ]

  const values = [
    { icon: FaBrain, text: 'Decision-Making' },
    { icon: FaShieldAlt, text: 'Risk Assessment' },
    { icon: FaLightbulb, text: 'Market Insight' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="relative bg-gradient-to-b from-[#1A1C22] via-[#1F2128] to-[#1A1C22] text-white py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#8A2BE2]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#00E699]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] blur-2xl opacity-50 rounded-full"></div>
              <FaChess className="relative text-6xl text-[#00E699]" />
            </div>
          </motion.div>
          
          <p className="text-sm sm:text-base text-[#888888] mb-4 tracking-wider uppercase">
            Section 5 — Built for Competitive Thinkers
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Designed for{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00E699] bg-clip-text text-transparent">
                Strategy-Driven
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00E699]"
              />
            </span>
            <br />
            Players
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed"
          >
            If you value decision-making, risk assessment, and market insight, Stravex offers a structured environment to compete on skill.
          </motion.p>
        </motion.div>

        {/* User Type Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {userTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group"
              >
                {/* Glassmorphism Card */}
                <div 
                  className="relative h-full p-8 rounded-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  }}
                >
                  {/* Animated Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${type.gradientFrom}40, ${type.gradientTo}40)`,
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 flex justify-center"
                  >
                    <div 
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${type.gradientFrom}, ${type.gradientTo})`,
                        boxShadow: `0 20px 40px -10px ${type.gradientTo}60`,
                      }}
                    >
                      <IconComponent className="text-white text-3xl" />
                      <div 
                        className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                        style={{
                          background: `linear-gradient(135deg, ${type.gradientFrom}, ${type.gradientTo})`,
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">
                    {type.title}
                  </h3>
                  <p className="text-[#CCCCCC] mb-6 text-center leading-relaxed">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-[#CCCCCC]"
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${type.gradientFrom}, ${type.gradientTo})`,
                          }}
                        />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl"
                    style={{
                      background: `radial-gradient(circle, ${type.gradientTo} 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Premium Glass Card */}
            <div className="relative p-8 sm:p-12 rounded-3xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 overflow-hidden">
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(90deg, #00F0FF, #8A2BE2, #00E699, #00F0FF)`,
                  backgroundSize: '300% 300%',
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                  Built for Those Who Value
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {values.map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, type: 'spring' }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#00F0FF]/20 to-[#8A2BE2]/20">
                          <IconComponent className="text-3xl text-[#00E699]" />
                        </div>
                        <p className="text-lg font-semibold text-white">{value.text}</p>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 text-center"
                >
                  <p className="text-lg text-[#CCCCCC] italic">
                    "A structured environment to compete on skill"
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Thinker
