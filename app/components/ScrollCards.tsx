"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const capabilities = [
    {
        title: 'Real Market Data',
        description: 'Matches track live spot prices from trusted data sources.',
        gradientFrom: '#00F0FF',
        gradientTo: '#00E699',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    },
    {
        title: 'Transparent Rankings',
        description: 'Clear performance logic with deterministic outcomes.',
        gradientFrom: '#8A2BE2',
        gradientTo: '#00F0FF',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80',
    },
    {
        title: 'Time-Boxed Matches',
        description: 'Fixed durations ensure equal conditions for all players.',
        gradientFrom: '#00E699',
        gradientTo: '#8A2BE2',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
        title: 'Portfolio-Based Gameplay',
        description: 'Strategic allocation matters more than single predictions.',
        gradientFrom: '#8A2BE2',
        gradientTo: '#00E699',
        image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
    },
    {
        title: 'Equal Market Access',
        description: 'Every player competes on the same assets, prices, and rules.',
        gradientFrom: '#00F0FF',
        gradientTo: '#8A2BE2',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
    },
];

export default function ScrollCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30 });

    return (
        <div className="w-full py-20">
            <div className="max-w-6xl mx-auto px-6 ">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-xs sm:text-sm text-[#888888] mb-4 tracking-wider uppercase">
                        Core Product Capabilities
                    </p>

                    <h2 className="text-4xl sm:text-5xl  font-bold mb-2 leading-tight">
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
            </div>

            {/* Horizontal Scroll Section */}
            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x: smoothX }}
                        className="flex gap-8 pl-[10vw]"
                    >
                        {capabilities.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    rotateY: 5,
                                    z: 50,
                                    transition: { duration: 0.3 }
                                }}
                                className="relative flex-shrink-0 w-[85vw] md:w-[600px] h-[450px] rounded-3xl overflow-hidden bg-[#0a0a0f] border border-white/10 cursor-pointer group"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    perspective: '1000px'
                                }}
                            >
                                {/* Background glow on hover */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at center, ${card.gradientFrom}15, transparent 70%)`
                                    }}
                                />

                                <div className="h-full flex flex-col md:flex-row">
                                    {/* Image Side */}
                                    <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${card.image})` }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        {/* Gradient overlay */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${card.gradientFrom}40, ${card.gradientTo}40)`
                                            }}
                                        />
                                        {/* Edge gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0f] hidden md:block" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f] md:hidden" />

                                        {/* Floating number */}
                                        <motion.div
                                            className="absolute top-6 left-6 text-8xl font-black opacity-20"
                                            style={{
                                                color: card.gradientFrom,
                                                textShadow: `0 0 60px ${card.gradientFrom}`
                                            }}
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 0.2 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            0{index + 1}
                                        </motion.div>
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative">
                                        {/* Animated accent line */}
                                        <motion.div
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 rounded-full"
                                            style={{
                                                background: `linear-gradient(to bottom, ${card.gradientFrom}, ${card.gradientTo})`
                                            }}
                                            whileInView={{ height: '60%' }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        />

                                        <motion.h3
                                            className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <span style={{
                                                background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent'
                                            }}>
                                                {card.title}
                                            </span>
                                        </motion.h3>

                                        <motion.p
                                            className="text-lg text-white/60 leading-relaxed relative z-10"
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                        >
                                            {card.description}
                                        </motion.p>

                                        {/* Learn more indicator */}
                                        <motion.div
                                            className="mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ color: card.gradientFrom }}
                                        >
                                            <span>Explore</span>
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                                    style={{
                                        background: `linear-gradient(to right, transparent, ${card.gradientFrom}, ${card.gradientTo}, transparent)`
                                    }}
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <motion.div
                    className="flex items-center gap-2 text-white/40 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        ←
                    </motion.div>
                    <span>Scroll to explore</span>
                    <motion.div
                        animate={{ x: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        →
                    </motion.div>
                </motion.div>
            </div> */}
        </div>
    )
}
