import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Chip,
  Stack,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CategoryIcon from "@mui/icons-material/Category";
import { ProjectData } from "./data";

interface ProjectDetailModalProps {
  project: ProjectData | null;
  open: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  open,
  onClose,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (!project) return null;

  const formatDescription = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <Typography
        key={index}
        variant="body1"
        sx={{
          mb: 2,
          lineHeight: 1.7,
          fontSize: "1.1rem",
          color: theme.palette.text.secondary,
          "& strong": {
            color: theme.palette.primary.main,
            fontWeight: 700,
          },
        }}
        dangerouslySetInnerHTML={{
          __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    ));
  };

  const getTechStackCategories = () => {
    const categories = Object.entries(project.techStack).filter(
      ([key, value]) => value && value.length > 0
    );
    return categories;
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="lg"
          fullWidth
          fullScreen={isMobile}
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.background.default,
              backgroundImage: "none",
              borderRadius: isMobile ? 0 : 3,
              border: `1px solid ${theme.palette.divider}`,
              maxHeight: "90vh",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <DialogContent sx={{ p: 0, position: "relative" }}>
              {/* Close Button */}
              <IconButton
                onClick={onClose}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  zIndex: 10,
                  backgroundColor: `${theme.palette.background.paper}90`,
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    backgroundColor: theme.palette.background.paper,
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Hero Section */}
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "200px", md: "300px" },
                  overflow: "hidden",
                  borderRadius: "12px 12px 0 0",
                }}
              >
                <Box
                  component="img"
                  src={project.img}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                  }}
                />

                {/* Overlay Content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    p: 4,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: "1.8rem", md: "2.5rem" },
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Chip
                      icon={<CategoryIcon />}
                      label={project.category}
                      sx={{
                        backgroundColor: `${theme.palette.primary.main}20`,
                        color: theme.palette.primary.main,
                        textTransform: "capitalize",
                      }}
                    />
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={project.timeline}
                      sx={{
                        backgroundColor: `${theme.palette.secondary.main}20`,
                        color: theme.palette.secondary.main,
                      }}
                    />
                  </Stack>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                <Grid container spacing={4}>
                  {/* Main Content */}
                  <Grid item xs={12} md={8}>
                    {/* Description */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          mb: 3,
                          fontSize: "1.4rem",
                        }}
                      >
                        Project Overview
                      </Typography>
                      {formatDescription(project.detailedDesc)}
                    </Box>

                    {/* Features */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        Key Features
                      </Typography>
                      <Grid container spacing={2}>
                        {project.features.map((feature, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                "&::before": {
                                  content: '"✓"',
                                  color: theme.palette.primary.main,
                                  fontWeight: 700,
                                  mr: 1.5,
                                  mt: 0.2,
                                },
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: "0.95rem",
                                  lineHeight: 1.5,
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Challenges */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        Technical Challenges
                      </Typography>
                      {project.challenges.map((challenge, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 1.5,
                            "&::before": {
                              content: '"⚡"',
                              color: theme.palette.secondary.main,
                              mr: 1.5,
                              mt: 0.2,
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: "0.95rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {challenge}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  {/* Sidebar */}
                  <Grid item xs={12} md={4}>
                    {/* Action Buttons */}
                    <Card
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        p: 3,
                        mb: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        Project Links
                      </Typography>

                      <Stack spacing={2}>
                        <Button
                          href={project.live}
                          target="_blank"
                          variant="contained"
                          startIcon={<LaunchIcon />}
                          fullWidth
                          sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.background.default,
                            py: 1.5,
                            fontWeight: 600,
                            "&:hover": {
                              backgroundColor: theme.palette.primary.dark,
                              transform: "translateY(-2px)",
                              boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                            },
                          }}
                        >
                          View Live Demo
                        </Button>

                        {project.github && (
                          <Button
                            href={project.github}
                            target="_blank"
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            fullWidth
                            sx={{
                              borderColor: theme.palette.text.primary,
                              color: theme.palette.text.primary,
                              py: 1.5,
                              fontWeight: 600,
                              "&:hover": {
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                backgroundColor: `${theme.palette.primary.main}10`,
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            View Source Code
                          </Button>
                        )}
                      </Stack>
                    </Card>

                    {/* Tech Stack */}
                    <Card
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        p: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          mb: 3,
                        }}
                      >
                        Technology Stack
                      </Typography>

                      {getTechStackCategories().map(
                        ([category, technologies]) => (
                          <Box key={category} sx={{ mb: 3 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                mb: 1.5,
                                textTransform: "capitalize",
                                fontSize: "0.9rem",
                              }}
                            >
                              {category.replace(/([A-Z])/g, " $1").trim()}
                            </Typography>
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{ flexWrap: "wrap", gap: 1 }}
                            >
                              {technologies.map((tech, index) => (
                                <Chip
                                  key={index}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    backgroundColor: `${theme.palette.text.secondary}15`,
                                    color: theme.palette.text.secondary,
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        )
                      )}
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
