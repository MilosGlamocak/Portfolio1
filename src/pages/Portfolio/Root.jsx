import MyRoutes from './MyRoutes';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { createContext, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactThreeFiber from '../../components/React Three Fiber';

export const ThemeContext = createContext();

function Root() {

    let [theme, setTheme] = useState('dark');
return (
  <div style={{overflow: 'hidden', height: '100vh', backgroundColor: 'black'}}>
<ParallaxProvider>
    <ThemeContext.Provider value={{theme, setTheme, ThemeContext}}>
    <BrowserRouter>
    <ReactThreeFiber />
      <MyRoutes />
      
    </BrowserRouter>
  </ThemeContext.Provider>
  </ParallaxProvider>
  </div>
  

    
)
}

export default Root;