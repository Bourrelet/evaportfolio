import React from 'react';
import '../styles/Badge.scss'; // Chemin relatif vers le dossier styles

function Badge({id, name, logo, skills}) {
 
  // const [detected, setDetected] = useState(false);

  // const detection = () => {
  //     setDetected(!detected);
  // }

  // const dynamicTag = `${detected ? 'isOpen' : 'isClosed'}`;
  // const dynamicRotation = `${detected ? 'down' : 'up'}`;

  return (
    <div className='badge'>
      <div className='badge__tech'>
        <img className='badge__tech__logo' src={logo} alt={`${name} logo`}/>
        <p className='badge__tech__name'>{name}</p>
      </div>
      <div className='badge__skills'>
        {skills.map((skill, index) => <p key={index}>{skill}</p>)}
      </div>  
    </div>
  );
}

export default Badge;
