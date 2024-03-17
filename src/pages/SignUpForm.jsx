import React from "react";
import propTypes from 'prop-types';
import InputComponent from "../components/CustomInput";

function SignUpForm() {
return <div style={{backgroundColor: 'blue', width: 300, height: 300}}>
    <form style={form}>
        <label htmlFor="name">Name</label>
        <InputComponent inputType='text' inputId='name' inputPlaceholder='Milos Glamocak' onChangeCustom={(text) => console.log(text)} required/>
        <label htmlFor="email">Email</label>
        <InputComponent inputType='text' inputId='email' inputPlaceholder='milosglamocak@gmail.com' onChangeCustom={(text) => console.log(text)} required/>
        <label htmlFor="pw">Password</label>
        <InputComponent inputType='password' inputId='pw' onChangeCustom={(text) => console.log(text)} required/>
        <input type="submit" />
    </form>
</div>
}

const form = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

}

export default SignUpForm;