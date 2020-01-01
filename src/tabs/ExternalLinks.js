import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf} from '@fortawesome/free-regular-svg-icons';
import "./ExternalLinks.css";
import pdf from '../res/resume.pdf';


const ExternalLinks = () => {
  return (
    <div id="icons">
      <a href="https://github.com/tportfolio">
        <FontAwesomeIcon className="icon" icon={faGithub} size="2x" color="black" />
      </a>
      <a href="https://linkedin.com/in/tportfolio/">
        <FontAwesomeIcon className="icon linkedin" icon={faLinkedin} size="2x" color="#0072b1" />
      </a> 
      <a href={pdf}>
        <FontAwesomeIcon className="icon" icon={faFilePdf} size="2x" color="red"/>
      </a>           
    </div>  
  );
}

export default ExternalLinks;