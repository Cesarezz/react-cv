import React from 'react';
import './Home.scss';
import Menu from './../menu/Menu';
import KnowLedgeType from './../knowLedgeTypes/KnowLedgeTypes';
import ProfessionalExperience from './../professionalExperience/ProfessionalExperience';
import OutsideExperience from './../outsideExperience/OutsideExperience';
import Languages from './../languages/Languages';
import Others from './../others/Others';
import ApiKnowLedgeTypes from './../api/ApiKnowLedgeTypes';
import ApiExperienceProfessional from './../api/ApiExperienceProfessional';
import ApiOutsideExperience from './../api/ApiOutsideExperience';
import ApiLanguages from './../api/ApiLanguages';
import ApiOthers from './../api/ApiOthers';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Home extends React.Component{

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

    const listCardsknowLedgeTypes = ApiKnowLedgeTypes.map((knowLedgeTypeElem, index) =>
      { 
        return ((!checksForm[index]) ? 
        <KnowLedgeType indice={knowLedgeTypeElem.id} knowLedgeType={knowLedgeTypeElem}></KnowLedgeType>
        :((index === 0) ?  <ProfessionalExperience key={knowLedgeTypeElem.id}
                                                   indice={knowLedgeTypeElem.id} 
                                                   knowLedgeType={knowLedgeTypeElem} 
                                                   professionalExperience={ApiExperienceProfessional}></ProfessionalExperience>
        :((index === 1) ?  <OutsideExperience key={knowLedgeTypeElem.id}
                                              indice={knowLedgeTypeElem.id} 
                                              knowLedgeType={knowLedgeTypeElem} 
                                              outsideExperience={ApiOutsideExperience}></OutsideExperience>
        :((index === 2) ?  <Languages></Languages>
        :<Others></Others>))));
      }   
    );

    const filtersFalse = checksForm.every( (elem) => { 
      return !elem; 
    });

    return(

      <div className="App bg">
        <Container fluid="true" className={(filtersFalse ? "height-no-nav": "h-100")}>
          <Row>
            <Menu knowLedgeTypes={ApiKnowLedgeTypes} 
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

export default Home;