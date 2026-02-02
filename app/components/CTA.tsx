"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaTrophy } from 'react-icons/fa'

const CTA = () => {
    return (
        <section id="cta" className="relative py-20 sm:py-28 overflow-hidden">
            {/* Subtle top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-white/[0.06]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                        Start Competing on Market Skill
                    </h2>

                    <p className="text-base sm:text-lg text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join Stravex and experience crypto markets as a gamified prediction competition, where performance defines success.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Primary Button */}
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-3 px-8 py-4 bg-white text-[#191a23] font-semibold rounded-xl transition-all duration-300 hover:bg-white/90"
                        >
                            <FaPlay className="text-sm" />
                            <span>Start Practice Match</span>
                        </motion.button>

                        {/* Secondary Button */}
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-white/[0.12] transition-all duration-300 hover:border-white/[0.25] hover:bg-white/[0.03]"
                        >
                            <FaTrophy className="text-sm text-white/60" />
                            <span>Join a Live Match</span>
                        </motion.button>
                    </div>

                    {/* Trust indicator */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-8 text-sm text-white/30"
                    >
                        No credit card required • Free to start
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA