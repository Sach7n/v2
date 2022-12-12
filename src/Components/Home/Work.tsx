import { Typography , useMediaQuery, useTheme,Box} from '@mui/material';
import ResponsiveSection from "../general/ResponsiveSection"
import Title from "../general/Title"
import WorkCard from "../general/WorkCard"
import WorkSwiper from '../general/WorkSwiper';
import data from "../general/data"

export default function Work() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.between("xs","sm"));
    return <ResponsiveSection>
        <Box id="work"/>
        <Title title="Work" center />
        {xs ? <WorkSwiper /> : <WorkCard/> }
    </ResponsiveSection>
}