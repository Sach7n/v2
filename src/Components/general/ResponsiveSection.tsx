import { Container } from "@mui/material"
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type secProps = {
    children: any
}

const style: SxProps<Theme> = {
    height: "85vh",
    width: "90vw",
    margin: "5% 5%",
    boxShadow: 5,
    background: "linear-gradient(86deg, rgba(2,61,62,1) 0%, rgba(2,90,75,1) 100%)",
    border: "3px solid ",
    borderRadius: "30px",
  }

export default function ResponsiveSection({ children }: secProps) {
    return <Container
        sx={style}>
        {children}
    </Container>
}