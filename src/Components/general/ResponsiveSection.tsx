import { Container } from "@mui/material"
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type secProps = {
    children: any
}

const style: SxProps<Theme> = {
    height: "90vh",
    width: "90vw",
    margin: "5vh",
    boxShadow: 5,
    background: "linear-gradient(86deg, rgba(2,61,62,1) 0%, rgba(2,90,75,1) 100%)",
    border: "3px solid transperent",
    borderRadius: "30px",
    paddingTop: "2vh"
}

export default function ResponsiveSection({ children }: secProps) {
    return <Container sx={{height:"100vh"}}>
    <Container sx={style}>
        {children}
    </Container>
    </Container>
}