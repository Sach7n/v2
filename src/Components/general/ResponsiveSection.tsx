import { Container } from "@mui/material"
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type secProps = {
    children: any
    height?:any
    id?:any
}

const style: SxProps<Theme> = {
    height: "90%",
    width: "90vw",
    margin: "4% 2% 0 2%",
    boxShadow: 5,
    background: "radial-gradient(circle, rgb(15, 23, 36,0.9) 80%,rgba(12,44,48,0.5) 100%)",
    border: "3px solid transperent",
    borderRadius: "30px",
    paddingTop: "2vh"
}

export default function ResponsiveSection({ children,height }: secProps) {
    return <Container sx={{height:height?height:"100vh"}}>
    <Container sx={style}>
        {children}
    </Container>
    </Container>
}