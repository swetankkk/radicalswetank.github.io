import React from 'react';
//import style from './SideArea.style.js';
import './SideArea.css';
const Area = () => {
  return (
    <div className="Sidebar">
      <h1 className="Head">SWETANK</h1>
      <div className="Subhead">Web Developer and Fintech Enthusiast</div>

      <div className="Hoverbuttons">
        About
        <br />
      </div>
      <div className="Hoverbuttons">
        Skills
        <br />
      </div>
      <div className="Hoverbuttons">
        Projects Talks
        <br />
      </div>
      <div className="Hoverbuttons">Certifications</div>
    </div>
  );
};
export default Area;
