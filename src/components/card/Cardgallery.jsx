import { Card, CardMedia } from "@mui/material"
import "./Cardgallery.scss"
const Cardgallery = ({id,imgSrc}) => {
    return(
        <Card className="card-gallery">
            <CardMedia
                className="card-item"
                sx={{height:250}}
                image={`/images/work/${imgSrc}`}
                title="office-photos"
            />
        </Card>
    )
}
export default Cardgallery;