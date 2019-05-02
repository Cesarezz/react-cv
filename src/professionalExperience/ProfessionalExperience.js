import React from 'react';
import './ProfessionalExperience.scss';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfessionalExperienceCards from './professionalExperienceCards/ProfessionalExperienceCards'

class ProfessionalExperience extends React.Component{

  render() {

    let corporations = [];
    let corporationsCards = [];

    this.props.professionalExperience.forEach(corporation => {

        if(corporations.indexOf(corporation.nombreEmpresa) === -1){

          corporations.push(corporation.nombreEmpresa);

        } 
        
        corporationsCards.push(<ProfessionalExperienceCards corporation={corporation}></ProfessionalExperienceCards>);
        
    });

    let checksFormListCorporations = corporations.map((corporation, index) => 

        <Form.Check 
          className="no-selectable"
          key={index}
          custom
          inline
          label={corporation}
          type="checkbox"
          id={`${corporation}-check`}
        />

    );

    return(

      <Col xl={12} lg={12} md={12} sm={12} xs={12}>

        <Row className="mb-2 title-section">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>{this.props.knowLedgeType.name}</Col>
        </Row>
        <Row className="subtitle-section">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>{this.props.knowLedgeType.description} </Col> 
        </Row>

        <Navbar className="bg-light justify-content-between">
          <Form inline>
            {checksFormListCorporations}
          </Form>
        </Navbar>

        <Row className="mt-4 mb-4"> 
          {corporationsCards}
        </Row>

      </Col>

    );

  }

}

export default ProfessionalExperience;