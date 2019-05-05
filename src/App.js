import React from 'react';
import './App.scss';
import Menu from './menu/Menu';
import KnowLedgeType from './knowLedgeTypes/KnowLedgeTypes';
import ProfessionalExperience from './professionalExperience/ProfessionalExperience';
import OutsideExperience from './outsideExperience/OutsideExperience';
import Languages from './languages/Languages';
import Others from './others/Others'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends React.Component{

  constructor(props){

    super(props);

    this.state = {
      checksForm: [ false, false, false, false]
    };

    this.handleInChecksFormsChange = this.handleInChecksFormsChange.bind(this);

  } 

  handleInChecksFormsChange(checksForm) {
    this.setState({
      checksForm: checksForm
    });
  }

  render() {

    const checksForm = this.state.checksForm.slice();

    const listCardsknowLedgeTypes = this.props.knowLedgeTypes.map((knowLedgeType, index) =>
      { 
        return ((!checksForm[index]) ? 
        <KnowLedgeType key={knowLedgeType.id} knowLedgeType={knowLedgeType}></KnowLedgeType>
        :((index === 0) ?  <ProfessionalExperience  key={knowLedgeType.id} 
                                                    knowLedgeType={knowLedgeType} 
                                                    professionalExperience={this.props.professionalExperience}></ProfessionalExperience>
        :((index === 1) ?  <OutsideExperience   key={knowLedgeType.id} 
                                                knowLedgeType={knowLedgeType} 
                                                outsideExperience={this.props.outsideExperience}></OutsideExperience>
        :((index === 2) ?  <Languages></Languages>
        :<Others></Others>))));
      }   
    );

    const filtersFalse = checksForm.every( (elem) => { 
      return !elem; 
    });

    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */
    /* AQUI HACER IFs que según "checksForm", mostrará u ocultará clases de React */

    return (
    
    <div className="App bg">
      <Container fluid="true" className={(filtersFalse ? "height-no-nav": "h-100")}>
        <Row>
          <Menu knowLedgeTypes={this.props.knowLedgeTypes} 
                checksForm={this.state.checksForm}
                onInChecksFormsChange={this.handleInChecksFormsChange}/>
        </Row>
        <Row className="bg">
          {listCardsknowLedgeTypes}
        </Row>
      </Container>
    </div>
    
    );

  }
}

export default App;