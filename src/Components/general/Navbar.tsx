import { useState } from "react";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import pdf from "./New_frontend_v2.pdf";

const NavList = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Experience", link: "experience" },
  { name: "Work", link: "work" },
];

export default function Navbar() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen((open) => !open);

  return (
    <>
      {/* Fixed Header Bar */}
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "70px",
          backgroundColor: `${theme.palette.background.default}95`,
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, sm: 6 },
          zIndex: 1300,
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: 800,
              color: theme.palette.primary.main,
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            SM
          </Typography>
        </motion.div>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {NavList.map(({ name, link }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Box
                component="a"
                href={`#${link}`}
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.typography.fontFamily,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  position: "relative",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-6px",
                    left: "50%",
                    width: "0%",
                    height: "2px",
                    backgroundColor: theme.palette.primary.main,
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {name}
              </Box>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                borderWidth: "2px",
                borderRadius: 2,
                px: 3,
                py: 1,
                fontSize: "0.9rem",
                fontWeight: 600,
                fontFamily: theme.typography.fontFamily,
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}15`,
                  borderColor: theme.palette.primary.main,
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}25`,
                },
              }}
            >
              Resume
            </Button>
          </motion.div>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            display: { md: "none" },
            color: theme.palette.text.primary,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: `${theme.palette.primary.main}10`,
            },
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: theme.palette.background.default,
              zIndex: 1400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack spacing={4} alignItems="center">
              {NavList.map(({ name, link }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Box
                    component="a"
                    href={`#${link}`}
                    onClick={toggleDrawer}
                    sx={{
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                      fontSize: "2rem",
                      fontWeight: 600,
                      fontFamily: theme.typography.fontFamily,
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {name}
                  </Box>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  onClick={toggleDrawer}
                  sx={{
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    borderWidth: "2px",
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    fontFamily: theme.typography.fontFamily,
                    textTransform: "none",
                    mt: 2,
                  }}
                >
                  Resume
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
