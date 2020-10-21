import React from 'react';
import style from './SideArea.style.js';

const Area = () => {
    return (
      <div style={style.sidebar}>
        <h1 style={style.head}>SWETANK</h1>
        <div style={style.subhead}>Web Developer and Fintech Enthusiast</div>
        <div>
          <div style={style.buttons}>
            About
            <br />
          </div>
          <div style={style.buttons}>
            Skills
            <br />
          </div>
          <div style={style.buttons}>
            Projects Talks
            <br />
          </div>
          <div style={style.buttons}>Certifications</div>
        </div>
      </div>
    );
};
export default Area;