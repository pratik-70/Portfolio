import { motion } from "framer-motion";
import React from "react";

const floaters = [
  { left: "6%", top: "14%", size: 8, delay: 0, duration: 9 },
  { left: "14%", top: "36%", size: 10, delay: 0.8, duration: 11 },
  { left: "22%", top: "62%", size: 7, delay: 1.3, duration: 10 },
  { left: "30%", top: "24%", size: 9, delay: 0.2, duration: 12 },
  { left: "38%", top: "50%", size: 6, delay: 1.1, duration: 9 },
  { left: "46%", top: "74%", size: 8, delay: 1.8, duration: 11 },
  { left: "54%", top: "18%", size: 10, delay: 0.5, duration: 10 },
  { left: "62%", top: "44%", size: 7, delay: 1.6, duration: 12 },
  { left: "70%", top: "68%", size: 9, delay: 0.9, duration: 11 },
  { left: "78%", top: "28%", size: 6, delay: 1.4, duration: 10 },
  { left: "86%", top: "56%", size: 8, delay: 0.4, duration: 12 },
  { left: "92%", top: "80%", size: 7, delay: 1.2, duration: 9 },
];

export const SubtleFloatBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      <motion.div
        className="absolute -top-20 left-[8%] h-72 w-72 rounded-full bg-sky-400/12 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], opacity: [0.16, 0.24, 0.16] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[28%] right-[10%] h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -28, 0], opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[16%] left-[18%] h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -20, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-4rem] right-[20%] h-80 w-80 rounded-full bg-violet-400/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 16, 0], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[18%] left-[42%] h-24 w-24 rounded-full border border-sky-300/25"
        animate={{ y: [0, -10, 0], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[24%] right-[36%] h-16 w-16 rounded-full border border-fuchsia-300/20"
        animate={{ y: [0, 8, 0], opacity: [0.15, 0.26, 0.15] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {floaters.map((f, i) => (
        <motion.div
          key={`floater-${i}`}
          className="absolute rounded-full bg-cyan-300/30 shadow-[0_0_12px_rgba(103,232,249,0.35)]"
          style={{ left: f.left, top: f.top, width: f.size, height: f.size }}
          animate={{ y: [0, -14, 0], x: [0, 6, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SubtleFloatBackground;
