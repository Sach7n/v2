import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
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

  const techArray = tech.map((t: string) => t.trim());

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Card
        sx={{
          maxWidth: 380,
          height: 480,
          mx: 2,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          color: "text.primary",
          border: `1px solid ${theme.palette.divider}40`,
          overflow: "hidden",
          position: "relative",
          transition: "all 0.3s ease",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, transparent 50%)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 1,
          },
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
            "&::before": {
              opacity: 1,
            },
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
              height: "200px",
              "&:hover .image": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt={title}
              className="image"
              sx={{
                objectFit: "cover",
                transition: "transform 0.4s ease",
                filter: "grayscale(100%) contrast(1.2)",
                "&:hover": {
                  filter: "grayscale(0%) contrast(1)",
                },
              }}
            />
          </CardActionArea>

          {/* Overlay with links */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
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
                  backgroundColor: `${theme.palette.background.default}90`,
                  backdropFilter: "blur(10px)",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.primary.main,
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
                backgroundColor: `${theme.palette.background.default}90`,
                backdropFilter: "blur(10px)",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.primary.main,
                },
              }}
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Content Section */}
        <CardContent sx={{ px: 3, py: 2.5, position: "relative", zIndex: 2 }}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: "text.primary",
              mb: 1.5,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {desc}
          </Typography>

          {/* Tech Stack */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {techArray.slice(0, 4).map((technology: string, index: number) => (
              <Chip
                key={index}
                label={technology}
                size="small"
                sx={{
                  backgroundColor: `${theme.palette.primary.main}15`,
                  color: theme.palette.primary.main,
                  border: `1px solid ${theme.palette.primary.main}30`,
                  fontFamily: theme.typography.fontFamily,
                  fontSize: "0.75rem",
                  fontWeight: 500,
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
                }}
              />
            )}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
