import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-brand-dark overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
            </div>

            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass p-12 rounded-2xl border border-white/20 shadow-xl max-w-lg mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="text-9xl font-bold text-brand-accent mb-4"
                    >
                        404
                    </motion.div>

                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                        Oops! It seems you've ventured into the unknown. The page you're looking for doesn't exist or has been moved.
                    </p>

                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-brand-accent text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                        >
                            Return Home
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
