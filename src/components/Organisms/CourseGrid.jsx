import React from 'react';
import Curso from '../Pages/Curso';
import "../../styles/styles.scss"

const cursos = [
    {
        "id": 1,
        "titulo": "Angular",
        "imagen": "https://edteam-media.s3.amazonaws.com/courses/medium/461267d0-827f-4011-89ac-8403fe2eedb7.png",
        "precio": "46 USD",
        "profesor": "Doménica Armijos"
    },
    {
        "id": 2,
        "titulo": "Nodejs",
        "imagen": "https://edteam-media.s3.amazonaws.com/courses/medium/3cc48fa0-8327-4561-aa04-dafc3b799909.png",
        "precio": "32 USD",
        "profesor": "Valeria Cruz"
    },
    {
        "id": 3,
        "titulo": "React",
        "imagen": "https://ux.ed.team/img/curso-portada.png",
        "precio": "40 USD",
        "profesor": "Kenny Cruz"
    }
]
const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
    cursos.map(c => <Curso 
        key={c.id} 
        id={c.id} 
        titulo={c.titulo} 
        imagen={c.imagen} 
        precio={c.precio} 
        profesor={c.profesor} /> )
        }
    </div>
)

export default CourseGrid
