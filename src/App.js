import React from 'react';
import './App.scss';
import Home from './home/Home';
import ProfessionalExperience from './professionalExperience/ProfessionalExperience';
import OutsideExperience from './outsideExperience/OutsideExperience';
import Languages from './languages/Languages';
import Others from './others/Others';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component{

  render() {

    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */

    return (
      <div className="App bg">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/professional-experience' component={ProfessionalExperience}/>
          </Switch>
      </div>
    );

  }
}

export default App;