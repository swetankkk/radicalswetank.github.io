import React from 'react';
import './footer.css';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Icon from './icon.js';

function Footer() {
 

  return (
    <div className="Connectbar">
      <div className="Connect">Let's Connect</div>
      <div className="Iconsgroup">
        <Icon icon={faAt} url={'mailto:swetank199@gmail.com'} bC={'#ce473a'} />
        <Icon icon={faLinkedinIn} url={'https://www.linkedin.com/in/radicalswetank/'} bC={'#0077b5'} />
        <Icon icon={faGithub} url={'https://github.com/radicalswetank'} bC={'#24292e'} />
        <Icon icon={faTwitter} url={'https://twitter.com/radicalswetank'} bC={'#55acee'} />
        <Icon
          icon={faInstagram}
          url={'https://www.instagram.com/radicalswetank/'}
          bC={
            'radial-gradient(circle at 30% 110%, #ffdb8b 0%,#ee653d 25%,#d42e81 50%,#a237b6 75%,#3e5fbc 100%)'
          }
        />
        <Icon icon={faFacebookF} url={'https://www.facebook.com/radicalswetank'} bC={'#3b5999'} />
      </div>
    </div>
  );
}
export default Footer;
