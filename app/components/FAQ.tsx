"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

interface FAQItem {
    question: string
    answer: string
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs: FAQItem[] = [
        {
            question: "What is Stravex?",
            answer: "Stravex is the world's first AI-powered, gamified crypto prediction market. It allows you to build portfolios, enter live matches, and compete against humans and intelligent AI agents using real market performance data."
        },
        {
            question: "How do matches work?",
            answer: "Matches are time-boxed competitions where participants build crypto portfolios and compete based on real market performance. You can join live matches against other players or practice matches to hone your skills. Rankings are transparent and based purely on portfolio performance."
        },
        {
            question: "Do I need cryptocurrency to play?",
            answer: "No! Stravex is a prediction market game. You don't need to own actual cryptocurrency to participate. You compete by predicting which assets will perform best, not by trading real funds."
        },
        {
            question: "What makes Stravex different from traditional trading?",
            answer: "Unlike traditional trading where luck and capital size matter, Stravex focuses purely on skill. Everyone gets equal market access, level playing field, and competes based on their ability to predict market trends and allocate virtual capital effectively."
        },
        {
            question: "Can I compete against AI agents?",
            answer: "Yes! Stravex features intelligent AI agents trained on market data. You can choose to compete against humans only, AI agents only, or a mix of both to test your skills against different strategies."
        },
        {
            question: "How are rankings determined?",
            answer: "Rankings are 100% transparent and based on portfolio performance during matches. We track real-time market data to calculate returns, and leaderboards update dynamically to show how you stack up against competitors."
        },
        {
            question: "Is there a fee to join?",
            answer: "Stravex is free to start! You can join practice matches and explore the platform at no cost. Premium features and competitive tournaments may have entry fees, but core functionality is always accessible."
        },
        {
            question: "What crypto markets can I predict on?",
            answer: "Stravex supports major cryptocurrencies including BTC, ETH, SOL, SUI, and many more. We provide real market data for all supported assets, ensuring fair and accurate competition."
        },
        {
            question: "How long do matches last?",
            answer: "Match durations vary. Quick matches can last minutes to hours, while tournament-style competitions may run for days or weeks. Each match clearly displays its duration before you join."
        },
        {
            question: "Can I practice before competing?",
            answer: "Absolutely! We offer practice matches where you can learn the platform, test strategies, and build confidence before entering competitive live matches. Practice as much as you want—it's all part of the experience."
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-20" style={{ backgroundColor: '#0a0a0f' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">
                        Frequently Asked Questions
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Got Questions? We&apos;ve Got Answers
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        Everything you need to know about Stravex and how it works
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="rounded-2xl border border-white/[0.06] overflow-hidden"
                            style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                            >
                                <span className="text-white font-medium text-base sm:text-lg pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <FiChevronDown className="text-white/60 text-xl" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                                            <p className="text-white/60 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions? */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-12 text-center p-8 rounded-2xl border border-white/[0.06]"
                    style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                    <h3 className="text-xl font-semibold text-white mb-3">
                        Still have questions?
                    </h3>
                    <p className="text-white/40 mb-5">
                        Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
                    </p>
                    <a
                        href="mailto:contact@stravex.network"
                        className="inline-block px-6 py-3 bg-white text-[#0a0a0f] font-semibold rounded-xl hover:bg-white/90 transition-colors"
                    >
                        Contact Support
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ