/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import LiquidEther from './LiquidEther'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-x-hidden  px-4 sm:px-6 lg:px-8 py-20 hero-bg">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>


  <img src="/bg.png" alt=""  className='absolute inset-0 w-full h-full'/>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        {/* <div className="mb-8 flex justify-center">
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                STRAVEX
              </span>
            </h1>
          </div>
        </div> */}

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