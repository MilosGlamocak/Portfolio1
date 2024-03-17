import { Container, Modal, Button, TextField } from "@mui/material";
import './Contact.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AnimatedPage from "./AnimatedPage";
import { useState } from "react";
import { ThemeContext } from './Root';
import { useContext } from "react";


function Contact() {

    let [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {theme, setTheme} = useContext(ThemeContext);


    return (
        <AnimatedPage>
            <Container className="contact">
                <Button className="iconMailOutlineBtn"
                onClick={handleOpen}
                ><MailOutlineIcon className={`iconMailOutline ${theme === 'dark' ? 'darkIcon' : 'lightIcon'}`}/></Button>
                
                <Modal 
                open = {open}
                onClose={handleClose}
                >
                    <Container style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '50px',
                    }} className="modalCont" >
                        <TextField id="standard-basic" label="Name" variant="standard" className="inputField" />
                        <TextField id="standard-basic" label="Email" variant="standard" className="inputField"/>
                        <TextField id="standard-basic" label="Message" variant="standard" className="inputField" />
                        <Button className="submit">Send</Button>
                    </Container>
                </Modal>
            </Container>
        </AnimatedPage>
    )
}

export default Contact