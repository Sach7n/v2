import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import data from "./data"
import WorkCard1 from './WorkCard1';

export default function MediaCard() {
    
    return (
        <Paper sx={{display:"flex",flexDirection:"row",background:"transparent", boxShadow:"none"}}>
        {data && data.map((item, index) =>
        <WorkCard1 {...item}/>       )}
        </Paper>
    );
}