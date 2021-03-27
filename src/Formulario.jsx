import React from 'react';
import "./styles/styles.scss";

class Formulario extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        this.obtenerNombre = this.obtenerNombre.bind(this);
        this.obtenerCorreo = this.obtenerCorreo.bind(this);
    }

    obtenerNombre(e) {
        this.setState({
            nombre: e.target.value, 
        })
    }

    obtenerCorreo(e) {
        this.setState({
            correo: e.target.value, 
        })
    }

    parseDate(){
        this.setState({
            fecha: new Date()
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                <h4>{Math.ceil(this.state.fecha/1000)}</h4>
                    <div className="div ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Compelto</label>
                            <input type="text" onChange={this.obtenerNombre} />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email" onChange={this.obtenerCorreo} />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tú correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.intervaloFecha = setInterval(()=>{
            this.parseDate();
            // console.log(new Date());
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(prevProps); 
        // console.log(prevState);
        // console.log("---------------------");
    }

    componentWillUnmount(){
        clearInterval(this.intervaloFecha);
    }
}

export default Formulario;