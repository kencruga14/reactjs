import useCourse from '../CustomHooks/useCourse';
import React, { useState, useEffect } from 'react';


//Componente se renderiza una vez
const Curso = ({ match }) => {
    // const [state, setState] = useState({})
    const [comment, setComment] = useState("Sin comentarios")
    const curso = useCourse(match.params.id)

    const myComment = e => {
        setComment(e.target.value)
    }

    //const cursoElegido = cursos.filter(c => c.id === parseInt(match.params.id))[0]
    return (

        <div className="ed-grid m-grid-3">
            <>
                <div className="ed-grid">
                    <div className="l-block ">
                        <h1 className="m.cols-3">Curso: {curso.titulo}</h1>
                        <img className="m-cols-1" src={curso.imagen} alt="imagen" />
                        <p className="m-cols-2">Profesor: {curso.profesor}</p>
                    </div>

                    <div className="ed-grid">
                        <h2>Escribe tu comentario</h2>
                        <input type="text" placeholder="Escribe tu comentario" onChange={myComment.bind(this)} />
                        <p>{comment}</p>
                    </div>
                </div>
            </>
        </div>

    )
}

export default Curso;