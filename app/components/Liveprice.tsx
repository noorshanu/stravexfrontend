'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CryptoPrice {
    id: string
    symbol: string
    current_price: number
    price_change_percentage_24h: number
}

const cryptoIds = ['bitcoin', 'ethereum', 'solana', 'avalanche-2', 'arbitrum']

const Liveprice = () => {
    const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoIds.join(',')}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
                )
                const data = await response.json()
                setCryptoPrices(data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching crypto prices:', error)
                setIsLoading(false)
            }
        }

        fetchPrices()
        const interval = setInterval(fetchPrices, 30000) // Update every 30 seconds

        return () => clearInterval(interval)
    }, [])

    const formatPrice = (price: number) => {
        if (price >= 1000) {
            return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
        return `$${price.toFixed(2)}`
    }

    const formatPercentage = (percentage: number) => {
        const sign = percentage >= 0 ? '+' : ''
        return `${sign}${percentage.toFixed(2)}%`
    }

    if (isLoading) {
        return (
            <div className="w-full overflow-hidden">
                <div className="flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Loading prices...</div>
                </div>
            </div>
        )
    }

    // Duplicate the array for seamless infinite scroll
    const duplicatedPrices = [...cryptoPrices, ...cryptoPrices, ...cryptoPrices]

    return (
        <div className="w-full  py-3 overflow-hidden relative max-w-6xl mx-auto">
            <div className="relative">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{
                        x: [0, -33.33 + '%'], // Move by one third (since we tripled the array)
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedPrices.map((crypto, index) => (
                        <div
                            key={`${crypto.id}-${index}`}
                            className="flex items-center gap-3 px-4 rounded-full  border py-1 border-[#3e81c48b]"
                        >
                            <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                                {crypto.symbol}
                            </span>
                            <span className="text-white font-semibold text-base">
                                {formatPrice(crypto.current_price)}
                            </span>
                            <span
                                className={`font-medium text-sm ${crypto.price_change_percentage_24h >= 0
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                    }`}
                            >
                                {formatPercentage(crypto.price_change_percentage_24h)}
                            </span>
                            <span className="text-gray-600">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient overlays for fade effect */}
            
        </div>
    )
}

export default Liveprice