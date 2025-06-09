import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const style: SxProps<Theme> = {
    position: "relative",
    top: theme.spacing(1),

    minHeight: "88vh",
    width: "100%",
    maxWidth: "100%",
    mb: theme.spacing(5),
    //background: `linear-gradient(to bottom, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
    background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
    border: `1px solid ${borderColor || theme.palette.background.paper}`,
    paddingTop: theme.spacing(2),
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    ...sx,
  };
  const motionVariant = {
    hidden: {
      opacity: 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: animationConfig.delay || 0.1,
        duration: animationConfig.duration || 0.9,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        key={id}
        layoutId="uniqueId"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container
          sx={{ height: height || "100vh", padding: 0, paddingTop: 7 }}
          maxWidth={false}
          id={id}
        >
          {animateOnScroll ? (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={motionVariant}
            >
              <Box sx={style}>{children}</Box>
            </motion.div>
          ) : (
            <Box sx={style}>{children}</Box>
          )}
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}
