import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing");

  const loadingTexts = [
    "Initializing",
    "Loading components",
    "Connecting systems",
    "Almost ready",
    "Welcome",
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + increment, 100);

        // Update text based on progress
        const textIndex = Math.floor(
          (newProgress / 100) * (loadingTexts.length - 1)
        );
        setCurrentText(loadingTexts[textIndex]);

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before hiding
        }

        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const LogoSVG = () => (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {/* Main outer frame */}
      <motion.path
        d="M20 20H100V100H20V20Z"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <motion.path
        d="M25 25H95V95H25V25Z"
        stroke={theme.palette.primary.main}
        strokeWidth="1"
        opacity="0.6"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
      />

      {/* Corner brackets */}
      {[
        { d: "M15 15V30M15 15H30", delay: 0.4 },
        { d: "M105 15V30M105 15H90", delay: 0.5 },
        { d: "M15 105V90M15 105H30", delay: 0.6 },
        { d: "M105 105V90M105 105H90", delay: 0.7 },
      ].map((bracket, index) => (
        <motion.path
          key={index}
          d={bracket.d}
          stroke={theme.palette.primary.main}
          strokeWidth="3"
          strokeLinecap="square"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.6,
            delay: bracket.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* S letter */}
      <motion.path
        d="M40 45H65C68 45 70 47 70 50C70 53 68 55 65 55H45C42 55 40 57 40 60C40 63 42 65 45 65H70"
        stroke={theme.palette.text.primary}
        strokeWidth="4"
        strokeLinecap="square"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
      />

      {/* M letter */}
      <motion.path
        d="M40 75V90M40 75L50 85L60 75V90M60 75L70 85L80 75V90"
        stroke={theme.palette.text.primary}
        strokeWidth="4"
        strokeLinecap="square"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeInOut" }}
      />

      {/* Central accent */}
      <motion.line
        x1="60"
        y1="35"
        x2="60"
        y2="40"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 1.3 }}
      />

      {/* Tech dots */}
      {[
        { cx: 35, cy: 35 },
        { cx: 85, cy: 35 },
        { cx: 35, cy: 85 },
        { cx: 85, cy: 85 },
      ].map((dot, index) => (
        <motion.circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r="1.5"
          fill={theme.palette.primary.main}
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
        />
      ))}
    </motion.svg>
  );

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        background: `
          radial-gradient(ellipse at center, ${theme.palette.primary.main}05 0%, transparent 70%),
          ${theme.palette.background.default}
        `,
      }}
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <LogoSVG />
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: "2rem" }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontWeight: 600,
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            textAlign: "center",
          }}
        >
          {currentText}
        </Typography>
      </motion.div>

      {/* Progress Bar */}
      <Box
        sx={{
          width: "300px",
          height: "3px",
          backgroundColor: `${theme.palette.text.secondary}20`,
          borderRadius: "2px",
          mt: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            borderRadius: "2px",
            width: "100%",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: `${progress - 100}%` }}
          transition={{ duration: 0.1 }}
        />

        {/* Glow effect */}
        <motion.div
          style={{
            position: "absolute",
            top: "-1px",
            right: "0",
            width: "20px",
            height: "5px",
            background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}80)`,
            borderRadius: "2px",
            filter: "blur(2px)",
          }}
          animate={{
            opacity: progress > 5 ? [0.5, 1, 0.5] : 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Box>

      {/* Progress Percentage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "0.9rem",
            mt: 1,
            letterSpacing: "0.05em",
          }}
        >
          {Math.round(progress)}%
        </Typography>
      </motion.div>

      {/* Floating particles */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            width: "3px",
            height: "3px",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50%",
            opacity: 0.4,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2,
            ease: "linear",
          }}
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
        />
      ))}
    </Box>
  );
};
