import { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  useTheme,
  Typography,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import pdf from "./New_frontend_v2.pdf";
import { AnimatePresence } from "framer-motion";

const NavList = [
  { name: "Home", link: "home", delay: 0 },
  { name: "Experience", link: "experience", delay: 0.1 },
  { name: "Work", link: "work", delay: 0.2 },
];

const MotionBox = motion(Box);
const MotionLink = motion.a;
export default function Navbar() {
  const theme = useTheme();
  const { navDelay, duration, easing } = (theme as any).animation;
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen((open) => !open);

  const tabVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: navDelay + customDelay,
        duration,
        ease: easing,
      },
    }),
  };

  function AnimatedMenuIcon({ isOpen }: { isOpen: boolean }) {
    const variant = {
      closed: {
        top: "0%",
        rotate: 0,
        opacity: 1,
        d1: "M 2 5 H 22",
        d2: "M 2 12 H 22",
        d3: "M 2 19 H 22",
      },
      open: {
        d1: "M 4 4 L 20 20",
        d2: "M 12 12 L 12 12", // invisible
        d3: "M 4 20 L 20 4",
      },
    };

    return (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: variant.closed.d1 },
            open: { d: variant.open.d1 },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: variant.closed.d2, opacity: 1 },
            open: { d: variant.open.d2, opacity: 0 },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: variant.closed.d3 },
            open: { d: variant.open.d3 },
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    );
  }

  return (
    <>
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 30,
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1300,
          height: "5%",
        }}
      >
        <Typography variant="h6" sx={{ color: "primary.main" }}></Typography>

        {/* Desktop nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {NavList.map(({ name, link, delay }) => (
            <MotionLink
              key={name}
              component="a"
              href={`#${link}`}
              custom={delay}
              initial="hidden"
              animate="visible"
              variants={tabVariant}
              sx={{
                color: "text.primary",
                textDecoration: "none",
                "&:hover": {
                  color: "info.main",
                  cursor: "pointer",
                  textDecoration: "underline",
                },
              }}
              as="a"
            >
              {name}
            </MotionLink>
          ))}

          <Box
            sx={{
              "> a": {
                color: "text.primary",

                "&:hover": {
                  color: "info.main",
                  cursor: "pointer",
                  textDecoration: "underline",
                },
              },
            }}
          >
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Box>
        </Box>

        {/* Mobile menu button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{ display: { md: "none" }, color: "text.primary", pl: "200%" }}
          aria-label="open navigation menu"
        >
          <AnimatedMenuIcon isOpen={mobileOpen} />
        </IconButton>
      </Box>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <Box
            component={motion.div}
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 1200,
              bgcolor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={toggleDrawer}
          >
            <MotionBox
              key="drawer-panel"
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 250, opacity: 0 }}
              transition={{ duration: 0.4, ease: easing }}
              sx={{
                width: 250,
                p: 3,
                height: "100%",
                bgcolor: "background.paper",
                pt: "20%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Stack spacing={2}>
                {NavList.map(({ name, link, delay }) => (
                  <MotionLink
                    key={name}
                    component="a"
                    href={`#${link}`}
                    custom={delay}
                    initial="hidden"
                    animate="visible"
                    variants={tabVariant}
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": {
                        color: "info.main",
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                    onClick={toggleDrawer}
                  >
                    {name}
                  </MotionLink>
                ))}
                <MotionLink
                  component="a"
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  transition={{ delay: navDelay + 0.3, duration, ease: easing }}
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    "&:hover": {
                      color: "info.main",
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                  onClick={toggleDrawer}
                >
                  Resume
                </MotionLink>
              </Stack>
            </MotionBox>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
}
