import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Typography , useMediaQuery, useTheme,Box} from '@mui/material';

type CardItemPops = {
    title: any
    desc: any
    tech: any
    img: any
    link: any
}

export default function WorkCard1({ title, desc, tech, img, link }: CardItemPops) {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.between("xs","sm"));
    return (
        <Card
            sx={{
                color: "info.main", border: "1px solid",
                maxWidth: 320,
                height: xs ? 500 : 440,
                margin: "0% 2%",
                borderRadius: 5,
                borderColor: "info.dark",
                background: "transparent",
                transition: "borderColor 1s, transform 0.2s",
                '&:hover': {
                    border: "2px solid ",
                    borderColor: "info.dark",
                    transform: "translateY(-3px)",
                }
            }}>
            <CardActionArea href={link} target="_blank">
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt="green iguana"
                />            
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" >
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                {tech}
            </CardActions>
        </Card>
    )
}
