import React from 'react';
import style from './MainArea.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Area = () => {
    return (
    <div style={style.mainbar}> 
    
        To Be updated
        <div style={style.break} />
    Meanwhile feel free to connect 
    <div style={style.break} />
    <FontAwesomeIcon size={"5x"} icon={faAngleDoubleDown}/>
    </div>)
};
export default Area;