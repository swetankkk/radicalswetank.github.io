import React from 'react';
import './footer.css';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import Icon from './icon.js';

function Footer() {
 

  return (
    <div className="Connectbar">
      <div className="Connect">Let's Connect</div>
      <div className="Iconsgroup">
        <Icon icon={faLinkedinIn} bC={"#0077b5"} />
        <Icon icon={faTwitter} bC={"#55acee"} />
        <Icon icon={faFacebookF} bC={"#3b5999"} />
      </div>
    </div>
  );
}
export default Footer;
