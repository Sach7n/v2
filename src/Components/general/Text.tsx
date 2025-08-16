import {
  Typography,
  useMediaQuery,
  useTheme,
  TypographyTypeMap,
  Link,
  Box,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import React from "react";
import { motion } from "framer-motion";

type ContentItem = {
  text: string;
  highlight?: boolean;
  link?: string;
};

type titleProps = {
  title?: string;
  subTitle?: string;
  newline?: boolean;
  content?: ContentItem[];
  center?: boolean;
  color?: any;
  starting?: number;
  variant?: TypographyTypeMap["props"]["variant"];
  component?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  numbered?: boolean;
  sectionNumber?: string;
};

export default function Text({
  children,
  variant = "body1",
  starting,
  title,
  subTitle,
  newline,
  color,
  center,
  content,
  numbered = false,
  sectionNumber,
}: React.PropsWithChildren<titleProps>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  let size = starting ? starting : 32;

  const style: SxProps<Theme> = {
    color: "text.primary",
    textAlign: center ? "center" : "left",
    marginBottom: title ? 4 : 2,
    fontFamily: title
      ? theme.typography.fontFamily
      : `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    "> span": {
      color: color ? theme.palette.primary.main : "text.primary",
    },
  };

  const renderSize = () => {
    let value = size;

    if (isMobile) {
      return Math.max(value - 12, 16);
    } else if (lg) {
      return value + 4;
    }

    return value;
  };

  // Section title with number
  if (title && numbered && sectionNumber) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
          justifyContent: center ? "center" : "flex-start",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.2rem",
            fontWeight: 500,
          }}
        >
          {sectionNumber}.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 600,
            fontSize: {
              xs: "1.8rem",
              md: "2.5rem",
              lg: "3rem",
            },
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: "1px",
            backgroundColor: theme.palette.divider,
            ml: 3,
            maxWidth: { xs: "100px", md: "300px" },
            display: center ? "none" : "block",
          }}
        />
      </Box>
    );
  }

  // Regular title
  if (title) {
    return (
      <Typography
        variant="h2"
        sx={{
          ...style,
          fontWeight: 600,
          fontSize: {
            xs: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
          letterSpacing: "-0.025em",
          textAlign: center ? "center" : "left",
          mb: 4,
        }}
      >
        {title}
      </Typography>
    );
  }

  // Subtitle
  if (subTitle) {
    return (
      <Typography
        variant="h1"
        sx={{
          ...style,
          fontWeight: 700,
          fontSize: {
            xs: "clamp(2.5rem, 8vw, 4rem)",
            md: "clamp(4rem, 8vw, 5.5rem)",
          },
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          mb: 2,
        }}
      >
        {subTitle}
      </Typography>
    );
  }

  // Content with highlights and links
  return (
    <Typography
      sx={{
        ...style,
        fontSize: renderSize(),
        lineHeight: 1.7,
        maxWidth: center ? "100%" : "700px",
      }}
      variant={variant}
    >
      {content?.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                fontWeight: 600,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: "0%",
                  height: "1px",
                  backgroundColor: theme.palette.primary.main,
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.text}
            </Link>
          ) : (
            <span
              style={{
                color: item.highlight ? theme.palette.primary.main : "inherit",
                fontWeight: item.highlight ? 600 : "inherit",
              }}
            >
              {item.text}
            </span>
          )}
          {newline && index < content.length - 1 && <br />}
        </React.Fragment>
      ))}
      {children}
    </Typography>
  );
}
