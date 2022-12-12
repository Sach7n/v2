import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Title from "./Title"

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

type cardProps = {
    title?: string
    techs: string
    description: any
    logo:any
    time:string
}



export default function ExperienceCard({title, techs,description,logo,time}: cardProps) {
  return (
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      width:"90%",
      height:"80%",
      maxHeight:"80%",
      marginTop:"1%",
      flexGrow: 1,
      background: "rgba(2,40,40,1)",
      color:"info.main"
    }}
  >
    <Grid container>
      <Grid item>
        <ButtonBase sx={{ width: 58, height: 58 }}>
          <Img alt="complex" src={logo} />
        </ButtonBase>
          <Typography variant="subtitle1" component="div">
            {time}
          </Typography>
      </Grid>
      <Grid item xs={12} sm container sx={{padding:"0"}}>
        <Grid item xs container direction="column" >
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {description.map((item:any,index:number)=><Typography sx={{padding:"0 2%"}} key={index} variant="body2" gutterBottom>{item}</Typography>)}
            </Typography>
          </Grid>

          <Grid item>
            <Typography sx={{padding:"0 2%"}} variant="body2">
            {techs}
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  </Paper>
  )
}
