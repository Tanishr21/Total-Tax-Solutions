import { Box, Grid, Typography } from "@mui/material";
import Card from "../card/Cardcompo";
import './service.scss'
import {services} from "../constants/functionality"
const Service = () => {
    return (
      <Box className="card-container">
        <Box className="service">
          <Typography variant="h1" className="service-title">Services We Offer</Typography>
        </Box>  
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
          {services.map((service,index)=>(
            <Grid item xs={2} sm={4} md={5} key={index}>
              <Card style={{ backgroundColor: "red"}}
                key={service.imgURL}
                {...service}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}
export default Service;