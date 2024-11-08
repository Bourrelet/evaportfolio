import React from 'react';
import data from '../data/data.json'
import Badge from '../components/Badge';

function Home() {
  
  return (
    <div className="home-page">
      <div className="home-page__intro">
        <div className="home-page__intro__txt">
          <h1>Web Developer Eva</h1>
          <h2>Hello human, I can help.</h2>
          <p>I have so many skills now : </p>
        </div>
        <div className="home-page__intro__frame">
          <img className="home-page__intro__frame__photo" src="/images/eva_placeholder.jpg" alt="portrait of Eva"/>
        </div>
      </div>

      <div className="home-page__intro__badges">
        {data.techs.map(tech =>
          (<Badge
          key={tech.id}
          id={tech.id}
          name={tech.name}
          logo={tech.logo}
          skills={tech.skills}
          />))
        }  
      </div>
    </div>
  );
}

export default Home;
