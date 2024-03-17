import { Button, Avatar, Box, CircularProgress, Container, Popover, SpeedDial, ListItemText, ListItemButton, List} from '@mui/material';
import * as React from 'react';
import { useState, useCallback, useEffect, useContext } from 'react';
import { Outlet, Link, } from 'react-router-dom';
//npm install @fontsource/roboto;
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../Portfolio/Portfolio.css';
import { ThemeContext } from './Root';


function Portfolio() {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleChangeTheme = () => {
        console.log(theme)
        return theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    const initialPosition = JSON.parse(localStorage.getItem('blobPosition')) || { x: 900, y: 450 };

   

    let [position, setPosition] = useState(initialPosition);

    useEffect(() => {
        localStorage.setItem('blobPosition', JSON.stringify(position));
    }, [position]);
    
    
    return (
        <Container className={`bg ${theme === 'dark' ? 'dark' : 'light'}`}
        maxWidth = {false}
        onMouseMove={(e) => setPosition({x: e.clientX, y: e.clientY})}
        
        > 
        
       
        <Container className ={`cont`}
        maxWidth = {false}
        >
            
            <div className='blur'><div className={`blob ${theme === 'dark' ? 'blobDark' : 'blobLight'}`} style={{translate: `${position.x-900}px ${position.y}px `, transitionDuration: '0s'}}></div></div>

            
            <h1 className={`header ${theme === 'dark' ? 'dark' : 'light'}`}>Milos Glamocak</h1>
            <p className={`profession ${theme === 'dark' ? 'dark' : 'light'}`}>Front-end Developer</p>
            <nav className='navContainer'>
                <ul className={`menu ${theme === 'dark' ? 'dark' : 'light'}`}>
                    <li className='menuLine'><Link to ='home' className={`link ${theme === 'dark' ? 'darkText' : 'lightText'}`} >Home</Link></li>
                    <li className='menuLine'><Link to ='projects' className={`link ${theme === 'dark' ? 'darkText' : 'lightText'}`}>Projects</Link></li>
                   <li className='menuLine'><Link to ='info' className={`link ${theme === 'dark' ? 'darkText' : 'lightText'}`}>Info</Link></li>
                    <li className='menuLine'><Link to ='contact' className={`link ${theme === 'dark' ? 'darkText' : 'lightText'}`}>Contact</Link></li>
                </ul>
                <Outlet />
            </nav>
        </Container>
        <label className={`buttonLabel themeButtonLabel ${theme === 'dark' ? 'dark' : 'light'}`} htmlFor="themeButton">Theme</label>
        <button id='themeButton' onClick={handleChangeTheme} className={`button themeButton ${theme === 'dark' ? 'dark' : 'light'}`} />
        </Container>
    )
}

export default Portfolio;
