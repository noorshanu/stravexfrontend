'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaChartLine,
  FaChartBar,
  FaCheckCircle,
  FaTrophy,
  FaClock,
  FaChartPie,
  FaBalanceScale,
  FaUsers,
  FaShieldAlt
} from 'react-icons/fa'

const CoreProduct = () => {
  const capabilities = [
    {
      icon: FaChartLine,
      secondaryIcon: FaChartBar,
      title: 'Real Market Data',
      description: 'Matches track live spot prices from trusted data sources.',
      gradientFrom: '#00F0FF',
      gradientTo: '#00E699',
      bgColor: 'bg-[#00F0FF]/10',
      borderColor: 'border-[#00F0FF]/30',
      showCheckmark: true,
    },
    {
      icon: FaTrophy,
      title: 'Transparent Rankings',
      description: 'Clear performance logic with deterministic outcomes.',
      gradientFrom: '#8A2BE2',
      gradientTo: '#00F0FF',
      bgColor: 'bg-[#8A2BE2]/10',
      borderColor: 'border-[#8A2BE2]/30',
      showLeaderboard: true,
    },
    {
      icon: FaClock,
      title: 'Time-Boxed Matches',
      description: 'Fixed durations ensure equal conditions for all players.',
      gradientFrom: '#00E699',
      gradientTo: '#8A2BE2',
      bgColor: 'bg-[#00E699]/10',
      borderColor: 'border-[#00E699]/30',
      showTimer: true,
    },
    {
      icon: FaChartPie,
      title: 'Portfolio-Based Gameplay',
      description: 'Strategic allocation matters more than single predictions.',
      gradientFrom: '#8A2BE2',
      gradientTo: '#00E699',
      bgColor: 'bg-[#8A2BE2]/10',
      borderColor: 'border-[#8A2BE2]/30',
      showCryptoLabels: true,
    },
    {
      icon: FaBalanceScale,
      secondaryIcon: FaUsers,
      title: 'Equal Market Access',
      description: 'Every player competes on the same assets, prices, and rules.',
      gradientFrom: '#00F0FF',
      gradientTo: '#8A2BE2',
      bgColor: 'bg-[#00F0FF]/10',
      borderColor: 'border-[#00F0FF]/30',
      showEqualSign: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
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

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <section className="relative text-white py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#00F0FF]/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#8A2BE2]/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#00E699]/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
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
              <FaShieldAlt className="relative text-5xl text-[#00E699]" />
            </div>
          </motion.div>
          
          <p className="text-sm sm:text-base text-[#888888] mb-4 tracking-wider uppercase">
            Core Product Capabilities
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Built for Fair,{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00E699] bg-clip-text text-transparent">
                Skill-Based Competition
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00E699]"
              />
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5"
        >
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon
            const SecondaryIcon = capability.secondaryIcon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative group"
              >
                {/* Glassmorphism Card */}
                <div 
                  className={`
                    relative h-full p-7 sm:p-8 rounded-2xl backdrop-blur-xl
                    border border-white/10 bg-gradient-to-br from-white/5 to-white/0
                    transition-all duration-500
                    group-hover:border-white/20 group-hover:from-white/10 group-hover:to-white/5
                  `}
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 25px 50px -12px ${capability.gradientTo}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                  }}
                >
                  {/* Animated Gradient Border on Hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${capability.gradientFrom}30, ${capability.gradientTo}30)`,
                      filter: 'blur(20px)',
                    }}
                  />

                  {/* Icon Container with Custom Illustrations */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="mb-7 flex justify-center relative h-28"
                  >
                    {/* Main Icon with Enhanced Glow */}
                    <div className="relative">
                      <div 
                        className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${capability.gradientFrom}, ${capability.gradientTo})`,
                          boxShadow: `0 20px 40px -10px ${capability.gradientTo}60`,
                        }}
                      >
                        <IconComponent className="text-white text-4xl" />
                      </div>
                      {/* Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl blur-xl opacity-50 -z-10"
                        style={{
                          background: `linear-gradient(135deg, ${capability.gradientFrom}, ${capability.gradientTo})`,
                        }}
                      />
                    </div>

                    {/* Real Market Data - Charts with Checkmark */}
                    {capability.showCheckmark && SecondaryIcon && (
                      <motion.div 
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: 'spring' }}
                        className="absolute -right-3 top-3"
                      >
                        <div className="relative">
                          <SecondaryIcon className="text-[#00E699] text-2xl drop-shadow-lg" />
                          <FaCheckCircle className="absolute -top-1 -right-1 text-[#00E699] text-sm bg-[#1A1C22] rounded-full shadow-lg" />
                        </div>
                      </motion.div>
                    )}

                    {/* Transparent Rankings - Trophy with Leaderboard Effect */}
                    {capability.showLeaderboard && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                          {[1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                              className="w-2 h-2 bg-[#00E699] rounded-full shadow-lg"
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Time-Boxed Matches - Timer Display */}
                    {capability.showTimer && (
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: 'spring' }}
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1A1C22] backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#00E699]/40 shadow-xl"
                      >
                        <div className="text-[#00E699] text-sm font-mono font-bold tracking-wider">04:59:30</div>
                        <div className="text-[#888888] text-[10px] text-center mt-0.5">Remaining</div>
                      </motion.div>
                    )}

                    {/* Portfolio-Based Gameplay - Crypto Labels */}
                    {capability.showCryptoLabels && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, staggerChildren: 0.1 }}
                        className="absolute -bottom-3 -right-3 flex gap-1.5"
                      >
                        {[
                          { label: 'BTC', color: '#8A2BE2' },
                          { label: 'ETH', color: '#00F0FF' },
                          { label: 'SOL', color: '#00E699' }
                        ].map((crypto, idx) => (
                          <motion.div
                            key={crypto.label}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + idx * 0.1, type: 'spring' }}
                            className="bg-white/10 backdrop-blur-sm text-white text-[11px] px-2 py-1 rounded-md font-bold border border-white/20 shadow-lg"
                            style={{ 
                              background: `${crypto.color}20`,
                              borderColor: `${crypto.color}40`
                            }}
                          >
                            {crypto.label}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {/* Equal Market Access - Equal Sign */}
                    {capability.showEqualSign && (
                      <motion.div 
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: 'spring' }}
                        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="flex flex-col items-center gap-1 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                          <div className="w-10 h-0.5 bg-[#00E699] rounded-full shadow-lg"></div>
                          <div className="w-10 h-0.5 bg-[#00E699] rounded-full shadow-lg"></div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${capability.gradientFrom}, ${capability.gradientTo})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${capability.gradientFrom}, ${capability.gradientTo})`
                    }}
                  >
                    {capability.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed text-center group-hover:text-white/90 transition-colors duration-300">
                    {capability.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl"
                    style={{
                      background: `radial-gradient(circle, ${capability.gradientTo} 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default CoreProduct
