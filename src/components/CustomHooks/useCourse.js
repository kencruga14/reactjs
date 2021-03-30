import { useState, useEffect } from "react";
import axios from 'axios';


const useCourse = id => {
    const [curso, setCurso] = useState({})
    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/kencruga14/json-db/cursos/${id}`)
            .then(res => setCurso(res.data))
    }, [])
    return curso;
}

export default useCourse