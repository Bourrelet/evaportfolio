import React, { useState } from 'react'; 
import '../styles/Badge.scss';

function Badge({id, name, logo, skills, color}) {
 
  const [detected, setDetected] = useState(false);

  const detection = () => {
      setDetected(!detected);
  }

  const techNameAnimation = `${detected ? 'visible' : 'invisible'}`;
  const skillsAnimation = `${detected ? 'open' : 'closed'}`;
  const badgeAnimation =  `${detected ? 'noticed' : 'unnoticed'}`;
  

  return (
    <div className='badge' onMouseEnter={detection} onMouseLeave={detection}>

      <div className={` badge__frame ${badgeAnimation}`}>

        <div className='badge__frame__tech' >
          <img className='badge__frame__tech__logo' src={logo} alt={`${name} logo`}/>
          <p className={`badge__frame__tech__name ${techNameAnimation}`}>{name}</p>
        </div>

        <ul className={`badge__frame__skills ${skillsAnimation}`}>
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul> 

      </div> 
    </div>
  );
}

export default Badge;
