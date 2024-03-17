import propTypes from 'prop-types';

function Greetings({textColor, name}) {
    return <label style={{color: textColor ? textColor : 'black'}}>{name}</label>
}

Greetings.propTypes = {
    color: propTypes.string,
    name: propTypes.string,
}

export default Greetings;