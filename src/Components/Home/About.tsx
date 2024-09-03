import { Box, useMediaQuery, useTheme } from "@mui/material";
import ResponsiveSection from "../general/ResponsiveSection";
import Text from "../general/Text";

export default function About() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ResponsiveSection height={xs ? "110vh" : null}>
      <Box id="experience" />
      <Text title="About" starting={44} center />
      <Box
        sx={{
          position: "absolute",
          top: sm ? "20%" : "10%",
          left: sm ? "5%" : "3%",
          width: sm ? "80%" : "97%",
        }}
      >
        <Text
          content={[
            {
              text: `Hi there! I'm Sachin, and I have a passion for crafting digital solutions.
              My journey into software engineering began during my computer science studies, where I 
              discovered a love for hands-on projects. Since then, I've had the opportunity to work with`,
            },
            { text: " a telecom company, a bank", highlight: true },
            { text: " in Canada, and now I'm part of an" },
            { text: " exciting start-up in Australia.", highlight: true },
            {
              text: " These experiences have fueled my drive to create innovative and impactful software solutions.",
            },
          ]}
          starting={15}
          color="primary.main"
        />
        <Text
          content={[
            {
              text: `The technologies I am currently working on are`,
            },
            {
              text: " React, Node, GraphQL, MongoDB, Postgres, AWS",
              highlight: true,
            },
          ]}
          starting={15}
          color="primary.main"
        />
        <Text
          content={[
            {
              text: `In my free time, I like to hit the gym since I work from home most of the
              time. I also enjoy watching movies and going on hiking trips`,
            },
            {
              text: " watching movies",
              highlight: true,
            },
            {
              text: " and",
            },
            {
              text: " hiking trips",
              highlight: true,
            },
            {
              text: ` on weekends. Lately, I’ve been learning to `,
            },
            {
              text: "play chess",
              highlight: true,
            },
            {
              text: " and experimenting with ",
            },
            {
              text: "Kali Linux.",
              highlight: true,
            },
          ]}
          starting={15}
          color="primary.main"
        />
      </Box>
    </ResponsiveSection>
  );
}
