import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* Header avec liens de navigation */}
      <header className="header">
        <h1>Eva Portfolio</h1>
        <nav>
          <a href="#about">Présentation</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Section Présentation */}
      <section id="about" className="about">
        <h2>Présentation</h2>
        <p>
          Bienvenue sur mon portfolio ! Je suis Eva, développeuse passionnée par le web.
          Voici mon parcours, mes intérêts, et ce que j’aime dans le développement.
        </p>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="skills">
        <h2>Compétences</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS / SCSS</li>
          <li>Bootstrap</li>
        </ul>
      </section>

      {/* Section Projets */}
      <section id="projects" className="projects">
        <h2>Projets</h2>
        <div className="project-card">
          <h3>Projet 1 : Application Web</h3>
          <p>Un projet utilisant React et Node.js.</p>
          <a href="https://github.com/tonrepo/projet1" target="_blank" rel="noopener noreferrer">
            Voir sur GitHub
          </a>
        </div>
        {/* Ajouter d'autres cartes de projet si nécessaire */}
      </section>

      {/* Section Contact */}
      <footer id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email : eva.boulanger90@gmail.com</p>
        <p>LinkedIn : <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">Eva sur LinkedIn</a></p>
        <p>GitHub : <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer">Eva sur GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
