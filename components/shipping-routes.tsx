import { motion } from "framer-motion";

export function ShippingRoutes() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M420 420 C650 280 920 250 1180 420"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="12 10"
        fill="none"
        opacity="0.35"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.circle
        r="5"
        fill="#fff"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          offsetPath:
            'path("M420 420 C650 280 920 250 1180 420")',
        }}
      />
    </svg>
  );
}