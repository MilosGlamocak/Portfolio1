import AnimatedPage from "./AnimatedPage";
import { ThemeContext } from './Root';
import { useContext } from "react";


function Home() {
  console.log('rendered home')

  const {theme, setTheme} = useContext(ThemeContext);
 return (
   <AnimatedPage><p className={`description ${theme === 'dark' ? 'darkText' : 'lightText'}`}>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem id aspernatur eius dicta optio, vero doloribus dolorem qui consequuntur blanditiis expedita ipsam ut praesentium laudantium non tempora eaque similique consectetur?
 </p></AnimatedPage>
    
 )
}

export default Home;