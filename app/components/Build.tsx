"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaShieldAlt, FaLightbulb } from 'react-icons/fa'

const Build = () => {
    const values = [
        {
            icon: FaBrain,
            title: 'Decision-Making',
            description: 'AI-powered insights for smarter choices',
        },
        {
            icon: FaShieldAlt,
            title: 'Risk Assessment',
            description: 'Advanced algorithms predict market volatility',
        },
        {
            icon: FaLightbulb,
            title: 'Market Insight',
            description: 'Real-time data analysis at your fingertips',
        },
    ]

    return (
        <section
            className="relative py-24 sm:py-32 overflow-hidden"

        >
        

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">
                        Core Values
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                        Built for Those Who Value
                    </h2>

                    <p className="text-lg text-white/40 max-w-xl mx-auto">
                        Precision tools designed for the modern investor
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {values.map((value, index) => {
                        const IconComponent = value.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                whileHover={{ y: -4 }}
                                className="group"
                            >
                                <div
                                    className="relative h-full p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/[0.08]"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                                    >
                                        <IconComponent className="text-xl text-white/70" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-white/40 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-6 py-4 rounded-xl border border-white/[0.06]" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                        <p className="text-white/50 text-sm">
                            A structured environment to compete on skill
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Build