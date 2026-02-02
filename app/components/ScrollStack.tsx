"use client";

import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLDivElement>('.scroll-stack-card');
    const totalCards = cards.length;

    // Set up the sticky container
    const container = containerRef.current;

    // Initialize cards with 3D perspective styling
    cards.forEach((card, index) => {
      gsap.set(card, {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: totalCards - index,
        transformOrigin: 'center top',
        scale: 1,
        y: 0,
      });
    });

    // Create the main pinning trigger
    ScrollTrigger.create({
      trigger: container,
      start: 'top 10%',
      end: () => `+=${totalCards * 100}%`,
      pin: true,
      pinSpacing: true,
      markers: false,
    });

    // Animate each card
    cards.forEach((card, index) => {
      if (index < totalCards - 1) {
        // Calculate progress range for this card
        const startProgress = index / totalCards;
        const endProgress = (index + 1) / totalCards;

        // Create scroll-linked animation
        gsap.to(card, {
          scale: 0.85,
          y: -50,
          borderRadius: '40px',
          boxShadow: '0 -10px 50px rgba(0,0,0,0.3)',
          scrollTrigger: {
            trigger: container,
            start: 'top 10%',
            end: () => `+=${totalCards * 100}%`,
            scrub: 0.8,
            markers: false,
            onUpdate: (self) => {
              const progress = self.progress;

              // Only animate when within this card's range
              if (progress >= startProgress && progress <= endProgress) {
                const localProgress = (progress - startProgress) / (endProgress - startProgress);

                gsap.to(card, {
                  scale: 1 - (localProgress * 0.15),
                  y: -(localProgress * 60),
                  duration: 0,
                  overwrite: 'auto',
                });
              }
            },
          },
        });
      }

      // Reveal animation for each card (except first)
      if (index > 0) {
        const startProgress = (index - 0.3) / totalCards;

        gsap.fromTo(card,
          {
            y: '100%',
            scale: 0.95,
          },
          {
            y: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 10%',
              end: () => `+=${totalCards * 100}%`,
              scrub: 0.8,
              markers: false,
              onUpdate: (self) => {
                const progress = self.progress;
                const revealProgress = Math.max(0, Math.min(1, (progress - startProgress) / 0.4));

                gsap.to(card, {
                  y: (1 - revealProgress) * 100 + '%',
                  duration: 0,
                  overwrite: 'auto',
                });
              },
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container relative ${className}`.trim()}
      style={{
        height: '450px',
        perspective: '1200px',
        perspectiveOrigin: 'center top',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollStack;
