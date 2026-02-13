"use client"

import React, { useEffect, useState } from 'react'

interface Star {
    id: number
    top: number
    left: number
    size: number
    animationClass: string
}

const BlinkingStars = () => {
    const [stars, setStars] = useState<Star[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const sizes = [1, 1, 2, 3, 4]
        const generatedStars: Star[] = []

        for (let i = 0; i < 60; i++) {
            const top = Math.floor(Math.random() * 100)
            const left = Math.floor(Math.random() * 100)
            const randomSize = sizes[Math.floor(Math.random() * sizes.length)]

            let animationClass = 'star1'
            if (i > 10 && i <= 20) animationClass = 'star2'
            else if (i > 20 && i <= 30) animationClass = 'star3'
            else if (i > 30 && i <= 40) animationClass = 'star4'
            else if (i > 40 && i <= 50) animationClass = 'star5'
            else if (i > 50) animationClass = 'star6'

            generatedStars.push({
                id: i,
                top,
                left,
                size: randomSize,
                animationClass
            })
        }

        setStars(generatedStars)
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            <style jsx global>{`
                @keyframes twinkle1 {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                @keyframes twinkle2 {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.1; }
                }
                @keyframes twinkle3 {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.8; }
                }
                @keyframes twinkle4 {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.9; }
                }
                @keyframes twinkle5 {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 0.2; }
                }
                @keyframes twinkle6 {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.7; }
                }
                .star1 { animation: twinkle1 3s ease-in-out infinite; }
                .star2 { animation: twinkle2 4s ease-in-out infinite; }
                .star3 { animation: twinkle3 2.5s ease-in-out infinite; }
                .star4 { animation: twinkle4 3.5s ease-in-out infinite; }
                .star5 { animation: twinkle5 2s ease-in-out infinite; }
                .star6 { animation: twinkle6 4.5s ease-in-out infinite; }
            `}</style>

            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className={star.animationClass}
                        style={{
                            position: 'absolute',
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            backgroundColor: '#1b8bfd',
                            borderRadius: '50%',
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default BlinkingStars
