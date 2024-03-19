import './App.css';
import WelcomePage from './pages/WelcomePage';
import Counter from './components/Counter';
import TestComponent from './components/TestComponent';
import ToDoList from './pages/ToDoList';
import ToDoDiv from './components/ToDoDiv';
import TodoList from './pages/TodoListTest';
import Clock from './components/Clock'


import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import MyRoutes from './pages/Portfolio/MyRoutes';
import CustomHooks from './components/CustomHooks';
import hoc from './components/HOC/HigherOrderComponent';
import Ajax from './components/AJAX';
import { ParallaxProvider } from 'react-scroll-parallax';


import Root from './pages/Portfolio/Root';
import ReactThreeFiber from './components/React Three Fiber';




function App() {
return (
  
    <Root />
)
  
}

export default App;


/* */

    /*let user = {}

  const provjeriPermisije = (componentId) => {
    if (componentId === 'clock') return true;
    return false;
  }
  const StopwatchWOAuthorisation = hoc(Clock, provjeriPermisije);
  
  

  return (
   <StopwatchWOAuthorisation name='milos'/>
  ); */