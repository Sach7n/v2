import {
  Box,
  useMediaQuery,
  useTheme,
  Container,
  Grid,
  Card,
} from "@mui/material";
import Text from "../general/Text";
import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "AWS", category: "cloud" },
];

const categoryColors = {
  frontend: "primary",
  backend: "secondary",
  database: "warning",
  cloud: "info",
} as const;

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants}>
          <Text title="About Me" center={isMobile} />
        </motion.div>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <motion.div variants={itemVariants}>
              <Text
                content={[
                  {
                    text: `I'm a passionate full-stack developer with a focus on building secure, scalable applications that make a real impact. My journey in tech started during my computer science studies, where I discovered the thrill of creating digital solutions that solve real-world problems.`,
                  },
                ]}
                starting={20}
              />
            </motion.div>

            <Box sx={{ mt: 1 }}>
              <motion.div variants={itemVariants}>
                <Text
                  content={[
                    {
                      text: `Over the years, I've had the privilege of working across different industries - from `,
                    },
                    { text: "telecommunications", highlight: true },
                    { text: " to " },
                    { text: "banking", highlight: true },
                    { text: " and now " },
                    { text: "fintech", highlight: true },
                    {
                      text: `. Each experience has shaped my approach to software development, teaching me the importance of security, scalability, and user experience.`,
                    },
                  ]}
                  starting={20}
                />
              </motion.div>
            </Box>

            <Box sx={{ mt: 1 }}>
              <motion.div variants={itemVariants}>
                <Text
                  content={[
                    {
                      text: `Currently, I'm focused on building payment processing systems that handle thousands of transactions daily. I love the challenge of creating robust, secure applications that users can trust with their financial data.`,
                    },
                  ]}
                  starting={20}
                />
              </motion.div>
            </Box>

            <Box sx={{ mt: 1 }}>
              <motion.div variants={itemVariants}>
                <Text
                  content={[
                    {
                      text: `When I'm not coding, you'll find me at the gym, `,
                    },
                    { text: "exploring hiking trails", highlight: true },
                    {
                      text: ", watching the latest movies, or challenging myself with ",
                    },
                    { text: "chess puzzles", highlight: true },
                    { text: " and " },
                    { text: "cybersecurity experiments", highlight: true },
                    { text: " on Kali Linux." },
                  ]}
                  starting={20}
                />
              </motion.div>
            </Box>
          </Grid>

          {/* Tech Stack Card */}
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  p: 4,
                  height: "fit-content",
                  position: "sticky",
                  top: 100,
                }}
              >
                <Text
                  content={[
                    {
                      text: "Technologies I work with:",
                    },
                  ]}
                  starting={18}
                />

                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    {technologies.map((tech, index) => (
                      <Grid item xs={6} key={tech.name}>
                        <motion.div
                          variants={itemVariants}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              py: 1.5,
                              px: 2,
                              backgroundColor: `${
                                theme.palette[categoryColors[tech.category]]
                                  .main
                              }10`,
                              borderRadius: 2,
                              border: `1px solid ${
                                theme.palette[categoryColors[tech.category]]
                                  .main
                              }30`,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: `${
                                  theme.palette[categoryColors[tech.category]]
                                    .main
                                }20`,
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor:
                                  theme.palette[categoryColors[tech.category]]
                                    .main,
                                mr: 1.5,
                              }}
                            />
                            <Text
                              content={[{ text: tech.name }]}
                              starting={14}
                            />
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
