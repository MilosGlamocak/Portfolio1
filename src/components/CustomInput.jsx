import propTypes from 'prop-types';

function InputComponent({
    inputType,
    inputPlaceholder, 
    inputId, 
    required,
    onChangeCustom,
    inputWidth,
    inputHeight,
    inputName,
    inputValue,

    }) {
    return <input 
        style={{
            borderRadius: '10px',
            borderWidth: '2px',
            borderColor: 'darkblue',
            minHeight: '30px',
            outline: 'none',
            fontWeight: '500',
            width: {inputWidth},
            height: {inputHeight},
            textAlign: 'center',
            fontSize: '15px',
            padding: '3px',
            margin: '5px',
            color: 'black'
        }}

    type = {inputType} 
    id={inputId} 
    required = {required}
    placeholder={inputPlaceholder}
    onChange={(event) => {
        onChangeCustom(event);
    }}
    name={inputName}
    value={inputValue}/>
}

InputComponent.propTypes = {
    inputName: propTypes.string,
    inputHeight: propTypes.string,
    inputWidth: propTypes.string,
    inputType: propTypes.string.isRequired,
    inputId: propTypes.string.isRequired,
    inputPlaceholder: propTypes.string,
    onChangeCustom: propTypes.func,
    required: propTypes.bool,
    inputName: propTypes.string,
    inputValue: propTypes.string,
}

export default InputComponent;