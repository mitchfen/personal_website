import pgpKey from '../assets/mitchfen.asc'
import headShot from '../assets/headshot.jpg'

import { SiGithub, SiLinkedin, SiMailDotRu, SiOrcid } from 'react-icons/si';
import { GoLock } from 'react-icons/go';

const About = () => {
  return (
    <>    
      <div className="row">
        <div className="col-sm-3">
          <h2>Mitchell Fenner</h2>
          <img src={headShot} width="100%" alt="My cute face."/>
        </div>
        <div className="col-sm-9">
          <br/>
          <br/>
          <p>
          Welcome!
          <br/>
          I built this site with React, JavaScript, and Bootstrap. It's deployed on GitHub pages.
          <br/>
          <a href="https://github.com/mitchfen/personal_website">View the source code on GitHub 🡥</a>
          <br/>
          <br/>
          <SiGithub /> <a href="https://github.com/mitchfen" rel="noopener noreferrer" target="_blank">mitchfen</a>
          <br/>
          <SiMailDotRu /> <a href="mailto:mitchfen@protonmail.com">mitchfen@protonmail.com</a>
          <br/>
          <SiLinkedin /> <a href="https://www.linkedin.com/in/mitchfen/">mitchfen</a>
          <br/>
          <SiOrcid /> <a href="https://orcid.org/0000-0002-9684-0447">0000-0002-9684-0447</a>
          <br/>
          <GoLock /> <a href={pgpKey} rel="noopener noreferrer" target="_blank">Download my PGP key</a> &#8595;
          <br/>
          <br/>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;