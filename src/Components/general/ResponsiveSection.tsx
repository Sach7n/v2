import { Container } from "@mui/material"
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type secProps = {
    children: any
    height?:any
    id?:any
}

const style: SxProps<Theme> = {
    height: "92%",
    width: "90vw",
    margin: "3% 2%",
    boxShadow: 5,
    background: "radial-gradient(circle, rgba( 1, 35, 36,0.9) 80%,rgba(2,40,40,1) 100%)",
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