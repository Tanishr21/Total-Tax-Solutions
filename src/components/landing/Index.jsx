import {AppBar,  Button,  Toolbar, Typography,styled,Box } from '@mui/material'
import './Index.scss'
import {NavLink} from "react-router-dom";
const Tabs = styled(NavLink)({
    
    justifyContent:"center",
    marginLeft:"10px",
    cursor:"pointer",
    color:"white",
    textDecoration:"none",
    fontSize:"18px",
    
})
const Index = () => {
    return(
        <AppBar className='navbar-container' position='static'>
            <Toolbar className='navbar'>
               
                    <Tabs className="tabs" to="/">Home</Tabs>
                    <Tabs className="tabs"  to="/service">Services</Tabs>
                    <Tabs className="tabs"  to="/about">About</Tabs>
                    <Tabs className="tabs"  to="/contact">Contact</Tabs>
                
            </Toolbar>
        </AppBar>
    )
}
export default Index;