import React, { useState } from 'react'; // Ajoute `useState` à l'import
import Project from './Project'; // Assure-toi d'importer `Project` correctement

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
        <p className='card__content_txt'>{description}</p>
        <button className='card__content__btn' onClick={toggleView}>View Project</button>
      </div>
      <img className="card__cover" src={cover} alt={title}/>
    </div>
  );
}

export default Card;
