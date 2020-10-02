import React,{useState} from "react";
import style from './icon.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon(props) {
    const [hover, setHover] = useState(false);
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                <li
                    onMouseEnter={() => {
                        setHover(true);
                    }}
                    onMouseLeave={() => {
                        setHover(false);
                    }}
                    style={{
                        ...style.iconBackground,
                        ...(hover ? { backgroundColor: props.bC } : style.before),
                    }}
                >
                    <a href="href">
                        <FontAwesomeIcon
                            style={{
                                ...style.normal,
                                ...(hover ? style.hover : null),
                            }}
                            icon={props.icon}
                        />
                    </a>
                </li>
            </ul>

        </div>
    );

}
        
export default Icon;