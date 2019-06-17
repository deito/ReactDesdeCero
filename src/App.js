import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

function App() {
  return (
    <>
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src="https://free4kwallpapers.com/uploads/originals/2018/05/14/server-datacenter-wallpaper.jpg" alt="Banner"/>
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="https://ed.team" className="button">Botón del banner</a>
            </div>
          </div>
        </div>
      </div>

      <div className="ed-grid m-grid-3">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
      </div>
      
    </>
  );
}

export default App;
