import React from 'react';
import "./styles/styles.scss"

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="https://images4.alphacoders.com/676/thumb-1920-676369.jpg" alt='r6' />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Rainbox Six Siege</p>
                    <p> Operadores</p>
                    <a href="https://www.ubisoft.com/es-mx/game/rainbow-six/siege/game-info/operators" className="button">Ver Agentes</a>
                </div>
            </div>
        </div>
    </div>
)

export default Banner;