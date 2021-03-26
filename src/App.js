import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso';
import Banner from './Banner';
import Formulario from './Formulario';
// import logo from './logo.svg';
// const cursos = [
// {
// "titulo": "Angular",
// "imagen": "https://edteam-media.s3.amazonaws.com/courses/medium/461267d0-827f-4011-89ac-8403fe2eedb7.png",
// "precio": "46 USD",
// "profesor": "Doménica Armijos"
// },
// {
// "titulo": "Nodejs",
// "imagen": "https://edteam-media.s3.amazonaws.com/courses/medium/3cc48fa0-8327-4561-aa04-dafc3b799909.png",
// "precio": "32 USD",
// "profesor": "Valeria Cruz"
// },
// {
// "titulo": "React",
// "imagen": "https://ux.ed.team/img/curso-portada.png",
// "precio": "40 USD",
// "profesor": "Kenny Cruz"
// }
{/* <div className="ed-grid m-grid-3">
  {
    cursos.map(c => <Curso key={c.titulo.toString()} titulo={c.titulo} imagen={c.imagen} precio={c.precio} profesor={c.profesor} /> )
  }
</div>  */}
// ]

const App = () => (
  <>
  <Banner />
  <Formulario />

</>
)

export default App;
  