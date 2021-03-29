import React, { Component } from 'react';
import CourseGrid from '../Organisms/CourseGrid';
import "../../styles/styles.scss"
import axios from 'axios';


class Cursos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cursos: []
        }
    }

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/kencruga14/json-db/cursos').then(
            resp => this.setState({
                cursos: resp.data
            })
        )
    }

    render() {
        const { cursos } = this.state
        return <CourseGrid cursos={cursos} />
    }
}

export default Cursos
