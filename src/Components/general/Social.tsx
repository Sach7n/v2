import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const socialLinks = [
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

const Social: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: "center",
        position: "relative",
        width: "100%",
        pb: 1,
      }}
    >
      <Box
        component="ul"
        sx={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          p: 0,
          m: 0,
          gap: 2,
        }}
      >
        {socialLinks.map((item) => (
          <Box component="li" key={item.title}>
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Social;
