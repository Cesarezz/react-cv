import React from 'react';
import './ProfessionalExperience.scss';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfessionalExperienceCards from './professionalExperienceCards/ProfessionalExperienceCards'

class ProfessionalExperience extends React.Component{

  render() {

    const listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
    
      <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
        
    );

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

      <Col xl={12} lg={12} md={12} sm={12} xs={12} className="border-section-bottom">

        <Row className="border-section">

            <Col xl={5} lg={6} md={6} sm={6} xs={8}>

              <Row className="mb-2 title-section">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>{this.props.knowLedgeType.name}</Col>
              </Row>
              <Row className="subtitle-section">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>{this.props.knowLedgeType.description} </Col> 
              </Row>

            </Col>
            <Col xl={7} lg={6} md={6} sm={6} xs={4} className="text-right">
                {listIcons}
            </Col>

        </Row>

        <Navbar className="justify-content-between">
          <span>
              Ver "Empresas" en detalle 
              <span className="ml-3">
                <i class="fas fa-long-arrow-alt-right"></i> 
              </span>
          </span>
          <Form inline>
            {checksFormListCorporations}
          </Form>
        </Navbar>
        <Row className="mt-2 mb-2"> 
          {corporationsCards}
        </Row>

      </Col>

    );

  }

}

export default ProfessionalExperience;