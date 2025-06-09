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
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        fontFamily: theme.typography.fontFamily,
        transition: "all 0.4s ease-in-out",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 4 },
          flexGrow: 1,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
