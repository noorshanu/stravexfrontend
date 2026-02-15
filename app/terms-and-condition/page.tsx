"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
    {
        title: '1. Platform Overview',
        content: (
            <>
                <p>Stravex is a skill-based digital competition platform where users construct virtual portfolios and participate in time-boxed market prediction matches.</p>
                <p className="mt-3 font-medium text-white/70">Stravex is:</p>
                <ul>
                    <li>A competitive skill platform</li>
                    <li>A simulation environment using real market data</li>
                    <li>Not a brokerage, exchange, or financial advisor</li>
                </ul>
                <p className="mt-3">No guarantees of profit or financial return are provided.</p>
            </>
        ),
    },
    {
        title: '2. Eligibility',
        content: (
            <>
                <p>By using Stravex, you confirm that:</p>
                <ul>
                    <li>You are at least 18 years old or legal age in your jurisdiction</li>
                    <li>Participation is lawful in your location</li>
                    <li>You understand the risks associated with crypto-related markets</li>
                    <li>You are responsible for complying with local laws</li>
                </ul>
                <p className="mt-3">Stravex may restrict access to users from certain jurisdictions without prior notice.</p>
            </>
        ),
    },
    {
        title: '3. Skill-Based Competition Disclaimer',
        content: (
            <>
                <p>Stravex is designed as a skill-based competitive platform.</p>
                <p className="mt-3 font-medium text-white/70">Outcomes are determined by:</p>
                <ul>
                    <li>User decision-making</li>
                    <li>Portfolio strategy</li>
                    <li>Real market price movements</li>
                </ul>
                <p className="mt-3">Stravex does not involve randomness, chance-based mechanics, or gambling systems.</p>
                <p className="mt-2">Participation should be viewed as competitive gameplay and performance benchmarking.</p>
            </>
        ),
    },
    {
        title: '4. No Financial Advice',
        content: (
            <>
                <p>All information, rankings, AI agent activity, or market data provided on the platform is for informational and competitive purposes only.</p>
                <p className="mt-3 font-medium text-white/70">Stravex:</p>
                <ul>
                    <li>Does not provide financial advice</li>
                    <li>Does not recommend assets or strategies</li>
                    <li>Does not guarantee outcomes</li>
                </ul>
                <p className="mt-3">Users are solely responsible for their decisions.</p>
            </>
        ),
    },
    {
        title: '5. Risk Disclosure',
        content: (
            <>
                <p>By using Stravex, you acknowledge that:</p>
                <ul>
                    <li>Cryptocurrency markets are volatile and unpredictable</li>
                    <li>Market performance may change rapidly</li>
                    <li>Past performance does not indicate future outcomes</li>
                    <li>Participation may result in loss of rewards or entry fees</li>
                </ul>
                <p className="mt-3">You accept all risks associated with participation.</p>
            </>
        ),
    },
    {
        title: '6. AI Agents and Automated Participants',
        content: (
            <>
                <p>Stravex may include artificial intelligence agents participating in matches.</p>
                <p className="mt-3 font-medium text-white/70">AI agents:</p>
                <ul>
                    <li>Operate under the same market conditions as users</li>
                    <li>Do not receive privileged access or hidden advantages</li>
                    <li>Exist solely to provide benchmarking and competitive experiences</li>
                </ul>
                <p className="mt-3">Stravex makes no claims regarding AI accuracy or profitability.</p>
            </>
        ),
    },
    {
        title: '7. Free and Premium Matches',
        content: (
            <>
                <p>Stravex may offer:</p>
                <ul>
                    <li>Free Entry Matches allowing participation without payment</li>
                    <li>Premium Matches with entry requirements or enhanced rewards</li>
                </ul>
                <p className="mt-3">Participation in any match does not guarantee winnings or rewards.</p>
                <p className="mt-2">Reward distribution rules are defined within the platform.</p>
            </>
        ),
    },
    {
        title: '8. Decentralized and Experimental Nature',
        content: (
            <>
                <p>Stravex operates within an evolving digital ecosystem and may integrate decentralized technologies.</p>
                <p className="mt-3 font-medium text-white/70">You acknowledge:</p>
                <ul>
                    <li>Platform mechanics may evolve over time</li>
                    <li>Features may be experimental</li>
                    <li>Smart contracts or automated systems may involve technical risks</li>
                </ul>
                <p className="mt-3">Use of the platform is at your own discretion.</p>
            </>
        ),
    },
    {
        title: '9. No Custody or Financial Services',
        content: (
            <>
                <p>Stravex does not:</p>
                <ul>
                    <li>Hold user funds as a financial institution</li>
                    <li>Act as a bank or custodian</li>
                    <li>Provide investment services</li>
                </ul>
                <p className="mt-3">Any digital assets interacted with remain the user&apos;s responsibility.</p>
            </>
        ),
    },
    {
        title: '10. Limitation of Liability',
        content: (
            <>
                <p>To the maximum extent permitted by law:</p>
                <p className="mt-3">Stravex, its founders, team members, and affiliates shall not be liable for:</p>
                <ul>
                    <li>Financial loss</li>
                    <li>Trading outcomes</li>
                    <li>Market volatility</li>
                    <li>Platform interruptions</li>
                    <li>Technical errors or data inaccuracies</li>
                    <li>User decisions based on platform information</li>
                </ul>
                <p className="mt-3">Use of the platform is entirely at your own risk.</p>
            </>
        ),
    },
    {
        title: '11. User Conduct',
        content: (
            <>
                <p>Users agree not to:</p>
                <ul>
                    <li>Exploit vulnerabilities or manipulate systems</li>
                    <li>Use bots or automation unless explicitly allowed</li>
                    <li>Engage in fraud or abusive behavior</li>
                    <li>Violate applicable laws</li>
                </ul>
                <p className="mt-3">Stravex reserves the right to suspend accounts without notice.</p>
            </>
        ),
    },
    {
        title: '12. Intellectual Property',
        content: (
            <>
                <p>All platform content, branding, and technology remain the property of Stravex unless otherwise stated.</p>
                <p className="mt-3">Users may not copy, reproduce, or redistribute platform materials without permission.</p>
            </>
        ),
    },
    {
        title: '13. Service Availability',
        content: (
            <>
                <p>Stravex does not guarantee uninterrupted access.</p>
                <p className="mt-3">The platform may be updated, modified, or suspended at any time.</p>
            </>
        ),
    },
    {
        title: '14. Changes to Terms',
        content: (
            <>
                <p>Stravex may modify these Terms at any time.</p>
                <p className="mt-3">Continued use after updates constitutes acceptance.</p>
            </>
        ),
    },
    {
        title: '15. Governing Law',
        content: (
            <p>These Terms shall be governed according to applicable laws based on the jurisdiction of British Virgin Island.</p>
        ),
    },
    {
        title: '16. Contact',
        content: (
            <>
                <p>For questions regarding these Terms, contact:</p>
                <a href="mailto:contact@stravex.network" className="inline-block mt-2 text-[#00F0FF] hover:text-[#00F0FF]/80 transition-colors font-medium">
                    contact@stravex.network
                </a>
            </>
        ),
    },
]

const TermsAndCondition = () => {
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
                            Terms and Conditions
                        </h1>
                        <p className="text-lg text-white/40 max-w-xl mx-auto">
                            Effective Date: 15th Feb 2026
                        </p>
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
                            Welcome to Stravex. These Terms and Conditions govern your access to and use of the Stravex platform and services. By using Stravex, you agree to be bound by these Terms.
                        </p>
                        <p className="text-white/60 leading-relaxed mt-3">
                            If you do not agree, you must discontinue use immediately.
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

export default TermsAndCondition