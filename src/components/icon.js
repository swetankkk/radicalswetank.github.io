import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './icon.css';

function Icon(props) {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <ul>
        <li
          className="IconBackground"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={{ ...(hover ? { background: props.bC } : null) }}
        >
          <a
            href={props.url}
            onClick={() => {
              window.open('#', '_blank');
              window.open(props.url, '_self');
            }}
          >
            <FontAwesomeIcon
              className="Icon"
              icon={props.icon}
              size="xs"
              style={{ ...(hover ? { transform: 'rotateY(360deg)' } : null) }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Icon;
