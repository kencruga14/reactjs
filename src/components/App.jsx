import React from 'react';
import "../styles/styles.scss";
import CourseGrid from './Organisms/CourseGrid';
import Home from './Pages/Home';
import Formulario from './Pages/Formulario';
import MenuPrincipal from './Organisms/MenuPrincipal';
import CourseReact from './Molecules/CourseReact';
import Historial from './Pages/Historial';
import Users from './Pages/Users';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';


const App = () => (
  <Router>
    <MenuPrincipal />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={CourseReact} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/usuarios" component={Users} />
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
