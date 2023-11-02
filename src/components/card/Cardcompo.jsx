import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cardcompo.scss'

const Cardcompo = ({title, imgURL, des, index}) => {
  return (
    <Card sx={{ maxWidth: 400,background:"black" }} className='cardcompo'>
      <CardMedia
        className='image'
        sx={{ height: 140 }}
        image={`/images/${imgURL}`}
        title="green iguana"
      />
      <CardContent className="image-content" sx={{background:"black",color:"white", fontFamily: "Montserrat, sans-serif"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{color:"white"}} color="text.secondary">
          {des}
        </Typography>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>
  );
}

export default Cardcompo;