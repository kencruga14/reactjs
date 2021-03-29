import React from 'react';
import CourseCard from "../Molecules/CourseCard"
import withLoader from '../HOC/withLoader';

const CourseGrid = ({ cursos }) => (
    <div className="ed-grid m-grid-4">
        {  cursos.map(c => (
            <CourseCard
                key={c.id}
                id={c.id}
                titulo={c.titulo}
                imagen={c.imagen}
                precio={c.precio}
                profesor={c.profesor}
            />
        ))
        }
    </div>
)


export default withLoader("cursos",CourseGrid)