import React, { useState } from 'react'; // Ajoute `useState` à l'import
import '../styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';






function Project({samples, link, closeModale}) {

  
  const prevBtn = <FontAwesomeIcon icon={faAngleLeft} />;
  const nextBtn = <FontAwesomeIcon icon={faAngleRight} />;

  const [activeIndex , setActiveIndex] = useState(0);

    const prevImg = () => {
        setActiveIndex((prevState) => (prevState === 0 ? samples.length - 1 : prevState - 1));
    };

    const nextImg = () => {
        setActiveIndex((prevState) => (prevState === samples.length - 1 ? 0 : prevState + 1));
    };


  return (
    <div className='project'>
      
      <div className='project__gallery'>
        <img className='gallerie__img' src={samples[activeIndex].image} alt={`${activeIndex + 1}`}/>
        {samples.length > 1 && (
        <div className='gallerie__nav'>
          <div className='gallerie__nav__btn' onClick={prevImg}>{prevBtn}</div>
          <div className='gallerie__nav__btn' onClick={nextImg}>{nextBtn}</div>
          <p className='gallerie__index'>{`${activeIndex + 1} / ${samples.length}`}</p>
        </div>)}
      </div>

      <div className='project__content'>
        <p className='project__content__txt' >{samples[activeIndex].comment}</p>
        <div className='project__content__btn'> 
          <button className='project__content__btn__close' onClick={closeModale}> Close Project </button>
          <button className='project__content__btn__link' onClick={() => window.open({link})}> GitHub </button>
        </div>
        
      </div>

      
      
    </div>
  );
}

export default Project;
