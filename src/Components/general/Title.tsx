import { Typography } from '@mui/material';
import { ReactHTMLElement } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type titleProps = {
    title: string
    size?: string
    highlight?: string
    newline?: string
}

const style: SxProps<Theme> = {
    color:"white",
    textAlign:"center"
    }

export default function title({ title, size,highlight,newline}: titleProps) {
    return <>
    <Typography sx={style} variant={size ? size : "h1"}>{title}{newline?<br/>:null} {highlight}</Typography>
    </>
}