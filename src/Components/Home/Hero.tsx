import { useMediaQuery, useTheme, Box } from "@mui/material";
import Text from "../general/Text";
import { Container } from "@mui/material";

export default function Hero() {
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container
        sx={{
          position: "absolute",
          top: sm ? "20%" : "10%",
          left: sm ? "10%" : "3%",
          width: sm ? "80%" : "97%",
        }}
      >
        <Text title="Hi, My name is" starting={40} />
        <Text subTitle="Sachin Macwan" starting={68} />
        <Text
          title="I am a Software Engineer based in"
          starting={40}
          subTitle="Melbourne, Australia."
        />
        <Text
          content={[
            {
              text: "I’m a full-stack developer at ",
            },
            {
              text: "Pay.com.au",
              link: "https://pay.com.au/",
              highlight: true,
            },
            {
              text: ", specializing in secure and scalable fintech applications.",
            },
          ]}
          starting={15}
          color="primary.main"
        />
      </Container>
    </>
  );
}
