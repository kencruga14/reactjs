import React from 'react';

const Curso = () => (
<article classNameName="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://ux.ed.team/img/curso-portada.png" alt="Flores" />
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
     Agente Flores
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/75vqJXXKCM2EDO0iiNqRDe/fa018cd2e2900ce2fee7ab49ff3eb09b/r6s-operators-badge-flores.png" alt="Flores" />
          </div>
        </div>
        <span className="small">Flores</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://www.ubisoft.com/es-mx/game/rainbow-six/siege/game-info/operators/flores">$ 20USD</a>
    </div>
  </div>
</article>

)
export default Curso;
