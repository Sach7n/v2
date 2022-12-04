import Title from "../general/Title"
import Box from '@mui/material/Box'
import ResponsiveSection from "../general/ResponsiveSection"
import { Container } from '@mui/material';

export default function Hero() {
    return <ResponsiveSection>

        <Container sx={{position:"absolute",top:"25%",left:"5%",width:"60%"}}>
            <Title title="Hi, My name is" size="h6" newline/>
            <Title size="h1" highlight="Sachin Macwan" />
            <Title title="I am a Software Engineer based in" size="h4"  newline highlight="Toronto, Ontario." />
        </Container>
    </ResponsiveSection>

}