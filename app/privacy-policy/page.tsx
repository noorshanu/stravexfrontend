"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
    {
        title: '1. Information We Collect',
        content: (
            <>
                <h3 className="text-base font-semibold text-white/70 mb-2">1.1 Information You Provide</h3>
                <p>We may collect information you voluntarily provide, including:</p>
                <ul>
                    <li>Username or profile information</li>
                    <li>Email address or contact details</li>
                    <li>Wallet addresses or blockchain identifiers</li>
                    <li>Communications with support or the platform</li>
                </ul>

                <h3 className="text-base font-semibold text-white/70 mt-5 mb-2">1.2 Automatically Collected Information</h3>
                <p>When you use Stravex, certain information may be collected automatically, including:</p>
                <ul>
                    <li>Device and browser information</li>
                    <li>IP address and technical logs</li>
                    <li>Platform activity and match participation data</li>
                    <li>Interaction data and usage analytics</li>
                </ul>

                <h3 className="text-base font-semibold text-white/70 mt-5 mb-2">1.3 Blockchain Data</h3>
                <p>Because Stravex may interact with blockchain systems:</p>
                <ul>
                    <li>Wallet addresses and transaction data may be publicly visible</li>
                    <li>Blockchain records are immutable and not controlled by Stravex</li>
                    <li>Users are responsible for managing their own wallet privacy</li>
                </ul>
            </>
        ),
    },
    {
        title: '2. How We Use Information',
        content: (
            <>
                <p>We use collected data to:</p>
                <ul>
                    <li>Operate and improve the platform</li>
                    <li>Facilitate matches and rankings</li>
                    <li>Maintain fairness and prevent abuse</li>
                    <li>Provide user support</li>
                    <li>Analyze product performance and user behavior</li>
                    <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-3">Stravex does not sell personal data to third parties.</p>
            </>
        ),
    },
    {
        title: '3. AI and Analytics Usage',
        content: (
            <>
                <p>Stravex may use aggregated or anonymized data to:</p>
                <ul>
                    <li>Improve platform performance</li>
                    <li>Analyze competitive behavior</li>
                    <li>Optimize AI agent functionality</li>
                    <li>Enhance fairness and matchmaking</li>
                </ul>
                <p className="mt-3">AI systems do not access private user information beyond what is required for platform functionality.</p>
            </>
        ),
    },
    {
        title: '4. Cookies and Tracking',
        content: (
            <>
                <p>We may use cookies or similar technologies to:</p>
                <ul>
                    <li>Improve user experience</li>
                    <li>Understand platform usage</li>
                    <li>Maintain session functionality</li>
                    <li>Enhance security</li>
                </ul>
                <p className="mt-3">You may disable cookies through your browser settings, but some features may be affected.</p>
            </>
        ),
    },
    {
        title: '5. Data Sharing',
        content: (
            <>
                <p>We may share information only when necessary:</p>
                <ul>
                    <li>Service providers supporting platform operations</li>
                    <li>Analytics or infrastructure partners</li>
                    <li>Legal or regulatory authorities when required by law</li>
                </ul>
                <p className="mt-3">We do not sell or rent user data.</p>
            </>
        ),
    },
    {
        title: '6. Data Storage and Security',
        content: (
            <>
                <p>We implement reasonable technical and organizational measures to protect information.</p>
                <p className="mt-3 font-medium text-white/70">However, users acknowledge that:</p>
                <ul>
                    <li>No system is completely secure</li>
                    <li>Internet transmissions carry inherent risks</li>
                    <li>Blockchain transactions cannot be reversed or deleted</li>
                </ul>
            </>
        ),
    },
    {
        title: '7. Data Retention',
        content: (
            <>
                <p>We retain data only as long as necessary to:</p>
                <ul>
                    <li>Operate the platform</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes or enforce agreements</li>
                </ul>
                <p className="mt-3">Aggregated or anonymized data may be retained indefinitely for analytics purposes.</p>
            </>
        ),
    },
    {
        title: '8. User Rights',
        content: (
            <>
                <p>Depending on applicable laws, users may have rights to:</p>
                <ul>
                    <li>Request access to personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent where applicable</li>
                </ul>
                <p className="mt-3">Requests may be submitted through official support channels.</p>
            </>
        ),
    },
    {
        title: '9. Third-Party Services',
        content: (
            <>
                <p>Stravex may integrate with third-party services or wallets.</p>
                <p className="mt-3">We are not responsible for the privacy practices of external platforms.</p>
                <p className="mt-2">Users should review third-party privacy policies separately.</p>
            </>
        ),
    },
    {
        title: '10. International Users',
        content: (
            <p>Stravex operates globally. By using the platform, you acknowledge that data may be processed across multiple jurisdictions.</p>
        ),
    },
    {
        title: '11. Children&apos;s Privacy',
        content: (
            <>
                <p>Stravex is not intended for individuals under 18 years of age.</p>
                <p className="mt-3">We do not knowingly collect data from minors.</p>
            </>
        ),
    },
    {
        title: '12. Changes to This Policy',
        content: (
            <>
                <p>We may update this Privacy Policy periodically.</p>
                <p className="mt-3">Continued use of Stravex after updates constitutes acceptance of the revised policy.</p>
            </>
        ),
    },
    {
        title: '13. Governing Law',
        content: (
            <p>This Privacy Policy shall be governed by and interpreted in accordance with the laws of the British Virgin Islands.</p>
        ),
    },
    {
        title: '14. Contact',
        content: (
            <>
                <p>For privacy-related questions or requests:</p>
                <a href="mailto:contact@stravex.network" className="inline-block mt-2 text-[#00F0FF] hover:text-[#00F0FF]/80 transition-colors font-medium">
                    contact@stravex.network
                </a>
            </>
        ),
    },
]

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-12 pb-20" style={{ backgroundColor: '#0a0a0f' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">
                            Legal
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                            Privacy Policy
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-lg text-white/40">
                            <span>Effective Date: 15 February 2026</span>
                            {/* <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>British Virgin Islands</span> */}
                        </div>
                    </motion.div>

                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-12 p-6 sm:p-8 rounded-2xl border border-white/[0.06]"
                        style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                    >
                        <p className="text-white/60 leading-relaxed">
                            Stravex (&ldquo;Stravex&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how information is collected, used, stored, and protected when you access or use the Stravex platform and related services.
                        </p>
                        <p className="text-white/60 leading-relaxed mt-3">
                            By accessing or using Stravex, you agree to this Privacy Policy.
                        </p>
                    </motion.div>

                    {/* Sections */}
                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="p-6 sm:p-8 rounded-2xl border border-white/[0.06]"
                                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                            >
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                    {section.title}
                                </h2>
                                <div className="text-white/50 leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:text-white/50">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default PrivacyPolicy