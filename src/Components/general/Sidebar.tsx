import React from "react";
import { Box, IconButton, useTheme, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const socialItems = [
  {
    title: "GitHub",
    href: "https://github.com/Sach7n",
    icon: <GitHubIcon />,
    color: "#333",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin-macwan-727352163/",
    icon: <LinkedInIcon />,
    color: "#0077B5",
  },
  {
    title: "Email",
    href: "mailto:sachin.macwan94@gmail.com",
    icon: <EmailIcon />,
    color: "#EA4335",
  },
];

const Sidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: 30,
        transform: "translateY(-50%)",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 3,
        zIndex: 1100,
      }}
    >
      {socialItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.2, x: -10 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            delay: 1.2 + index * 0.15,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Tooltip title={item.title} placement="left" arrow>
            <IconButton
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              sx={{
                color: theme.palette.text.secondary,
                backgroundColor: theme.palette.background.paper,
                backdropFilter: "blur(20px)",
                border: `2px solid ${theme.palette.divider}`,
                borderRadius: "50%",
                width: 56,
                height: 56,
                boxShadow: `0 4px 20px ${theme.palette.background.default}60`,
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: `${theme.palette.primary.main}10`,
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 8px 30px ${theme.palette.primary.main}40`,
                  transform: "translateX(-5px)",
                },
                "& svg": {
                  fontSize: "1.4rem",
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        </motion.div>
      ))}

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.8,
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#10B981", // Green for available
            boxShadow: `0 0 20px #10B981`,
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            mx: "auto",
            mt: 2,
            "@keyframes pulse": {
              "0%, 100%": {
                opacity: 1,
              },
              "50%": {
                opacity: 0.5,
              },
            },
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Sidebar;
