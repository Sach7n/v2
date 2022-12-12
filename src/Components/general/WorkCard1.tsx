import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

type CardItemPops = {
    title: any
    desc: any
    tech: any
    img: any
    link: any
}

export default function WorkCard1({ title, desc, tech, img, link }: CardItemPops) {
    return (
        <Card
            sx={{
                color: "info.main", border: "1px solid",
                maxWidth: 320,
                height: 450,
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
