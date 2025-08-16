import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CategoryIcon from "@mui/icons-material/Category";
import projectsData, { ProjectData } from "./data";

const WorkCarousel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedProject = projectsData[selectedIndex];

  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  const formatDescription = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <Typography
        key={index}
        variant="body1"
        sx={{
          mb: 2,
          lineHeight: 1.6,
          fontSize: "1rem",
          color: theme.palette.text.secondary,
          "& strong": {
            color: theme.palette.primary.main,
            fontWeight: 600,
          },
        }}
        dangerouslySetInnerHTML={{
          __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    ));
  };

  const getTechStackCategories = () => {
    const categories = Object.entries(selectedProject.techStack).filter(
      ([key, value]) => value && value.length > 0
    );
    return categories;
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* Project Carousel - Left Side */}
        <Grid item xs={12} lg={5}>
          <Box sx={{ position: "relative" }}>
            {/* Navigation */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                }}
              >
                Projects ({selectedIndex + 1} / {projectsData.length})
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.background.default,
                    },
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.background.default,
                    },
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Current Project Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: `0 8px 30px ${theme.palette.primary.main}20`,
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={selectedProject.img}
                      alt={selectedProject.title}
                      sx={{ objectFit: "cover" }}
                    />

                    {/* Action Buttons */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {selectedProject.github && (
                        <IconButton
                          href={selectedProject.github}
                          target="_blank"
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.background.default}90`,
                            backdropFilter: "blur(10px)",
                            color: "text.primary",
                            "&:hover": {
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.background.default,
                            },
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                      )}
                      <IconButton
                        href={selectedProject.live}
                        target="_blank"
                        size="small"
                        sx={{
                          backgroundColor: `${theme.palette.background.default}90`,
                          backdropFilter: "blur(10px)",
                          color: "text.primary",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.background.default,
                          },
                        }}
                      >
                        <LaunchIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                        mb: 2,
                        fontFamily: theme.typography.fontFamily,
                      }}
                    >
                      {selectedProject.title}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip
                        icon={<CategoryIcon />}
                        label={selectedProject.category}
                        size="small"
                        sx={{
                          backgroundColor: `${theme.palette.primary.main}15`,
                          color: theme.palette.primary.main,
                          textTransform: "capitalize",
                        }}
                      />
                      <Chip
                        icon={<AccessTimeIcon />}
                        label={selectedProject.timeline}
                        size="small"
                        sx={{
                          backgroundColor: `${theme.palette.secondary.main}15`,
                          color: theme.palette.secondary.main,
                        }}
                      />
                    </Stack>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {selectedProject.shortDesc}
                    </Typography>

                    {/* Tech Preview */}
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      {selectedProject.tech.slice(0, 3).map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.text.secondary}15`,
                            color: theme.palette.text.secondary,
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                      {selectedProject.tech.length > 3 && (
                        <Chip
                          label={`+${selectedProject.tech.length - 3}`}
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.primary.main}15`,
                            color: theme.palette.primary.main,
                            fontSize: "0.75rem",
                          }}
                        />
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Project Navigation Dots */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 3,
              }}
            >
              {projectsData.map((_, index) => (
                <Box
                  key={index}
                  component="button"
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor:
                      index === selectedIndex
                        ? theme.palette.primary.main
                        : `${theme.palette.text.secondary}40`,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      transform: "scale(1.2)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Project Details - Right Side */}
        <Grid item xs={12} lg={7}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  p: 4,
                  height: "fit-content",
                }}
              >
                {/* Project Overview */}
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    mb: 3,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Project Details
                </Typography>

                {/* Detailed Description */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Overview
                  </Typography>
                  <Box sx={{ maxHeight: "200px", overflowY: "auto", pr: 1 }}>
                    {formatDescription(selectedProject.detailedDesc)}
                  </Box>
                </Box>

                {/* Tech Stack */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Technology Stack
                  </Typography>

                  {getTechStackCategories().map(([category, technologies]) => (
                    <Box key={category} sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          mb: 1,
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
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Box>

                {/* Key Features */}
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
                  <Grid container spacing={1}>
                    {selectedProject.features
                      .slice(0, 4)
                      .map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              "&::before": {
                                content: '"✓"',
                                color: theme.palette.primary.main,
                                fontWeight: 700,
                                mr: 1,
                                mt: 0.2,
                              },
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "0.9rem",
                                lineHeight: 1.4,
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
                  {selectedProject.challenges
                    .slice(0, 3)
                    .map((challenge, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 1.5,
                          "&::before": {
                            content: '"⚡"',
                            color: theme.palette.secondary.main,
                            mr: 1,
                            mt: 0.2,
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: "0.9rem",
                            lineHeight: 1.4,
                          }}
                        >
                          {challenge}
                        </Typography>
                      </Box>
                    ))}
                </Box>

                {/* Action Buttons */}
                <Stack direction="row" spacing={2}>
                  <Button
                    href={selectedProject.live}
                    target="_blank"
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      py: 1.5,
                      px: 3,
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

                  {selectedProject.github && (
                    <Button
                      href={selectedProject.github}
                      target="_blank"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      sx={{
                        borderColor: theme.palette.text.primary,
                        color: theme.palette.text.primary,
                        py: 1.5,
                        px: 3,
                        fontWeight: 600,
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}10`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Source Code
                    </Button>
                  )}
                </Stack>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkCarousel;
