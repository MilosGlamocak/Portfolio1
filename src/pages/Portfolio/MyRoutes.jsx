import Portfolio from "./Portfolio";
import Home from './Home';
import Projects from './Projects';
import Info from './Info';
import Contact from './Contact'

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

function MyRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Portfolio />}>
            <Route index path='home' element={<Home/>}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='info' element={<Info />}/>
            <Route path='contact' element={<Contact />}/>
          </Route>
        </Routes>
      </AnimatePresence>
    )
    
}

export default MyRoutes