import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type CardItemPops = {
  title: any;
  desc: any;
  tech: any;
  img: any;
  link: any;
};

export default function WorkCard1({
  title,
  desc,
  tech,
  img,
  link,
}: CardItemPops) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: 320,
        height: isMobile ? 500 : 440,
        mx: 2,
        borderRadius: 2,
        backgroundColor: "transparent",
        color: "text.primary",
        border: "1px solid",
        borderColor: "info.main",
        transition: "border-color 0.3s ease, transform 0.2s ease",
        "&:hover": {
          borderWidth: 2,
          borderColor: "info.main",
          transform: "translateY(-4px)",
        },
      }}
      elevation={0}
    >
      <CardActionArea href={link} target="_blank" sx={{ height: "240px" }}>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt={title}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: theme.shape.borderRadius * 2,
            borderTopRightRadius: theme.shape.borderRadius * 2,
          }}
        />
      </CardActionArea>

      <CardContent sx={{ px: 2, py: 1.5 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pt: 0, pb: 1 }}>
        <Typography variant="caption" color="text.primary">
          {tech}
        </Typography>
      </CardActions>
    </Card>
  );
}
