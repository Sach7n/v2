import React from "react";
import {
  Box,
  IconButton,
  useTheme,
  Container,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/Sach7n",
    icon: <GitHubIcon />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin-macwan-727352163/",
    icon: <LinkedInIcon />,
  },
  {
    title: "Email",
    href: "mailto:sachin.macwan94@gmail.com",
    icon: <EmailIcon />,
  },
];

const Social: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        py: 6,
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}20`,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: theme.palette.text.primary,
              fontWeight: 600,
              mb: 3,
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: theme.palette.text.secondary,
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mb: 4,
            }}
          >
            {socialLinks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  sx={{
                    color: theme.palette.text.secondary,
                    backgroundColor: `${theme.palette.primary.main}10`,
                    border: `1px solid ${theme.palette.primary.main}30`,
                    borderRadius: 2,
                    width: 60,
                    height: 60,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: `${theme.palette.primary.main}20`,
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
                    },
                    "& svg": {
                      fontSize: "1.5rem",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>

          <Box
            sx={{
              textAlign: "center",
              pt: 3,
              borderTop: `1px solid ${theme.palette.divider}20`,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontFamily: theme.typography.fontFamily,
                fontSize: "0.85rem",
              }}
            >
              Built with React & TypeScript by Sachin Macwan
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Social;
