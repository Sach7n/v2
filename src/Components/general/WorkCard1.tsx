import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Box,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

type CardItemProps = {
  title: any;
  desc: any;
  tech: any;
  img: any;
  link: any;
  github?: string;
};

export default function WorkCard1({
  title,
  desc,
  tech,
  img,
  link,
  github,
}: CardItemProps) {
  const theme = useTheme();

  // Safe tech array handling
  let techArray: string[] = [];

  try {
    if (Array.isArray(tech)) {
      techArray = tech;
    } else if (typeof tech === "string") {
      techArray = tech.split(",").map((t: string) => t.trim());
    } else {
      techArray = [];
    }
  } catch (error) {
    console.error("Error processing tech array:", error);
    techArray = [];
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Card
        sx={{
          maxWidth: 360,
          height: 450,
          mx: 2,
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper,
          color: "text.primary",
          border: `1px solid ${theme.palette.divider}`,
          overflow: "hidden",
          position: "relative",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 16px 32px ${theme.palette.primary.main}20`,
          },
        }}
        elevation={0}
      >
        {/* Image Section */}
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardActionArea
            href={link}
            target="_blank"
            sx={{
              height: "180px",
              "&:hover .image": {
                transform: "scale(1.03)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt={title}
              className="image"
              sx={{
                objectFit: "cover",
                transition: "transform 0.4s ease",
                filter: "brightness(0.9)",
                "&:hover": {
                  filter: "brightness(1)",
                },
              }}
            />
          </CardActionArea>

          {/* Action Links */}
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              display: "flex",
              gap: 1,
              zIndex: 2,
            }}
          >
            {github && (
              <IconButton
                href={github}
                target="_blank"
                size="small"
                sx={{
                  backgroundColor: `${theme.palette.background.default}95`,
                  backdropFilter: "blur(10px)",
                  color: "text.primary",
                  width: 32,
                  height: 32,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.default,
                    transform: "scale(1.1)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            )}
            <IconButton
              href={link}
              target="_blank"
              size="small"
              sx={{
                backgroundColor: `${theme.palette.background.default}95`,
                backdropFilter: "blur(10px)",
                color: "text.primary",
                width: 32,
                height: 32,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.background.default,
                  transform: "scale(1.1)",
                },
              }}
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Content Section */}
        <CardContent sx={{ px: 3, py: 3, flex: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 1.5,
              fontSize: "1.2rem",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              mb: 3,
              fontSize: "0.95rem",
            }}
          >
            {desc}
          </Typography>

          {/* Tech Stack - Only render if we have tech data */}
          {techArray.length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {techArray
                .slice(0, 4)
                .map((technology: string, index: number) => (
                  <Chip
                    key={index}
                    label={technology}
                    size="small"
                    sx={{
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      border: `1px solid ${theme.palette.primary.main}40`,
                      fontFamily: theme.typography.fontFamily,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary.main}25`,
                      },
                    }}
                  />
                ))}
              {techArray.length > 4 && (
                <Chip
                  label={`+${techArray.length - 4}`}
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
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
