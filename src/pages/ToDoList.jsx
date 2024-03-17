import React, { useState } from "react"
import InputComponent from "../components/CustomInput"
import ToDoDiv from "../components/ToDoDiv"

function ToDoList() {
    let container ={
        backgroundColor: 'white',
        width: '100%',
        height: '100vh',
    }

    let toDoContainer = {
        width: '400px',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: 'gray',
        padding: '20px'
    }

    let [task, setTask] = useState('');
    let [currentTasks, setCurrentTasks] = useState([]);

    function handleSubmit() {
        if (task.length > 0) {
            setCurrentTasks([task, ...currentTasks]) && console.log(true);
            /* ne radi: */setTask('') && console.log(true);
            console.log(currentTasks);
        }

    };  

    return (
        <div style={container}>
            <InputComponent inputId="toDoInput" inputName='toDoName' required inputType="text" onChangeCustom={(e) => setTask(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            <div style={toDoContainer}>{currentTasks.map((item) => {
               return <ToDoDiv text={item}/>
            })}</div>
        </div>
    )
}

export default ToDoList