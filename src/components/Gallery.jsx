import { Box, Card, CardMedia, Grid, Typography } from "@mui/material"
import "./Gallery.scss"
import CardG from "./card/Cardgallery";
const Gallery = () => {
    let data = [
        {
            id:1,
            imgSrc:'one.png',
        },
        {
            id:2,
            imgSrc:'two.png',
        },
        {
            id:3,
            imgSrc:'three.png',
        },
        {
            id:4,
            imgSrc:'four.png',
        },
        {
            id:5,
            imgSrc:'five.png',
        },
        {
            id:6,
            imgSrc:'six.png',
        },
        {
            id:7,
            imgSrc:'seven.png',
        },{
            id:8,
            imgSrc:'nine.png',
        },
    ];
    return (
    
        <Box className="gallery-container">
        
        <Box className="gallery-title" >
            <Typography variant="h1" className="gallery-mobile">Gallery</Typography>
        </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{padding: "30px"}}>
                {data.map((pic,index)=>(
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <CardG className="card"
                        key={pic.imgSrc}
                        {...pic}
                        index={index}
                        />
                    </Grid>
                ))}
            </Grid>
        
        </Box>
    
    )
}
export default Gallery;