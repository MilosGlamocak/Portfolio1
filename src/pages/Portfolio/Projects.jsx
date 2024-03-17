import { Container } from "@mui/material";
import AnimatedPage from "./AnimatedPage";
import './Projects.css';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Root";

function Projects() {
    const { theme } = useContext(ThemeContext);
    let [positionY, setPositionY] = useState(0);
    const maxY = -100;
    const minY = -1200


    useEffect(() => {
        let scrollDiv = document.getElementById('scrollDiv');

        function handleScroll(e) {
            e.preventDefault();
            let deltaY = e.deltaY;

            if (positionY >= maxY && deltaY < 0) {
                setPositionY(positionY => positionY);
            } else if (positionY <= minY && deltaY > 0) {
                setPositionY(positionY => positionY);
            } else {
                setPositionY(positionY => positionY - (deltaY * 0.5));
            }
        }
        scrollDiv.addEventListener("wheel", handleScroll);
        return () => {
            scrollDiv.removeEventListener("wheel", handleScroll);
        };
    }, [positionY]);
    return (
        <AnimatedPage>
            <Container
                className="projectsCont"
                sx={{
                    display: 'flex',
                    overflowY: 'auto',
                    
                }}
                style={{
                    transform: `translate(0%, ${positionY}px)`
                }}
                id="scrollDiv"
            >
                {Array.from({ length: 10 }, (_, i) => (
                    <a
                        key={i}
                        href="https://codepen.io/Milos-Glamocak"
                        className={`projectsLink ${theme === 'dark' ? 'darkText' : 'lightText'}`}
                        target="_blank"
                    >
                        CodePen
                    </a>
                ))}
            </Container>
        </AnimatedPage>
    );
}

export default Projects;
