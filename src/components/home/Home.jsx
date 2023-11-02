import { Button } from "@mui/material"
import "./Home.scss"
import Gallery from "../Gallery"
import Accordionfaq from "../accordion/Accordionfaq";

const Home = () => {

    return (
        <main>
        <div className="home">
            <div className="hero-gradient"></div>
            
            <p className="legal">Need a legal help? <br />We are an effective auditing agency.</p>
            <h1 className="total">TOTAL TAX SOLUTIONS</h1>
            <div className="button">
                <Button variant="outlined" className="button1" color="secondary"><a href="#expertise" rel="m_PageScroll2id">VISIT US</a></Button>
                <Button variant="outlined" className="button2" color="secondary"><a href="/contact">Connect with us</a></Button>
            </div>
        </div>
        <div className="home-second" id="gallery">
            <Gallery/>
        </div>
        <section id="home-four">
            <Accordionfaq/>
        </section>
    </main>
    )
}
export default Home;