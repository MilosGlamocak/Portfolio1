import React from "react";
import InputComponent from "./CustomInput";
import './ToDoDiv.css';
import propTypes from 'prop-types';

function ToDoDiv(props) {

    let bg = {
        width: '100%',
        height: '100vh',
        backgroundColor: 'white'
    }

    return (
            <div className="container">
                <div className="rightSide">
                    <div className="checkbox"></div>
                    <p className='todoText'>{props.text}</p>
                </div>
                <div className="leftSide">
                    <div className="delete"></div>
                </div>
            </div>
        
    )

    
}

ToDoDiv.propTypes = {
    text: propTypes.string,
}


export default ToDoDiv