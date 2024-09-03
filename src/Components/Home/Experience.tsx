import ResponsiveSection from "../general/ResponsiveSection";
import Text from "../general/Text";
import ExperienceTabs from "../general/ExperienceTabs";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

export default function Experience() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <ResponsiveSection height={xs ? "110vh" : null}>
      <Box id="experience" />
      <Text title="Experience" starting={44} center />
      <ExperienceTabs />
    </ResponsiveSection>
  );
}
