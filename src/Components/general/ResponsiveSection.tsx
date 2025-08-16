import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Theme } from "@mui/material/styles";

type secProps = {
  children: any;
  height?: any;
  id?: any;
  backgroundColor?: string;
  borderColor?: string;
  sx?: SxProps<Theme>;
  animateOnScroll?: boolean;
  animationConfig?: {
    delay?: number;
    duration?: number;
  };
};

export default function ResponsiveSection({
  children,
  height,
  animateOnScroll = false,
  animationConfig = {},
  borderColor,
  sx,
  id,
}: secProps) {
  const theme = useTheme();
  const ref = useRef(null);

  // Safe intersection observer settings
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -10% 0px",
    amount: 0.1,
  });

  const style: SxProps<Theme> = {
    position: "relative",
    minHeight: "auto",
    width: "100%",
    maxWidth: "100%",
    mb: 0,
    background: `linear-gradient(135deg, ${theme.palette.background.paper}40 0%, ${theme.palette.background.default}60 100%)`,
    backdropFilter: "blur(10px)",
    border: `1px solid ${borderColor || theme.palette.divider}20`,
    borderRadius: 0,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    overflow: "hidden",
    ...sx,
  };

  // Simplified animation variants
  const motionVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: animationConfig.delay || 0.1,
        duration: animationConfig.duration || 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Container
      sx={{
        height: id === "home" ? height || "100vh" : "auto",
        padding: 0,
        paddingTop: 0,
        maxWidth: "100% !important",
        width: "100%",
      }}
      maxWidth={false}
      id={id}
    >
      {animateOnScroll ? (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={motionVariant}
          style={{
            width: "100%",
            willChange: "opacity, transform",
            transform: "translateZ(0)",
          }}
        >
          <Box sx={style}>{children}</Box>
        </motion.div>
      ) : (
        <Box sx={style}>{children}</Box>
      )}
    </Container>
  );
}
