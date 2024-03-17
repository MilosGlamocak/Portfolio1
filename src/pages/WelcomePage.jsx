import React from "react";
import propTypes from 'prop-types';
import SignUpForm from "./SignUpForm";
import Greetings from "../components/Greetings";


function WelcomePage({korisnikPrijavljen, color}) {
    return korisnikPrijavljen ? <Greetings name='POMAZE BOG' textColor='red'/> : <SignUpForm />

}



WelcomePage.propTypes ={
    korisnikPrijavljen: propTypes.bool.isRequired,
    color: propTypes.string.isRequired,
}

export default WelcomePage;

/* return korisnikPrijavljen ? <div style={{color: `${color}`, fontSize: 30, fontWeight: 700, textAlign: 'center'}}>POMAZE BOG</div> : <SignUpForm />;*/