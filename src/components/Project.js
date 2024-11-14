import React, { useState } from 'react'; 
import '../styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';






function Project({samples, link, closeModale}) {

  
  const prevBtn = <FontAwesomeIcon icon={faAngleLeft} />;
  const nextBtn = <FontAwesomeIcon icon={faAngleRight} />;
  const gitHubCat = <FontAwesomeIcon icon={faGithub} />;

  const [activeIndex , setActiveIndex] = useState(0);

    const prevImg = () => {
        setActiveIndex((prevState) => (prevState === 0 ? samples.length - 1 : prevState - 1));
    };

    const nextImg = () => {
        setActiveIndex((prevState) => (prevState === samples.length - 1 ? 0 : prevState + 1));
    };


    const [bannerView , setBannerView] = useState(true);
    const toggleBanner = () => {
      setBannerView(!bannerView);
    }
    const bannerAnimation = `${bannerView ? 'bannerYes' : 'bannerNo'}`;





  return (
    <div className='project'>
      
      <div className='project__gallery' onMouseEnter={toggleBanner} onMouseLeave={toggleBanner}>
        <img className='project__gallery__img' src={samples[activeIndex].image} alt={`${activeIndex + 1}`}/>
        {samples.length > 1 && (
        <div className='project__gallery__nav'>
          <p className='project__gallery__nav__index'>{`${activeIndex + 1} / ${samples.length}`}</p>        
        </div>)}        
      </div>

      <div className={`project__content ${bannerAnimation} `}>
      {samples.length > 1 && (
        <div className='project__content__nav'>
            <div className='project__content__nav__btn-prev' onClick={prevImg}>{prevBtn}</div>
            <div className='project__content__nav__btn-next' onClick={nextImg}>{nextBtn}</div>
        </div>)}
        <p className='project__content__txt' >{samples[activeIndex].comment}</p>
        <div className='project__content__btn'> 
          <button className='project__content__btn__close' onClick={closeModale}> Close Project </button>
          <button className="project__content__btn__link" onClick={() => window.open(link, '_blank')}>{gitHubCat}</button>
          

        </div>
        
      </div>

      
      
    </div>
  );
}

export default Project;
