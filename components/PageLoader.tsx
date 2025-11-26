import { motion } from 'framer-motion';

export default function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-brand-dark"
        >
            <div className="relative">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-16 h-16"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325.77 340.66" className="w-full h-full">
                        <g id="a" />
                        <g id="b">
                            <g id="c">
                                <g>
                                    <polygon points="127.09 .25 99.46 85.28 27.88 .25 127.09 .25" fill="#10b981" />
                                    <polygon points="27.88 .25 99.46 85.28 .25 85.28 27.88 .25" fill="#065f46" />
                                </g>
                                <g>
                                    <polygon points="127.1 .25 226.31 .25 198.68 85.28 127.1 .25" fill="#34d399" />
                                    <polygon points="127.1 .25 198.68 85.28 99.47 85.28 127.1 .25" fill="#34d399" />
                                </g>
                                <g>
                                    <polygon points="325.52 .25 297.89 85.29 226.31 .25 325.52 .25" fill="#10b981" />
                                    <polygon points="226.31 .25 297.89 85.29 198.68 85.29 226.31 .25" fill="#065f46" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </motion.div>
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-center mt-4 text-brand-accent font-medium"
                >
                    Loading...
                </motion.p>
            </div>
        </motion.div>
    );
}
