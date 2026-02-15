'use client'

import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <section id="about" className="relative  text-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              A New Way to Compete in{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                Crypto Markets
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#CCCCCC] mb-4 leading-relaxed">
              Stravex transforms crypto market prediction into a structured, competitive experience.
            </p>

            <p className="text-sm sm:text-base text-[#CCCCCC] mb-4 leading-relaxed">
              Instead of passive trading or speculative guessing, players:
            </p>

            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-[#00E699] mr-3 mt-1">•</span>
                <span className="text-sm sm:text-base text-[#CCCCCC]">
                  Select crypto assets based on market conviction
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00E699] mr-3 mt-1">•</span>
                <span className="text-sm sm:text-base text-[#CCCCCC]">
                  Allocate capital to construct a portfolio
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00E699] mr-3 mt-1">•</span>
                <span className="text-sm sm:text-base text-[#CCCCCC]">
                  Compete against others in time-boxed matches
                </span>
              </li>
            </ul>

            <p className="text-sm sm:text-base text-white font-medium leading-relaxed border-l-4 border-[#8A2BE2] pl-6">
              Each match is a performance driven challenge where rankings are determined by portfolio outcomes not chance.
            </p>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/20 via-[#8A2BE2]/20 to-[#00E699]/20 rounded-2xl blur-3xl transform rotate-6"></div>
              
              {/* Image container with glow effect */}
              <div className="relative w-full h-full">
                <Image
                  src="/bag.png"
                  alt="Bitcoin cryptocurrency"
                  fill
                  className="object-cover"
                  priority
                />

              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00E699]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#8A2BE2]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus