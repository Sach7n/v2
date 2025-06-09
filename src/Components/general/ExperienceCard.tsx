import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")(({ theme }) => ({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: 48,
    maxHeight: 48,
  },
}));

type cardProps = {
  title?: string;
  techs: string;
  description: string[];
  logo: string;
  time: string;
};

export default function ExperienceCard({
  title,
  techs,
  description,
  logo,
  time,
}: cardProps) {
  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        m: "1% auto",
        width: "90%",
        height: "auto",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        backgroundColor: "background.paper",
        color: "text.primary",
        overflow: "hidden",
        boxShadow: "none",
      })}
    >
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        direction={{ xs: "row", sm: "column", md: "row" }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            width: { xs: "100%", sm: "auto" },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <ButtonBase
            sx={{
              width: { xs: 48, sm: 58 },
              height: { xs: 48, sm: 58 },
              mb: 1,
            }}
          >
            <Img alt="logo" src={logo} />
          </ButtonBase>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            {time}
          </Typography>
        </Grid>

        <Grid item xs>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              {description.map((item: string, index: number) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ px: { xs: 0, sm: 1 } }}
                  gutterBottom
                >
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid item>
              <Typography variant="body2" sx={{ px: { xs: 0, sm: 1 } }}>
                {techs}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
