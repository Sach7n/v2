import { Typography, useMediaQuery, useTheme,Box } from "@mui/material";
import Title from "../general/Title"

import ResponsiveSection from "../general/ResponsiveSection"
import { Container } from '@mui/material';

export default function Hero() {
    const theme = useTheme();

    const xs = useMediaQuery(theme.breakpoints.up("xs"));
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
    const sm = useMediaQuery(theme.breakpoints.up("sm"));

    return <ResponsiveSection>
        <Box id="home"/>
        <Container sx={{position:"absolute",top:"25%",left:"5%",width:xs?"94%":"60%"}}>
            <Title title="Hi, My name is" starting ={40}  newline/>
            <Title highlight="Sachin Macwan"  starting ={68}/>
            <Title title="I am a Software Engineer based in" starting ={40}  newline highlight="Toronto, Ontario." />
            <Title title="I am currently working on" starting ={10} color   
                    highlight="Reactjs | Redux | Nodejs | MongoDB | AWS" />
        </Container>
    </ResponsiveSection>

}