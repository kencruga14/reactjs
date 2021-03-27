import React from 'react';
import "./styles/styles.scss";
import CourseGrid from './CourseGrid';
import Banner from './Banner';
import Formulario from './Formulario';
import MenuPrincipal from './MenuPrincipal';
import CourseReact from './CourseReact';
import Historial from './Historial';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';


const App = () => (
  <Router>
    <MenuPrincipal />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" component={CourseReact} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/historial/:valor" component={Historial} />
      <Route path="/historial" component={Historial} />
      <Route path="/formulario" component={() => <Formulario name="Página de Inicio" />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404 </h1>
        </div>
      )} />
    </Switch>
  </Router>
)

export default App;
