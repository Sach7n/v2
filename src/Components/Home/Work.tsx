import { useMediaQuery, useTheme, Box } from "@mui/material";
import ResponsiveSection from "../general/ResponsiveSection";
import Text from "../general/Text";
import WorkCard from "../general/WorkCard";
import WorkSwiper from "../general/WorkSwiper";

export default function Work() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <ResponsiveSection>
      <Box id="work" />
      <Text title="Work" center />
      {xs ? <WorkSwiper /> : <WorkCard />}
    </ResponsiveSection>
  );
}
