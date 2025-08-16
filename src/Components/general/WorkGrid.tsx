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
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import projectsData, { ProjectData } from "./data";
import ProjectDetailModal from "./ProjectDetailModal";

const WorkGrid: React.FC = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return theme.palette.success.main;
      case "in-progress":
        return theme.palette.warning.main;
      case "planned":
        return theme.palette.info.main;
      default:
        return theme.palette.text.secondary;
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image Section */}
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="200"
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

                    {/* Status Badge */}
                    <Chip
                      label={project.status.replace("-", " ")}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        backgroundColor: `${getStatusColor(project.status)}20`,
                        color: getStatusColor(project.status),
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
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
                      {project.github && (
                        <IconButton
                          href={project.github}
                          target="_blank"
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.background.default}90`,
                            backdropFilter: "blur(10px)",
                            color: "text.primary",
                            width: 32,
                            height: 32,
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
                          width: 32,
                          height: 32,
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

                  {/* Content Section */}
                  <CardContent
                    sx={{
                      px: 3,
                      py: 3,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                        mb: 1.5,
                        fontSize: "1.2rem",
                        fontFamily: theme.typography.fontFamily,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        mb: 3,
                        fontSize: "0.95rem",
                        flex: 1,
                      }}
                    >
                      {project.shortDesc}
                    </Typography>

                    {/* Tech Stack */}
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
                        .slice(0, 3)
                        .map((technology: string, techIndex: number) => (
                          <Chip
                            key={techIndex}
                            label={technology}
                            size="small"
                            sx={{
                              backgroundColor: `${theme.palette.primary.main}15`,
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}40`,
                              fontFamily: theme.typography.fontFamily,
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      {project.tech.length > 3 && (
                        <Chip
                          label={`+${project.tech.length - 3}`}
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.text.secondary}15`,
                            color: theme.palette.text.secondary,
                            fontFamily: theme.typography.fontFamily,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Stack>

                    {/* Learn More Button */}
                    <Box
                      component="button"
                      onClick={() => setSelectedProject(project)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        width: "100%",
                        py: 1.5,
                        backgroundColor: "transparent",
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: 2,
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: `${theme.palette.primary.main}10`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <InfoIcon fontSize="small" />
                      Learn More
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default WorkGrid;
