import { Typography , useMediaQuery, useTheme} from '@mui/material';
import { ReactHTMLElement } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type titleProps = {
    title?: string
    highlight?: string
    newline?: boolean
    center?: boolean
    color?: any
    starting?: number
}

export default function title({ starting, title,  highlight, newline, color, center }: titleProps) {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.up("xs"));
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
    const sm = useMediaQuery(theme.breakpoints.up("sm"));
    let size = starting ? starting : 44;
    const style: SxProps<Theme> = {
        color: "info.main",
        textAlign: center ? "center" : "left",
        marginBottom:"2vh",
        "> span": {
          color: color ? "info.dark" : "info.main",
        },
    }
    const sizes = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
    ];

    const renderSize = () => {
        let subtract = 0;
        let value = size;

        if (lg) {
            return value +5;
        } else if (md) {
            subtract = 4;
        } else if (xs) {
            subtract = 18;
        }
        else if (sm) {
            subtract = 18;
        }
        // if the value is less than 18 make it 18
        if (value - subtract < 18) {
            return 18;
        }
        return value - subtract;
    };


    return <>
        <Typography sx={style} variant={lg ? sizes[0] : md ? sizes[1] : sm ? sizes[2] : sizes[0]} fontSize={renderSize()}>
                {title}
                <span>{newline ? <br /> : null} {highlight}</span>
        </Typography>
    </>
}