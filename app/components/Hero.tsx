'use client'

import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center  text-white overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left geometric lines */}
        <div className="absolute top-20 left-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <line x1="0" y1="50" x2="150" y2="50" stroke="#CCCCCC" strokeWidth="1" />
            <line x1="0" y1="100" x2="150" y2="100" stroke="#CCCCCC" strokeWidth="1" />
            <line x1="0" y1="150" x2="150" y2="150" stroke="#CCCCCC" strokeWidth="1" />
          </svg>
        </div>

        {/* Bottom left line graph */}
        <div className="absolute bottom-32 left-8 w-48 h-32 opacity-30">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="100%" stopColor="#00E699" />
              </linearGradient>
            </defs>
            <polyline
              points="10,80 30,70 50,60 70,50 90,40 110,35 130,30 150,25 170,20"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
            />
            {/* Small bar chart elements */}
            <rect x="180" y="60" width="8" height="20" fill="#666" opacity="0.5" />
            <rect x="190" y="70" width="8" height="10" fill="#666" opacity="0.5" />
          </svg>
        </div>

        {/* Top right bar chart */}
        <div className="absolute top-24 right-8 w-40 h-32 opacity-30">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <rect x="20" y="60" width="15" height="30" fill="#666" />
            <rect x="45" y="50" width="15" height="40" fill="#666" />
            <rect x="70" y="40" width="15" height="50" fill="#00E699" />
            <rect x="95" y="55" width="15" height="35" fill="#666" />
            <rect x="120" y="45" width="15" height="45" fill="#666" />
            {/* Three horizontal lines above */}
            <line x1="20" y1="20" x2="135" y2="20" stroke="#CCCCCC" strokeWidth="1" />
            <line x1="20" y1="25" x2="135" y2="25" stroke="#CCCCCC" strokeWidth="1" />
            <line x1="20" y1="30" x2="135" y2="30" stroke="#CCCCCC" strokeWidth="1" />
          </svg>
        </div>

        {/* Bottom right star/diamond */}
        <div className="absolute bottom-24 right-12 w-16 h-16 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 60,40 90,40 70,60 80,90 50,75 20,90 30,60 10,40 40,40"
              fill="#CCCCCC"
              stroke="#CCCCCC"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                STRAVEX
              </span>
            </h1>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Compete on Market Skill.
          <br />
          <span className="text-white">Not Luck.</span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#CCCCCC] mb-4 max-w-3xl mx-auto leading-relaxed">
          Stravex is a gamified prediction market where players build crypto portfolios, compete in live matches, and rank based on real market performance.
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-[#CCCCCC] mb-10 font-medium">
          Predict trends. Allocate capital. Outperform others.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-[#00E699] hover:bg-[#00D689] text-white font-semibold rounded-lg transition-colors text-lg w-full sm:w-auto shadow-lg shadow-[#00E699]/20">
            Start Practice Match
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-[#8A2BE2] hover:bg-[#8A2BE2]/10 text-white font-semibold rounded-lg transition-colors text-lg w-full sm:w-auto">
            Join a Live Match
          </button>
        </div>
      </div>

      {/* Risk Disclosure */}
      <div className="relative z-10 mt-auto pt-8">
        <p className="text-xs sm:text-sm text-[#888888] text-center max-w-2xl mx-auto">
          Risk Disclosure: All outcomes are based on real market movements. Practice mode is for learning only.
        </p>
      </div>
    </section>
  )
}

export default Hero