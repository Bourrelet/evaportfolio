import React from 'react';
import Card from '../components/Card';
import data from '../data/data.json';
import '../styles/Work.scss';


function Work() {
  return (
    <div className='myWork'>
      <h2 className='myWork__title'>Some Projects</h2>
      <div className='myWork__box'>
        {data.works.map(work => 
          (<Card 
            key={work.id}
            id={work.id}
            title={work.title}
            cover={work.cover}
            description={work.description}
            samples={work.samples}
            link={work.link}
          /> ))}               
      </div>
      
    </div>
  );
}

export default Work;
