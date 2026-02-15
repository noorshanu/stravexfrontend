"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Inline animation components for simplicity and to match HowItWorks style
const RealMarketData = () => {
    const [prices, setPrices] = useState([
        { name: "BTC", price: 64230.50, change: 2.4 },
        { name: "ETH", price: 3450.12, change: -1.2 },
        { name: "SOL", price: 148.65, change: 5.8 },
        { name: "SUI", price: 1.85, change: 12.4 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrices((prev) =>
                prev.map((coin) => ({
                    ...coin,
                    price: coin.price * (1 + (Math.random() * 0.002 - 0.001)), // +/- 0.1% change
                }))
            );
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full w-full bg-black/20 flex flex-col justify-center px-6 gap-3">
            {prices.map((coin) => (
                <div key={coin.name} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-white/10 to-transparent flex items-center justify-center text-xs font-bold text-white/80">
                            {coin.name[0]}
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">{coin.name}</div>
                            <div className={`text-xs ${coin.change >= 0 ? "text-[#00E699]" : "text-red-500"}`}>
                                {coin.change > 0 ? "+" : ""}{coin.change}%
                            </div>
                        </div>
                    </div>
                    <motion.div
                        key={coin.price} // Key change triggers animation
                        initial={{ color: "#ffffff" }}
                        animate={{ color: ["#00F0FF", "#ffffff"] }}
                        transition={{ duration: 0.5 }}
                        className="text-right font-mono text-sm md:text-base"
                    >
                        ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

const FreeEntryAnimation = () => {
    return (
        <div className="relative h-full w-full bg-black/20 flex items-center justify-center overflow-hidden">
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: i % 2 === 0 ? '#8A2BE2' : '#00F0FF',
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                    }}
                />
            ))}

            {/* Ticket shape */}
            <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
                {/* Glow behind ticket */}
                <motion.div
                    className="absolute inset-0 rounded-2xl blur-xl"
                    style={{ background: 'linear-gradient(135deg, #8A2BE2, #00F0FF)' }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative w-36 h-24 rounded-2xl border-2 border-dashed border-white/30 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-1 overflow-hidden">
                    {/* Notch cutouts */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#18181b]" />
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#18181b]" />

                    <motion.div
                        className="text-2xl font-black bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(135deg, #8A2BE2, #00F0FF)' }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        FREE
                    </motion.div>
                    <div className="text-[10px] text-white/50 font-medium tracking-widest uppercase">Entry Pass</div>

                    {/* Shine sweep */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

const RankAnimation = () => {
    return (
        <div className="relative h-full w-full bg-black/20 flex flex-col justify-center px-12 gap-4">
            {[1, 2, 3].map((rank, i) => (
                <motion.div
                    key={rank}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-4"
                >
                    <div className="w-8 text-right text-sm font-mono text-white/50">#{rank}</div>
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{
                                background: i === 0 ? 'linear-gradient(90deg, #8A2BE2, #00F0FF)' : i === 1 ? '#8A2BE2' : '#00E699',
                                width: i === 0 ? '90%' : i === 1 ? '70%' : '50%'
                            }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

const TimerAnimation = () => {
    const totalTime = 100; // 10 seconds for the loop demo
    const [timeLeft, setTimeLeft] = useState(totalTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : totalTime));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (timeLeft / totalTime) * circumference;

    // Format time as MM:SS
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return (
        <div className="relative h-full w-full bg-black/20 flex items-center justify-center">
            <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r={radius} stroke="white" strokeOpacity="0.1" strokeWidth="4" fill="none" />
                    <motion.circle
                        cx="64" cy="64" r={radius}
                        stroke="#00E699"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={circumference}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: "linear" }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-mono font-bold text-white">
                    <motion.span
                        key={formattedTime}
                        initial={{ opacity: 0.5, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {formattedTime}
                    </motion.span>
                </div>
            </div>
        </div>
    )
}

const PieAnimation = () => {
    return (
        <div className="relative h-full w-full bg-black/20 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-48 h-48">
                <motion.circle
                    cx="50" cy="50" r="40"
                    fill="none" stroke="#8A2BE2" strokeWidth="20"
                    strokeDasharray="251"
                    strokeDashoffset="251" // 251 is roughly 2*PI*40
                    initial={{ strokeDashoffset: 251 }}
                    whileInView={{ strokeDashoffset: 160 }} // Show part
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0 }}
                    transform="rotate(-90 50 50)"
                />
                <motion.circle
                    cx="50" cy="50" r="40"
                    fill="none" stroke="#00E699" strokeWidth="20"
                    strokeDasharray="251"
                    strokeDashoffset="251"
                    initial={{ strokeDashoffset: 251 }}
                    whileInView={{ strokeDashoffset: 200 }} // Show smaller part
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    transform="rotate(45 50 50)"
                />
                <motion.circle
                    cx="50" cy="50" r="40"
                    fill="none" stroke="#00F0FF" strokeWidth="20"
                    strokeDasharray="251"
                    strokeDashoffset="251"
                    initial={{ strokeDashoffset: 251 }}
                    whileInView={{ strokeDashoffset: 140 }} // Show largest part
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    transform="rotate(120 50 50)"
                />
            </svg>
        </div>
    )
}

const AccessAnimation = () => {
    return (
        <div className="relative h-full w-full bg-black/20 flex items-center justify-center">
            <div className="relative">
                {/* Scale Balance Beam */}
                <motion.div
                    className="w-40 h-1 bg-white/20 rounded-full"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Pans */}
                    <div className="absolute left-0 top-0 w-12 h-12 border-2 border-white/20 rounded-b-xl translate-y-4 -translate-x-1/2 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#00F0FF] blur-sm opacity-50" />
                    </div>
                    <div className="absolute right-0 top-0 w-12 h-12 border-2 border-white/20 rounded-b-xl translate-y-4 translate-x-1/2 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#8A2BE2] blur-sm opacity-50" />
                    </div>
                </motion.div>
                {/* Base */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-16 bg-white/10 mx-auto">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/10" />
                </div>
            </div>
        </div>
    )
}

const capabilities = [
    {
        title: 'Real Market Data',
        description: 'Matches track live spot prices from trusted data sources.',
        gradientFrom: '#00F0FF',
        gradientTo: '#00E699',
        animation: RealMarketData,
    },
    {
        title: 'Free Entry Matches',
        description: 'Compete and earn rewards in zero-cost matches designed to help players build skill before entering premium competition.',
        gradientFrom: '#8A2BE2',
        gradientTo: '#00F0FF',
        animation: FreeEntryAnimation,
    },
    {
        title: 'Transparent Rankings',
        description: 'Clear performance logic with deterministic outcomes.',
        gradientFrom: '#8A2BE2',
        gradientTo: '#00F0FF',
        animation: RankAnimation,
    },
    {
        title: 'Time-Boxed Matches',
        description: 'Fixed durations ensure equal conditions for all players.',
        gradientFrom: '#00E699',
        gradientTo: '#8A2BE2',
        animation: TimerAnimation,
    },
    {
        title: 'Portfolio-Based Gameplay',
        description: 'Strategic allocation matters more than single predictions.',
        gradientFrom: '#8A2BE2',
        gradientTo: '#00E699',
        animation: PieAnimation,
    },
    {
        title: 'Equal Market Access',
        description: 'Every player competes on the same assets, prices, and rules.',
        gradientFrom: '#00F0FF',
        gradientTo: '#8A2BE2',
        animation: AccessAnimation,
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
        <div className="w-full py-20" id='core-product'>
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

                    <h2 className="text-4xl sm:text-5xl font-bold mb-2 leading-tight">
                        Built for Fair,{' '}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00E699] bg-clip-text text-transparent">
                                Skill-Based Competition
                            </span>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00E699]"
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
                        className="flex gap-6 pl-[10vw]"
                    >
                        {capabilities.map((Card, index) => {
                            const AnimationComponent = Card.animation;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="relative flex-shrink-0 w-[85vw] md:w-[500px] h-[380px] rounded-3xl overflow-hidden bg-[#18181b]/90 backdrop-blur-2xl border border-white/20 cursor-pointer group hover:border-white/40 hover:shadow-glow-sm transition-all"
                                >
                                    {/* Background glow on hover */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at center, ${Card.gradientFrom}10, transparent 70%)`
                                        }}
                                    />

                                    <div className="h-full flex flex-col md:flex-row">
                                        {/* Animation Side (was Image) */}
                                        <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                                            <AnimationComponent />

                                            {/* Floating number */}
                                            <div
                                                className="absolute top-4 left-4 text-6xl font-black opacity-40 z-0"
                                                style={{
                                                    color: Card.gradientFrom,
                                                }}
                                            >
                                                0{index + 1}
                                            </div>
                                        </div>

                                        {/* Text Side */}
                                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">

                                            <motion.h3
                                                className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10"
                                                initial={{ x: -10, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <span className="text-transparent bg-clip-text" style={{
                                                    backgroundImage: `linear-gradient(135deg, ${Card.gradientFrom}, ${Card.gradientTo})`,
                                                }}>
                                                    {Card.title}
                                                </span>
                                            </motion.h3>

                                            <motion.p
                                                className="text-sm md:text-base text-white/60 leading-relaxed relative z-10"
                                                initial={{ x: -10, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                {Card.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
