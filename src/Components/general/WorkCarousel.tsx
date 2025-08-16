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
  Container,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CategoryIcon from "@mui/icons-material/Category";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import projectsData, { ProjectData } from "./data";

const WorkCarousel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);
  const hasMoreProjects = projectsData.length > 3;

  const formatDescription = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <Typography
        key={index}
        variant="body1"
        sx={{
          mb: 3,
          lineHeight: 1.8,
          fontSize: "1.1rem",
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

  const getTechStackCategories = (project: ProjectData) => {
    const categories = Object.entries(project.techStack).filter(
      ([key, value]) => value && value.length > 0
    );
    return categories;
  };

  const handleProjectSelect = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          // Projects Grid View
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Projects Grid */}
            <Grid container spacing={4}>
              {visibleProjects.map((project, index) => (
                <Grid item xs={12} md={4} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.5,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ y: -1 }}
                  >
                    <Card
                      onClick={() => handleProjectSelect(project)}
                      sx={{
                        height: "520px",
                        backgroundColor: theme.palette.background.paper,
                        border: "none",
                        borderRadius: 4,
                        overflow: "hidden",
                        cursor: "pointer",
                        transition:
                          "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0 20px 60px ${theme.palette.primary.main}25`,
                        },
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Image Section */}
                      <Box
                        sx={{
                          position: "relative",
                          overflow: "hidden",
                          backgroundColor: "#f8f9fa",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="280"
                          image={project.img}
                          alt={project.title}
                          sx={{
                            objectFit: "cover",
                            transition:
                              "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            "&:hover": {
                              transform: "scale(1.08)",
                            },
                          }}
                        />

                        {/* Gradient Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "40%",
                            background:
                              "linear-gradient(transparent, rgba(0,0,0,0.7))",
                            pointerEvents: "none",
                          }}
                        />

                        {/* Status Badge */}
                        <Chip
                          label={
                            project.status === "completed"
                              ? "Live"
                              : "In Progress"
                          }
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 20,
                            left: 20,
                            backgroundColor:
                              project.status === "completed"
                                ? "rgba(52, 199, 89, 0.9)"
                                : "rgba(255, 159, 10, 0.9)",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        />

                        {/* Action Buttons */}
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            display: "flex",
                            gap: 1,
                          }}
                        >
                          {project.github && (
                            <IconButton
                              href={project.github}
                              target="_blank"
                              size="small"
                              onClick={(e) => e.stopPropagation()}
                              sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(10px)",
                                color: theme.palette.background.default,
                                width: 40,
                                height: 40,
                                "&:hover": {
                                  backgroundColor: "rgba(255, 255, 255, 1)",
                                  transform: "scale(1.1)",
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
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.9)",
                              backdropFilter: "blur(10px)",
                              color: theme.palette.background.default,
                              width: 40,
                              height: 40,
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 1)",
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Box>

                      {/* Content Section */}
                      <CardContent
                        sx={{
                          p: 4,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              mb: 1,
                              fontSize: "1.4rem",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {project.title}
                          </Typography>

                          <Typography
                            variant="body1"
                            sx={{
                              color: theme.palette.text.secondary,
                              lineHeight: 1.6,
                              mb: 3,
                              fontSize: "1rem",
                            }}
                          >
                            {project.shortDesc}
                          </Typography>

                          {/* Category & Timeline */}
                          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <CategoryIcon
                                sx={{
                                  fontSize: "1rem",
                                  color: theme.palette.text.secondary,
                                }}
                              />
                              <Typography
                                variant="caption"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: "0.85rem",
                                  textTransform: "capitalize",
                                }}
                              >
                                {project.category}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <AccessTimeIcon
                                sx={{
                                  fontSize: "1rem",
                                  color: theme.palette.text.secondary,
                                }}
                              />
                              <Typography
                                variant="caption"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: "0.85rem",
                                }}
                              >
                                {project.timeline}
                              </Typography>
                            </Box>
                          </Stack>
                        </Box>

                        {/* Tech Stack */}
                        <Box>
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <Typography
                                key={techIndex}
                                variant="caption"
                                sx={{
                                  backgroundColor: `${theme.palette.text.secondary}08`,
                                  color: theme.palette.text.secondary,
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: 1,
                                  fontSize: "0.75rem",
                                  fontWeight: 500,
                                }}
                              >
                                {tech}
                              </Typography>
                            ))}
                            {project.tech.length > 3 && (
                              <Typography
                                variant="caption"
                                sx={{
                                  color: theme.palette.primary.main,
                                  fontSize: "0.75rem",
                                  fontWeight: 600,
                                }}
                              >
                                +{project.tech.length - 3} more
                              </Typography>
                            )}
                          </Stack>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Show More Button */}
            {hasMoreProjects && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Button
                  onClick={() => setShowAll(!showAll)}
                  variant="outlined"
                  endIcon={
                    <ExpandMoreIcon
                      sx={{
                        transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  }
                  sx={{
                    borderColor: "transparent",
                    color: theme.palette.text.primary,
                    backgroundColor: `${theme.palette.text.secondary}08`,
                    px: 4,
                    py: 2,
                    fontSize: "1rem",
                    fontWeight: 500,
                    borderRadius: 3,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary.main}10`,
                      color: theme.palette.primary.main,
                      borderColor: "transparent",
                    },
                  }}
                >
                  {showAll
                    ? "Show Less"
                    : `Show ${projectsData.length - 3} More Projects`}
                </Button>
              </Box>
            )}
          </motion.div>
        ) : (
          // Detail View
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Left Side - Project Preview */}
            <Grid container spacing={4}>
              {/* Left Side - Project Card */}
              <Grid item xs={12} lg={4}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Box sx={{ position: "sticky", top: "100px" }}>
                    {/* Back Button */}
                    <Button
                      onClick={closeDetails}
                      startIcon={<ArrowBackIcon />}
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        textTransform: "none",
                        fontSize: "0.85rem",
                        "&:hover": {
                          color: theme.palette.primary.main,
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Back to projects
                    </Button>

                    <Card
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        border: "none",
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: "0 6px 30px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="250"
                        image={selectedProject.img}
                        alt={selectedProject.title}
                        sx={{ objectFit: "cover" }}
                      />

                      <CardContent sx={{ p: 2.5 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 1,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {selectedProject.title}
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                          <Chip
                            label={selectedProject.category}
                            sx={{
                              backgroundColor: `${theme.palette.primary.main}15`,
                              color: theme.palette.primary.main,
                              textTransform: "capitalize",
                              fontWeight: 600,
                              fontSize: "0.75rem",
                              height: "22px",
                            }}
                          />
                          <Chip
                            label={selectedProject.timeline}
                            sx={{
                              backgroundColor: `${theme.palette.text.secondary}15`,
                              color: theme.palette.text.secondary,
                              fontWeight: 600,
                              fontSize: "0.75rem",
                              height: "22px",
                            }}
                          />
                        </Stack>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                            mb: 2,
                            fontSize: "0.85rem",
                          }}
                        >
                          {selectedProject.shortDesc}
                        </Typography>

                        {/* Action Buttons */}
                        <Stack direction="row" spacing={1}>
                          <Button
                            href={selectedProject.live}
                            target="_blank"
                            variant="contained"
                            startIcon={<LaunchIcon />}
                            fullWidth
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              py: 1.2,
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              textTransform: "none",
                              borderRadius: 2,
                              "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                                boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                              },
                            }}
                          >
                            View Live
                          </Button>

                          {selectedProject.github && (
                            <Button
                              href={selectedProject.github}
                              target="_blank"
                              variant="outlined"
                              startIcon={<GitHubIcon />}
                              sx={{
                                borderColor: theme.palette.text.secondary,
                                color: theme.palette.text.secondary,
                                py: 1.2,
                                px: 1.5,
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                textTransform: "none",
                                borderRadius: 2,
                                "&:hover": {
                                  borderColor: theme.palette.primary.main,
                                  color: theme.palette.primary.main,
                                  backgroundColor: `${theme.palette.primary.main}05`,
                                },
                              }}
                            >
                              Code
                            </Button>
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Box>
                </motion.div>
              </Grid>

              {/* Right Side - Detailed Information */}
              <Grid item xs={12} lg={8}>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Box
                    sx={{
                      pt: 4,
                      height: "90vh",
                      overflowY: "auto",
                      pr: 2,
                      "&::-webkit-scrollbar": {
                        width: "6px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "transparent",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: theme.palette.divider,
                        borderRadius: "3px",
                      },
                    }}
                  >
                    {/* Project Overview */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 2,
                          fontSize: "1.6rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Project Overview
                      </Typography>
                      <Box>
                        {formatDescription(selectedProject.detailedDesc)}
                      </Box>
                    </Box>

                    {/* Technology Stack */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 2,
                          fontSize: "1.6rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Technology Stack
                      </Typography>
                      {getTechStackCategories(selectedProject).map(
                        ([category, technologies]) => (
                          <Box key={category} sx={{ mb: 2 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                mb: 1.5,
                                textTransform: "capitalize",
                                fontSize: "1.1rem",
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
                                <Typography
                                  key={index}
                                  sx={{
                                    backgroundColor: `${theme.palette.text.secondary}08`,
                                    color: theme.palette.text.secondary,
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1.5,
                                    fontSize: "0.8rem",
                                    fontWeight: 500,
                                  }}
                                >
                                  {tech}
                                </Typography>
                              ))}
                            </Stack>
                          </Box>
                        )
                      )}
                    </Box>

                    {/* Key Features */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 2,
                          fontSize: "1.6rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Key Features
                      </Typography>
                      <Grid container spacing={2}>
                        {selectedProject.features.map((feature, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1.5,
                                p: 2,
                                backgroundColor: `${theme.palette.background.paper}`,
                                borderRadius: 2,
                                border: `1px solid ${theme.palette.divider}20`,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  backgroundColor: `${theme.palette.primary.main}05`,
                                  borderColor: `${theme.palette.primary.main}20`,
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  backgroundColor: theme.palette.primary.main,
                                  mt: 0.8,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: "0.85rem",
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

                    {/* Technical Challenges */}
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 2,
                          fontSize: "1.6rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Technical Challenges
                      </Typography>
                      {selectedProject.challenges.map((challenge, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.5,
                            mb: 2,
                            p: 2,
                            backgroundColor: `${theme.palette.background.paper}`,
                            borderRadius: 2,
                            border: `1px solid ${theme.palette.divider}20`,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: theme.palette.secondary.main,
                              mt: 0.8,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: "0.85rem",
                              lineHeight: 1.5,
                            }}
                          >
                            {challenge}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default WorkCarousel;
