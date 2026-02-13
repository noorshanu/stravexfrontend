"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Sparkles, X } from "lucide-react";

interface ComingSoonPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ComingSoonPopup({ isOpen, onClose }: ComingSoonPopupProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center"
                    >
                        {/* Popup Card */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12 max-w-md w-full mx-4 shadow-2xl"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Animated background glow */}
                            <div className="absolute inset-0 -z-10 opacity-30">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                    className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                                />
                            </div>

                            {/* Animated Chef Hat Icon */}
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        rotate: { duration: 2, repeat: Infinity },
                                        y: { duration: 1.5, repeat: Infinity },
                                    }}
                                    className="relative"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border border-white/10">
                                        <ChefHat className="w-10 h-10 text-primary" />
                                    </div>

                                    {/* Sparkles */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute -top-2 -right-2"
                                    >
                                        <Sparkles className="w-6 h-6 text-accent" />
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -bottom-1 -left-2"
                                    >
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Title */}
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl sm:text-3xl font-bold text-center mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                            >
                                Dev is Cooking
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="text-accent"
                                >
                                    ...
                                </motion.span>
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-400 text-center mb-6"
                            >
                                This feature is currently in development. Stay tuned for something amazing!
                            </motion.p>

                            {/* Animated progress bar */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden"
                            >
                                <motion.div
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                                />
                            </motion.div>

                            {/* Close Button */}
                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                onClick={onClose}
                                className="mt-8 w-full bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 text-white font-semibold py-3 rounded-lg border border-white/10 transition-all duration-300"
                            >
                                Got it!
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
