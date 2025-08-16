import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8, // Delay after navbar animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        pt: { xs: 10, md: 0 },
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%" }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "90%" } }}>
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 600,
                mb: 2,
                letterSpacing: "0.05em",
              }}
            >
              Hello, I'm
            </Typography>
          </motion.div>

          {/* Main Name */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                mb: 2,
                fontSize: {
                  xs: "clamp(2.5rem, 12vw, 4.5rem)",
                  md: "clamp(4rem, 10vw, 7rem)",
                },
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              SACHIN
              <br />
              MACWAN
            </Typography>
          </motion.div>

          {/* Job Title */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 600,
                mb: 4,
                fontSize: {
                  xs: "clamp(1.2rem, 6vw, 2rem)",
                  md: "clamp(1.8rem, 4vw, 2.8rem)",
                },
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                fontFamily: `"Inter", "Roboto", sans-serif`,
              }}
            >
              Full-Stack Developer & Fintech Engineer
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: { xs: "100%", md: "600px" },
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                lineHeight: 1.6,
                mb: 5,
                fontFamily: `"Inter", "Roboto", sans-serif`,
              }}
            >
              I create secure, scalable digital solutions for the fintech
              industry. Currently building payment systems at{" "}
              <Box
                component="a"
                href="https://pay.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontWeight: 700,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: theme.palette.primary.main,
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                Pay.com.au
              </Box>
              .
            </Typography>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Button
                href="#work"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.background.default,
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  fontFamily: theme.typography.fontFamily,
                  textTransform: "none",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    transform: "translateY(-3px)",
                    boxShadow: `0 12px 30px ${theme.palette.primary.main}40`,
                  },
                }}
              >
                View My Work
              </Button>

              <Button
                href="mailto:sachin.macwan94@gmail.com"
                variant="outlined"
                size="large"
                sx={{
                  color: theme.palette.text.primary,
                  borderColor: theme.palette.text.primary,
                  borderWidth: "2px",
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  fontFamily: theme.typography.fontFamily,
                  textTransform: "none",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Floating Code Block */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "10%", md: "15%" },
            right: { xs: "-5%", md: "5%" },
            width: { xs: "250px", md: "350px" },
            opacity: { xs: 0.1, md: 0.15 },
            pointerEvents: "none",
            zIndex: -1,
            display: { xs: "none", md: "block" },
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                p: 3,
                fontFamily: theme.typography.fontFamily,
                fontSize: "0.9rem",
                color: theme.palette.text.secondary,
              }}
            >
              <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                // Current Status
              </Box>
              <Box sx={{ mb: 1 }}>const developer = &#123;</Box>
              <Box sx={{ ml: 2, mb: 1 }}>name: "Sachin Macwan",</Box>
              <Box sx={{ ml: 2, mb: 1 }}>role: "Full-Stack Dev",</Box>
              <Box sx={{ ml: 2, mb: 1 }}>location: "Melbourne",</Box>
              <Box sx={{ ml: 2, mb: 1 }}>status: "Available"</Box>
              <Box>&#125;;</Box>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
}
