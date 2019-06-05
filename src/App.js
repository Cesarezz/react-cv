import React from 'react';
import './App.scss';
import Home from './home/Home';
import ProfessionalExperience from './professionalExperience/ProfessionalExperience';
import CorporationTechnologies from './professionalExperience/corporationTechnologies/CorporationTechnologies';
import OutsideExperience from './outsideExperience/OutsideExperience';
import Languages from './languages/Languages';
import Others from './others/Others';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component{

  render() {

    let minHeightPx = `${window.innerHeight}px`; 

    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */

    return (
      <div className="App bg" style={{minHeight: minHeightPx }}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/professional-experience' component={ProfessionalExperience}/>
            <Route path='/outside-experience' component={OutsideExperience}/>
            <Route path='/professional-experience/corporation-experience/:id' component={CorporationTechnologies}/>
            <Route path='/languages' component={Languages}/>
          </Switch>
      </div>
    );

  }
}

export default App;