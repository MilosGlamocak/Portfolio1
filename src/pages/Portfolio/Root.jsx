import MyRoutes from './MyRoutes';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { createContext, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export const ThemeContext = createContext();

function Root() {

    let [theme, setTheme] = useState('dark');
return (
  <ParallaxProvider>
    <ThemeContext.Provider value={{theme, setTheme, ThemeContext}}>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </ThemeContext.Provider>
  </ParallaxProvider>

    
)
}

export default Root;