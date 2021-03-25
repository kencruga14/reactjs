import React from 'react';
import PropTypes from 'prop-types';

const Curso = ({titulo, imagen, precio, profesor}) => (
  <article classNameName="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={imagen} alt={titulo} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className>{titulo}</h3>
      <div className="s-main-center">
        {`Profesor.: ${profesor}`}
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://www.ubisoft.com/es-mx/game/rainbow-six/siege/game-info/operators/flores">{ `$ ${precio}`} </a>
      </div>
    </div>
  </article>
)

Curso.propTypes = {
  titulo: PropTypes.string,
  imagen: PropTypes.string,
  precio: PropTypes.string,
  profesor: PropTypes.string
}

Curso.defaultProps = {
 titulo: "No se encontró titulo",
 imagen: "No se encontró imagen",
 precio: "No se encontró imagen",
 profesor: "No se encontró Profesor",
}

export default Curso;
