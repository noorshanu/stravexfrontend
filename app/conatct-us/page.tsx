"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    const contactInfo = [
        { icon: FiMail, label: 'Email', value: 'support@stravex.com' },
        { icon: FiMapPin, label: 'Location', value: 'Global • Remote First' },
        { icon: FiClock, label: 'Response Time', value: 'Within 24 hours' },
    ]

    const socials = [
        { icon: FaTwitter, label: 'Twitter', href: '#' },
        { icon: FaDiscord, label: 'Discord', href: '#' },
        { icon: FaTelegram, label: 'Telegram', href: '#' },
    ]

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-12 pb-20" style={{ backgroundColor: '#0a0a0f' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">
                            Get in Touch
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                            Contact Us
                        </h1>
                        <p className="text-lg text-white/40 max-w-xl mx-auto">
                            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="lg:col-span-3"
                        >
                            <div
                                className="p-8 sm:p-10 rounded-2xl border border-white/[0.06]"
                                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-white/50 mb-2">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-white/[0.2] transition-colors"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-white/50 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-white/[0.2] transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/50 mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-white/[0.2] transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/50 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us more about your inquiry..."
                                            rows={5}
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-white/[0.2] transition-colors resize-none"
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0a0f] font-semibold rounded-xl transition-all duration-300 hover:bg-white/90"
                                    >
                                        <span>Send Message</span>
                                        <FiSend className="text-lg" />
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Info Cards */}
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon
                                return (
                                    <div
                                        key={index}
                                        className="p-6 rounded-2xl border border-white/[0.06]"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08]"
                                                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                                            >
                                                <IconComponent className="text-lg text-white/60" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white/40 mb-1">{info.label}</p>
                                                <p className="text-white font-medium">{info.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* Social Links */}
                            <div
                                className="p-6 rounded-2xl border border-white/[0.06]"
                                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                            >
                                <p className="text-sm text-white/40 mb-4">Connect with us</p>
                                <div className="flex gap-3">
                                    {socials.map((social, index) => {
                                        const IconComponent = social.icon
                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                whileHover={{ y: -2 }}
                                                className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/[0.08] hover:border-white/[0.15] transition-colors"
                                                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                                            >
                                                <IconComponent className="text-lg text-white/60" />
                                            </motion.a>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* FAQ Link */}
                            {/* <div
                                id="contact-form"
                                className="p-6 rounded-2xl border border-white/[0.06] text-center"
                                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                            >
                                <p className="text-white/40 text-sm mb-2">Looking for quick answers?</p>
                                <a href="#faq-section" className="text-white font-medium hover:text-white/80 transition-colors">
                                    Check our FAQ →
                                </a>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </main>
            <div id="faq-section">
                <FAQ />
            </div>
            <Footer />
        </>
    )
}

export default ContactPage