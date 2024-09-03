import {
  Typography,
  useMediaQuery,
  useTheme,
  TypographyTypeMap,
  Link,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import React from "react";

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
};

export default function text({
  children,
  variant = "body1",
  starting,
  title,
  subTitle,
  newline,
  color,
  center,
  content,
}: React.PropsWithChildren<titleProps>) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  let size = starting ? starting : 44;
  const style: SxProps<Theme> = {
    color: "info.main",
    textAlign: center ? "center" : "left",
    marginBottom: "1vh",
    "> span": {
      color: color ? "info.dark" : "info.main",
    },
  };
  const sizes = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
  ];

  const renderSize = () => {
    let subtract = 0;
    let value = size;

    if (lg) {
      return value + 5;
    } else if (md) {
      subtract = 4;
    } else if (xs) {
      subtract = 18;
    } else if (sm) {
      subtract = 18;
    }
    // if the value is less than 18 make it 18
    if (value - subtract < 18) {
      return 18;
    }
    return value - subtract;
  };

  return (
    <Typography sx={style} variant={variant} fontSize={renderSize()}>
      {title && <div>{title}</div>}
      {subTitle}

      {content?.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.palette.info.dark,
                textDecoration: "none",
              }}
            >
              {item.text}
            </Link>
          ) : (
            <span
              style={{
                color: item.highlight ? theme.palette.info.dark : "inherit",
              }}
            >
              {item.text}
            </span>
          )}
          {newline && index < content.length - 1 && <br />}
        </React.Fragment>
      ))}
    </Typography>
  );
}
