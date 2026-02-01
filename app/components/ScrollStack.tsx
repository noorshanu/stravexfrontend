"use client";

import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
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
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLDivElement>('.scroll-stack-card');
    cardsRef.current = cards;

    // Create ScrollTrigger for each card
    cards.forEach((card, index) => {
      // Pin each card with reduced duration to prevent overlap
      ScrollTrigger.create({
        trigger: card,
        start: 'top 15%',
        end: () => `+=${(cards.length - index) * 250}`, // Reduced from 400 to 250
        pin: true,
        pinSpacing: false,
        markers: false,
        id: `pin-${index}`,
      });

      // Scale down animation as next card comes in
      if (index < cards.length - 1) {
        gsap.to(card, {
          scale: 0.9 - (index * 0.05),
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[index + 1],
            start: 'top bottom',
            end: 'top 15%',
            scrub: true,
            markers: false,
            id: `scale-${index}`,
          },
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`.trim()}>
      {children}
    </div>
  );
};

export default ScrollStack;
