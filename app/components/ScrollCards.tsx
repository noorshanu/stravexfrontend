"use client";

import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function ScrollCards() {
    return (
        <div className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 pb-[120vh]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-32 text-white">Scroll to See the Magic</h2>

                <ScrollStack className="space-y-[70vh]">
                    <ScrollStackItem itemClassName="w-full h-[400px] rounded-3xl p-12 shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600">
                        <h2 className="text-5xl font-bold text-white mb-6">Feature One</h2>
                        <p className="text-2xl text-white/90 leading-relaxed">Experience seamless integration with our powerful API. Build faster, ship sooner, and scale effortlessly.</p>
                    </ScrollStackItem>

                    <ScrollStackItem itemClassName="w-full h-[400px] rounded-3xl p-12 shadow-2xl bg-gradient-to-br from-purple-600 to-pink-600">
                        <h2 className="text-5xl font-bold text-white mb-6">Feature Two</h2>
                        <p className="text-2xl text-white/90 leading-relaxed">Real-time analytics and insights at your fingertips. Make data-driven decisions with confidence.</p>
                    </ScrollStackItem>

                    <ScrollStackItem itemClassName="w-full h-[400px] rounded-3xl p-12 shadow-2xl bg-gradient-to-br from-pink-600 to-red-600">
                        <h2 className="text-5xl font-bold text-white mb-6">Feature Three</h2>
                        <p className="text-2xl text-white/90 leading-relaxed">Enterprise-grade security and compliance built-in. Your data is safe and protected, always.</p>
                    </ScrollStackItem>
                </ScrollStack>
            </div>
        </div>
    )
}
