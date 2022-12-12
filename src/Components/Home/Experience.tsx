import { ListItemSecondaryAction } from "@mui/material"
import ExperienceCard from "../general/ExperienceCard"
import ResponsiveSection from "../general/ResponsiveSection"
import Title from "../general/Title"
import ExperienceTabs from '../general/ExperienceTabs';
import { Typography , useMediaQuery, useTheme} from '@mui/material';
import Box from '@mui/material/Box';

export default function Experience() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.between("xs","sm"));
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
    return <ResponsiveSection height={xs ? "130vh" : null}>
                    <Box id="experience"/>
                    <Title title="Experience" starting={44} center />
                    <ExperienceTabs/>
        </ResponsiveSection>
}