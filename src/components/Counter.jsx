import React, { useState } from "react";
import InputComponent from "./CustomInput";

function Counter() {
    let [number, setNumber] = useState(1)

    let [color, setColor] = useState('red')

    function checkNum(num) {
        num = parseInt(num)
        if (num < 1 || num > 10) {
            alert('ACCEPTED 1-10 ONLY')
        }
        else {
            if (num >= 1 && num <= 3) {
                setColor('red')
            } else if (num >= 4 && num <= 7) {
                setColor('yellow')
            } else if (num >= 8 && num <= 10) {
                setColor('green')
            }
        }
    }

    let divStyle = {
        backgroundColor: color,
        height: '100px'
    }

    return <div style={divStyle}>
        <InputComponent inputType='number' inputId='colorSet' onChangeCustom={(e) => setNumber(e)}/>
        <button style={{color: 'black'}} onClick={() => checkNum(number)}>CHECK</button>
    </div>
}

export default Counter

//<input type="number" onChange={(e) => setNumber(e.currentTarget.value)}></input>