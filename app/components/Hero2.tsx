/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Liveprice from './Liveprice';
import ComingSoonPopup from './ComingSoonPopup';

function Hero2() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useGSAP(
    () => {
      // blob1 animation
      gsap
        .timeline()
        .to('.blo1', {
          rotate: 360,
          duration: 3,
          repeat: -1,
          ease: 'power2.in',
          yoyo: true,
        })
        .to('.blob1', {
          duration: 3,
          scale: 1.4,
          yoyo: true,
          repeat: -1,
          ease: 'power2.inOut',
        });

      // blob2 animation
      gsap.to('.blob2', {
        duration: 1,
        rotate: 5,
        repeat: -1,
        yoyo: true,
        y: 50,
        ease: 'sine.inOut',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',
          // toggleActions: 'restart reverse restart reverse',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.transform', {
        opacity: 0,
        delay: 0.2,
        duration: 0.3,
        y: -100,
      });

      tl.from('.keyword1', {
        opacity: 0,
        x: 100,
        duration: 0.3,
      });

      tl.from('.keyword1-bg', {
        duration: 0.1,
        left: 0,
        right: 0,
      });

      tl.to('.keyword1-bg', {
        duration: 0.3,
        right: 0,
        left: '100%',
      });

      tl.to('.keyword1', {
        duration: 0.3,
        left: 0,
        right: 0,
      });

      tl.from(
        '.keyword2',
        {
          opacity: 0,
          x: -100,
          duration: 0.3,
        },
        '-=0.7'
      );

      tl.to('.keyword2-bg', {
        duration: 0.3,
        right: '100%',
        left: 0,
      });

      tl.from(
        '.with',
        {
          opacity: 0,
          duration: 0.3,
          x: 100,
        },
        '-=0.5'
      );

      tl.from(
        '.agents',
        {
          opacity: 0,
          duration: 0.3,
          y: 100,
        },
        '-=.5'
      );

      tl.from('.pill', {
        opacity: 0,
        duration: 0.3,
      });

      tl.from(
        '.text1',
        {
          opacity: 0,
          duration: 0.3,
        },
        '-=.8'
      );

      tl.from(
        '.text2',
        {
          opacity: 0,
          duration: 0.3,
        },
        '-=.8'
      );

      tl.from('.cta', {
        duration: 0.3,
        opacity: 0,
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div
      ref={container}
      className='min-h-[100vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative z-20 overflow-hidden pt-24 pb-16 sm:py-0'
    >
      {/* Background Images - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <img
          src='images/hero.png'
          alt=''
          className='absolute left-[400px] h-[700px] w-auto object-contain blob1'
        />
        <img
          src='images/herobl.png'
          alt=''
          className='absolute left-0 bottom-0 blob2'
        />
      </div>

      {/* Mobile gradient overlay for depth */}
      <div className="absolute inset-0 z-0 sm:hidden bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className='max-w-4xl mx-auto relative z-10 w-full'>
        {/* Top label */}
        <div className='mb-8 sm:mb-8'>
          <span className='bg-gray-800/80 backdrop-blur-sm text-gray-200 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-eculid pill inline-block'>
            Predict trends. Allocate capital. Outperform the field.
          </span>
        </div>

        {/* Main heading */}
        <h1 className='text-[2.25rem] leading-[1.2] sm:text-7xl lg:text-7xl font-bold text-white mb-6 sm:mb-6 px-2 sm:px-0'>
          <span className='inline-block transform'>Compete on</span>{' '}
          <span className='relative inline-block text-[#1b8bfd] keyword1'>
            <span className='absolute top-0 bottom-0 left-0 right-0 bg-[#1b8bfd] keyword1-bg'></span>
            Trading
          </span>
          <br />
          <span className='inline-block with'>Skill. </span>
          <span className='inline-block relative text-[#1b8bfd] keyword2'>
            <span className='absolute top-0 -bottom-1 left-0 right-0 bg-[#1b8bfd] keyword2-bg'></span>
            Not Luck
          </span>
          <span className='inline-block agents'>.</span>
        </h1>

        {/* Subheading */}
        <div className='space-y-3 mb-10 sm:mb-12 px-4 sm:px-0'>
          <p className='text-gray-300 text-sm sm:text-xl font-eculid text1 leading-relaxed'>
            The world&apos;s first AI-powered, gamified crypto prediction market.
          </p>
          <p className='text-gray-400 text-sm sm:text-xl font-eculid text2 leading-relaxed max-w-2xl mx-auto'>
            Stravex lets you build portfolios, enter live matches, and compete
            against humans, intelligent AI agents, or both using real market performance.
          </p>
        </div>

        {/* CTA Button */}
        <div className='cta mb-8 sm:mb-0'>
          <button onClick={() => setIsPopupOpen(true)} className='group cursor-pointer font-eculid border border-white/20 bg-gray-800/80 hover:bg-gray-800/90 backdrop-blur-sm text-white px-8 py-3 sm:px-8 sm:py-3 rounded-md text-sm sm:text-lg transition-all duration-300 flex justify-center w-fit items-center gap-2 mx-auto shadow-lg'>
            Live Match
            <svg
              className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </button>
        </div>
        <div className='mt-8 sm:mt-8 w-full overflow-x-auto'>
          <Liveprice />
        </div>
      </div>

      <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default Hero2;
