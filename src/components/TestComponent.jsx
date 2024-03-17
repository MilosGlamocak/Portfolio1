import { useState } from "react";
import InputComponent from "./CustomInput";

export default function TestComponent() {
    let [userData, setUserData] = useState({firstname: '', lastname: '', age: 0,});

    let handleChange = (value) => {
        setUserData({...userData, [value.target.name]: value.target.value});
    }

    console.log(userData)

    return (
        <div>
            <InputComponent inputName ='firstname' inputPlaceholder='First Name' inputId = 'firstname' inputType='text' onChangeCustom={handleChange} />
            <InputComponent inputName ='lastname' inputPlaceholder='Last Name' inputId = 'lastname' inputType='text' onChangeCustom={handleChange}/>
            <InputComponent inputName ='age' inputPlaceholder='Age' inputId = 'age' inputType='number' onChangeCustom={handleChange}/>
        </div>
    )
}

//setUserData({...userData, [value.target.name]: value.target.value});