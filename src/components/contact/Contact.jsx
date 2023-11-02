import { Button, FormControl, FormGroup, InputLabel,Input,styled, Typography} from "@mui/material"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled(FormGroup)({
    width:"30%",
    margin:"5% auto 0 auto",
    marginTop:"50px"
    ,"&>div":{
        marginTop:"30px"
    }
})

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ymuljoo', 'template_ygf4bbh', form.current, 'vdxoEYr5eTQISfu1z')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <Container ref={form} onSubmit={sendEmail} className="form">
            <Typography variant="h3" sx={{textAlign:"center"}}>CONTACT US</Typography>
            <Typography sx={{marginTop:3,letterSpacing:.4}}> We're here to address your inquiries and provide assistance!</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  name="user_name"/>
            </FormControl>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input type="email" name="user_email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input type="number"  name="user_phone"/>
            </FormControl>
            <FormControl>
                <InputLabel >Message</InputLabel>
                <Input  name="message"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="secondary" value="Send" type="submit">Submit</Button>
            </FormControl>

        </Container>
    )
}
export default Contact;