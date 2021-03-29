import React from 'react';
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

const Curso = ({ match }) => {
console.log("id", match.params.id)
    const cursoElegido = cursos.filter(c => c.id === parseInt(match.params.id))[0]
        return (
            <div className="ed-grid m-grid-3">
                <h1 className="m.cols-3">Curso: {cursoElegido.titulo}</h1>
                <img className="m-cols-1" src={cursoElegido.imagen} alt="imagen" />
                <p>Descripción</p>
            </div>
        )
    }
    
export default Curso;