import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/styles.scss";
import {Link} from 'react-router-dom';


const CourseCard = ({ id, titulo, imagen, precio, profesor }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={imagen} alt={titulo} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{titulo}</h3>
      <div className="s-main-center">
        {`Profesor.: ${profesor}`}
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://www.ubisoft.com/es-mx/game/rainbow-six/siege/game-info/operators/flores">{`$ ${precio}`} </a>
      </div>
    </div>
  </article>
)

CourseCard.propTypes = {
  titulo: PropTypes.string,
  imagen: PropTypes.string,
  precio: PropTypes.string,
  profesor: PropTypes.string
}

CourseCard.defaultProps = {
  titulo: "No se encontró titulo",
  imagen: "No se encontró imagen",
  precio: "No se encontró imagen",
  profesor: "No se encontró Profesor",
}

export default CourseCard;