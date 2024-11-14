import React, { useState } from 'react'; 
import Project from './Project'; 
import '../styles/Card.scss';

const Card = ({id, title, cover, description, samples, link}) => {

  const [viewProject, setviewProject] = useState(false);   

    const toggleView = () => {
        setviewProject(!viewProject);
    }

  return (
    <div className='card'>
      {viewProject ? <Project samples={samples} link={link} closeModale={toggleView}/> : '' }      
      <div className='card__content'>
        <h3 className='card__content__title'>{title}</h3>
        <p className='card__content__txt'>{description}</p>
        <button className='card__content__btn' onClick={toggleView}>View Project</button>
      </div>
      <img className="card__cover" src={cover} alt={title}/>
    </div>
  );
}

export default Card;
