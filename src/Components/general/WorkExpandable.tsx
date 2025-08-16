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
  Collapse,
  Button,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import projectsData, { ProjectData } from "./data";

const WorkExpandable: React.FC = () => {
  const theme = useTheme();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const handleExpand = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const formatDescription = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <Typography
        key={index}
        variant="body2"
        sx={{
          mb: 2,
          lineHeight: 1.6,
          fontSize: "0.95rem",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Stack spacing={3} sx={{ mt: 4 }}>
        {projectsData.map((project, index) => (
          <motion.div key={project.id} variants={cardVariants}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.4s ease",
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 8px 30px ${theme.palette.primary.main}15`,
                },
                ...(expandedProject === project.id && {
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                }),
              }}
            >
              <Grid container>
                {/* Image Section */}
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: "200px", md: "250px" },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100%"
                      image={project.img}
                      alt={project.title}
                      sx={{
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />

                    {/* Action Buttons Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {project.github && (
                        <IconButton
                          href={project.github}
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
                        href={project.live}
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
                </Grid>

                {/* Content Section */}
                <Grid item xs={12} md={8}>
                  <CardContent sx={{ p: 4, height: "100%" }}>
                    {/* Header */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            mb: 1,
                            fontFamily: theme.typography.fontFamily,
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          sx={{ mb: 2 }}
                        >
                          <Chip
                            label={project.category}
                            size="small"
                            sx={{
                              backgroundColor: `${theme.palette.primary.main}15`,
                              color: theme.palette.primary.main,
                              textTransform: "capitalize",
                            }}
                          />
                          <Chip
                            icon={<AccessTimeIcon />}
                            label={project.timeline}
                            size="small"
                            sx={{
                              backgroundColor: `${theme.palette.secondary.main}15`,
                              color: theme.palette.secondary.main,
                            }}
                          />
                        </Stack>
                      </Box>

                      <IconButton
                        onClick={() => handleExpand(project.id)}
                        sx={{
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}10`,
                          "&:hover": {
                            backgroundColor: `${theme.palette.primary.main}20`,
                          },
                        }}
                      >
                        {expandedProject === project.id ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </IconButton>
                    </Box>

                    {/* Short Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {project.shortDesc}
                    </Typography>

                    {/* Tech Stack Preview */}
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {project.tech
                        .slice(0, 4)
                        .map((technology: string, techIndex: number) => (
                          <Chip
                            key={techIndex}
                            label={technology}
                            size="small"
                            sx={{
                              backgroundColor: `${theme.palette.text.secondary}15`,
                              color: theme.palette.text.secondary,
                              fontFamily: theme.typography.fontFamily,
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      {project.tech.length > 4 && (
                        <Chip
                          label={`+${project.tech.length - 4} more`}
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.primary.main}15`,
                            color: theme.palette.primary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontSize: "0.75rem",
                          }}
                        />
                      )}
                    </Stack>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <Collapse
                          in={expandedProject === project.id}
                          timeout={400}
                        >
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <Box
                              sx={{
                                mt: 3,
                                pt: 3,
                                borderTop: `1px solid ${theme.palette.divider}`,
                              }}
                            >
                              {/* Detailed Description */}
                              <Typography
                                variant="h6"
                                sx={{
                                  color: theme.palette.text.primary,
                                  fontWeight: 600,
                                  mb: 2,
                                }}
                              >
                                Project Details
                              </Typography>

                              <Box sx={{ mb: 3 }}>
                                {formatDescription(project.detailedDesc)}
                              </Box>

                              {/* Features & Challenges Grid */}
                              <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: theme.palette.text.primary,
                                      fontWeight: 600,
                                      mb: 2,
                                      fontSize: "1rem",
                                    }}
                                  >
                                    Key Features
                                  </Typography>
                                  {project.features
                                    .slice(0, 4)
                                    .map((feature, index) => (
                                      <Box
                                        key={index}
                                        sx={{
                                          display: "flex",
                                          alignItems: "flex-start",
                                          mb: 1,
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
                                          }}
                                        >
                                          {feature}
                                        </Typography>
                                      </Box>
                                    ))}
                                </Grid>

                                <Grid item xs={12} md={6}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: theme.palette.text.primary,
                                      fontWeight: 600,
                                      mb: 2,
                                      fontSize: "1rem",
                                    }}
                                  >
                                    Tech Challenges
                                  </Typography>
                                  {project.challenges
                                    .slice(0, 3)
                                    .map((challenge, index) => (
                                      <Box
                                        key={index}
                                        sx={{
                                          display: "flex",
                                          alignItems: "flex-start",
                                          mb: 1,
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
                                          }}
                                        >
                                          {challenge}
                                        </Typography>
                                      </Box>
                                    ))}
                                </Grid>
                              </Grid>

                              {/* Action Buttons */}
                              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                                <Button
                                  href={project.live}
                                  target="_blank"
                                  variant="contained"
                                  startIcon={<LaunchIcon />}
                                  sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    "&:hover": {
                                      backgroundColor:
                                        theme.palette.primary.dark,
                                    },
                                  }}
                                >
                                  View Live
                                </Button>

                                {project.github && (
                                  <Button
                                    href={project.github}
                                    target="_blank"
                                    variant="outlined"
                                    startIcon={<GitHubIcon />}
                                    sx={{
                                      borderColor: theme.palette.text.primary,
                                      color: theme.palette.text.primary,
                                      "&:hover": {
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main,
                                      },
                                    }}
                                  >
                                    Source Code
                                  </Button>
                                )}
                              </Box>
                            </Box>
                          </motion.div>
                        </Collapse>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </motion.div>
  );
};

export default WorkExpandable;
