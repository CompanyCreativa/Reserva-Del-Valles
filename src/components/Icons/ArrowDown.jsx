import { motion } from "motion/react";
export default function ArrowDown({ className }) {
  return (
    <motion.svg
      width="15"
      height="22"
      viewBox="0 0 15 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ y: -0 }}
      animate={{ y: 5 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <path
        d="M7.1875 20.7999L7.1875 0.999878"
        stroke="#FFFBFB"
        stroke-width="1.85625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.375 14.6126C13.375 14.6126 8.81798 20.8 7.18745 20.8C5.55693 20.8001 1 14.6125 1 14.6125"
        stroke="#FFFBFB"
        stroke-width="1.85625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}
