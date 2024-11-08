import React from 'react';
import techs from '../data/data.json'
import Badge from '../components/Badge';

function Home() {
  return (
    <div className="home-page">
      <div className="home-page__intro">
        <div className="home-page__intro__txt">
          <h1>Web Developer</h1>
          <h2>Hello human, you can call me Eva.</h2>
          <p>I have so many skills now : </p>
        </div>
        <div className="home-page__intro__frame">
          <img className="home-page__intro__frame__photo"/>
        </div>
      </div>

      <div className="home-page__intro__badges">
        {techs.map(tech =>
          (<Badge
          key={tech.id}
          id={tech.id}
          name={tech.name}
          logo={tech.logo}
          description={tech.description}
          />))
        }  
      </div>
    </div>
  );
}

export default Home;
