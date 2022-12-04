import { Typography } from '@mui/material';
import { ReactHTMLElement } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type titleProps = {
    title?: string
    size?: string
    highlight?: string
    newline?: boolean
    center?: boolean
    color?: any
}



export default function title({ title, size, highlight, newline, color,center }: titleProps) {
    const style: SxProps<Theme> = {
        color: color ? color : "white",
        textAlign: center ? "center" : "left"
    }
    return <>
        <Typography sx={style} variant={size ? size : "h1"}>{title}{newline ? <br /> : null} {highlight}</Typography>
    </>
}