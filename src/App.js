import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
  {
    "titulo": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": "30",
    "profesor": "Beto Quiroga"
  },
  {
    "titulo": "HTML desde cero 2018",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price": "20",
    "profesor": "Alvaro Felipe"
  },
  {},
  {}
]

const App = () => {
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
        {
          cursos.map( c => <Curso title={c.titulo} image={c.image} price={c.price} profesor={c.profesor}/>)
        }
      </div>
      
    </>
  );
}

export default App;
