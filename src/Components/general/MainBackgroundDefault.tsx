import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        background: `
          radial-gradient(ellipse at top, ${theme.palette.primary.main}08 0%, transparent 50%),
          radial-gradient(ellipse at bottom, ${theme.palette.secondary.main}05 0%, transparent 50%),
          linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)
        `,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        fontFamily: theme.typography.fontFamily,
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}10 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${theme.palette.primary.main}08 0%, transparent 50%)
          `,
          opacity: 0.3,
          pointerEvents: "none",
          zIndex: -1,
        },
        // Noise texture overlay for industrial feel
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: -1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 4 },
          flexGrow: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
