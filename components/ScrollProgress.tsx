import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed left-0 right-0 top-0 z-[100] h-0.5 origin-left bg-brand-accent"
            style={{ scaleX }}
        />
    );
}
