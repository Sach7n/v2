import { Container } from "@mui/material"
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type secProps = {
    children: any
    height?:any
    id?:any
}

const style: SxProps<Theme> = {
    position:"relative",
    top:"6%",
    height: "90%",
    width: "100%",
    maxWidth:"100%",
    marginBottom: "4%",
    boxShadow: 5,
    background: "radial-gradient(circle, rgba(1,33,33,0.9921218487394958) 93%, rgba(7,37,33,0.9977240896358543) 100%)",
    border: "3px solid transperent",
    borderRadius: "30px",
    paddingTop: "2vh"
}

export default function ResponsiveSection({ children,height }: secProps) {
    return <Container sx={{height:height?height:"100vh",padding:0}}>
    <Container sx={style}>
        {children}
    </Container>
    </Container>
}