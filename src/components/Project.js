import React, { useState } from 'react'; // Ajoute `useState` à l'import
import '../styles/Project.scss';




function Project({samples, link, closeModale}) {

  
  const prevBtn = "<=";
  const nextBtn = "=>";

  const [activeIndex , setActiveIndex] = useState(0);

    const prevImg = () => {
        setActiveIndex((prevState) => (prevState === 0 ? samples.length - 1 : prevState - 1));
    };

    const nextImg = () => {
        setActiveIndex((prevState) => (prevState === samples.length - 1 ? 0 : prevState + 1));
    };


  return (
    <div className='project'>
      <button className='project__closeBtn' onClick={closeModale}> X </button>
      <div className='project__gallery'>
        <img className='gallerie__img' src={samples[activeIndex].image} alt={`${activeIndex} + 1`}/>
        {samples.length > 1 && (
        <div className='gallerie__nav'>
          <div className='gallerie__nav__btn' onClick={prevImg}>{prevBtn}</div>
          <div className='gallerie__nav__btn' onClick={nextImg}>{nextBtn}</div>
          <p className='gallerie__index'>{`${activeIndex + 1} / ${samples.length}`}</p>
        </div>)}
      </div>
      <div className='project__content'>
        <p className='project__content__txt' >{samples[activeIndex].comment}</p>
      </div>
      <div className='project__link'>{link}</div>
      
    </div>
  );
}

export default Project;
