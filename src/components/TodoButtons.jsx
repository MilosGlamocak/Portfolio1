
import React, { memo } from "react";
import propTypes from 'prop-types';

function TodoButtons({onChangeNaslov, onChangeSadrzaj, onClick, valueNaslov, valueSadrzaj}) {
    return (
<div><input
    type='text'
    placeholder='Naslov'
    onChange={onChangeNaslov}
    value={valueNaslov}
  />
  <input
    type='text'
    placeholder='Sadrzaj'
    onChange={onChangeSadrzaj}
    value={valueSadrzaj}
  />
  <button onClick={onClick}>Dodaj</button></div>
      
    )
    
}


TodoButtons.propTypes = {
    onChangeNaslov: propTypes.func,
    onChangeSadrzaj: propTypes.func,
    onClick: propTypes.func,
    valueNaslov: propTypes.string,
    valueSadrzaj: propTypes.string,
}
export default memo(TodoButtons);