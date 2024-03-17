import { Container } from "@mui/material";
import AnimatedPage from "./AnimatedPage";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { useContext } from "react";
import { ThemeContext } from "./Root";
import './Info.css'

function Info() {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <AnimatedPage>
            <Container className="info" >
                    
                <InstagramIcon onClick={() => console.log(true)} className={`icon iconInsta ${theme === 'dark' ? 'darkIcon' : 'lightIcon'}`}/>
                <FacebookIcon  className={`icon iconFacebook ${theme === 'dark' ? 'darkIcon' : 'lightIcon'}`}/>
                <XIcon  className={`icon iconX ${theme === 'dark' ? 'darkIcon' : 'lightIcon'}`}/>
                <LinkedInIcon className={`icon iconLinkedIn ${theme === 'dark' ? 'darkIcon' : 'lightIcon'}`} />
                <YouTubeIcon className={`icon iconYouTube ${theme === 'dark' ? 'darkIcon' : 'lightIcon'}`} />

            </Container>
        </AnimatedPage>
    )
}

export default Info