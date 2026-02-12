/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Liveprice from './Liveprice';

function Hero2() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement>(null);

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
      className='h-auto py-10 sm:py-0 sm:min-h-screen  flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative z-50'
    >
      <img
        src='images/hero.png'
        alt=''
        className=' absolute top-0 right-0 left-0 sm:left-[400px] bottom-0 h-auto sm:h-[700px] blob1'
      />
      <img
        src='images/herobl.png'
        alt=''
        className='absolute left-0 bottom-0 z-50 sm:block hidden blob2'
      />
      <div className='max-w-4xl mx-auto '>
        {/* Top label */}
        <div className='mb-8'>
          <span className='bg-gray-800/60 text-gray-200 px-6 py-2 rounded-full text-sm font-eculid pill'>
            One Stop Destination for AI Agents
          </span>
        </div>

        {/* Main heading */}
        <h1 className='text-4xl  sm:text-7xl lg:text-7xl font-bold text-white mb-6'>
          <span className='inline-block transform'>Transforming</span>{' '}
          <span className='relative inline-block text-[#874DFF] keyword1'>
            <span className='absolute top-0 bottom-0 left-0 right-0 bg-[#874DFF] keyword1-bg'></span>
            Web3
          </span>{' '}
          <span className='inline-block with'>with </span>
          <span className='inline-block relative text-[#874DFF] keyword2'>
            <span className='absolute top-0 -bottom-1 left-0 right-0 bg-[#874DFF] keyword2-bg'></span>
            Intelligent AI
          </span>{' '}
          <span className='inline-block agents'>Agents</span>
        </h1>

        {/* Subheading */}
        <div className='space-y-2 mb-12 '>
          <p className='text-gray-300 text-lg sm:text-xl font-eculid text1'>
            Seed AI is your gateway to smarter, secure, and self-driven
            decentralized solutions.
          </p>
          <p className='text-gray-300 text-lg sm:text-xl font-eculid text2'>
            Discover, launch, and harness the power of AI agents in one unified
            platform.
          </p>
        </div>

        {/* CTA Button */}
        <div className='cta'>
          <a href='#' className='group cursor-pointer  font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex justify-center w-fit items-center gap-2 mx-auto '>
            EXPLORE MARKETPLACE
            <svg
              className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
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
          </a>
        </div>
    <div className='py-4 mt-8'>
            <Liveprice/>

    </div>
      </div>
    </div>
  );
}

export default Hero2;
