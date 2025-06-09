import React from "react";
import { Box, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const sidebarItems = [
  {
    title: "Email",
    href: "mailto:sachin.macwan94@gmail.com",
    icon: <EmailIcon />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin-macwan-727352163/",
    icon: <LinkedInIcon />,
  },
  {
    title: "GitHub",
    href: "https://github.com/Sach7n",
    icon: <GitHubIcon />,
  },
];

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "4%",
        transform: "translateY(-50%)",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        gap: 2,
        px: 1,
        zIndex: 1100,
      }}
    >
      {sidebarItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -2 }}
          transition={{
            delay: 0.6 + index * 0.15,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <IconButton
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            sx={{
              transition: "transform 0.3s ease",
              "& svg": {
                transition: "transform 0.3s ease, color 0.3s ease",
              },
              "&:hover svg": {
                transform: "scale(1.2)",
                color: "info.main",
              },
            }}
          >
            {item.icon}
          </IconButton>
        </motion.div>
      ))}
    </Box>
  );
};

export default Sidebar;
