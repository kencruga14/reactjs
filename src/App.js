import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'
// import logo from './logo.svg';
const cursos = [
{
"titulo": "Angular",
"imagen": "https://edteam-media.s3.amazonaws.com/courses/medium/461267d0-827f-4011-89ac-8403fe2eedb7.png",
"precio": "46 USD",
"profesor": "Doménica Armijos"
},
{
"titulo": "Nodejs",
"imagen": "https://edteam-media.s3.amazonaws.com/courses/medium/3cc48fa0-8327-4561-aa04-dafc3b799909.png",
"precio": "32 USD",
"profesor": "Valeria Cruz"
},
{
"titulo": "React",
"imagen": "https://ux.ed.team/img/curso-portada.png",
"precio": "40 USD",
"profesor": "Kenny Cruz"
}
]

const App = () => (
  <>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://images4.alphacoders.com/676/thumb-1920-676369.jpg" alt='r6'/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Rainbox Six Siege</p>
        <p> Operadores</p>
        <a href="https://www.ubisoft.com/es-mx/game/rainbow-six/siege/game-info/operators" className="button">Ver Agentes</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  {
    cursos.map(c => <Curso key={c.titulo.toString()} titulo={c.titulo} imagen={c.imagen} precio={c.precio} profesor={c.profesor} /> )
  }
</div>
</>
)

export default App;
  