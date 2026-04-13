import React, { useEffect } from "react";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const theme = useTheme();
  const color = theme.palette.primary.main;

  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        background: `radial-gradient(ellipse at center, ${color}0c 0%, transparent 65%), ${theme.palette.background.default}`,
      }}
    >
      <motion.svg
        width="240"
        height="120"
        viewBox="0 0 178 98"
        fill="none"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* S */}
        <motion.path
          d="M 68 20 C 28 20 22 30 22 40 C 22 52 68 56 68 68 C 68 80 22 80 22 76"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* M */}
        <motion.path
          d="M 90 80 L 90 20 L 122 52 L 154 20 L 154 80"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Accent underline sweeps in after both letters */}
        <motion.line
          x1="22"
          y1="91"
          x2="154"
          y2="91"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.35}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
        />
      </motion.svg>
    </motion.div>
  );
};
