import React from 'react';
import './ProfessionalExperience.scss';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfessionalExperienceCards from './professionalExperienceCards/ProfessionalExperienceCards';
import ApiExperienceProfessional from './../api/ApiExperienceProfessional';
import ApiKnowLedgeTypes from './../api/ApiKnowLedgeTypes';
import Container from 'react-bootstrap/Container';
import Menu from './../menu/Menu';

class ProfessionalExperience extends React.Component{

  render() {

    let corporations = [];
    let corporationsCards = [];

    let checksFormListCorporations;
    let headerStatic, name, description, listIcons = null;

    //Si se cumple lo siguiente es que estamos accediendo por enrutamiento
    if(this.props.indice === undefined){

      name = ApiKnowLedgeTypes[0].name;

      description = ApiKnowLedgeTypes[0].description;

      listIcons = ApiKnowLedgeTypes[0].icons.map( (icon, index) => 
    
        <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );    

      ApiExperienceProfessional.forEach((corporation, index) => {

          if(corporations.indexOf(corporation.nombreEmpresa) === -1){

            corporations.push(corporation.nombreEmpresa);

          } 
          
          corporationsCards.push(<ProfessionalExperienceCards key={index} corporation={corporation}></ProfessionalExperienceCards>);
          
      });     

    } 
     //Accedemos al componente desde el home.
    else {

      name = this.props.knowLedgeType.name;

      description = this.props.knowLedgeType.description;

      listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
    
        <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );    

      this.props.professionalExperience.forEach(corporation => {

          if(corporations.indexOf(corporation.nombreEmpresa) === -1){

            corporations.push(corporation.nombreEmpresa);

          } 
          
          corporationsCards.push(<ProfessionalExperienceCards corporation={corporation}></ProfessionalExperienceCards>);
          
      });

      checksFormListCorporations = corporations.map((corporation, index) => 

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

    }

    let containerComponent = 
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="border-section-bottom mt-3 mb-3">
      <Row className="border-section">
          <Col xl={5} lg={6} md={6} sm={6} xs={8}>
            <Row className="mb-2 title-section">
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>{name}</Col>
            </Row>
            <Row className="subtitle-section">
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>{description} </Col> 
            </Row>
          </Col>
          <Col xl={7} lg={6} md={6} sm={6} xs={4} className="text-right">
              {listIcons}
          </Col>
      </Row>
      {(this.props.indice === undefined) ? "": <Navbar className="justify-content-between">
        <span>
            <span className="text-white">Ver "Empresas" en detalle </span>
            <span className="ml-3 text-white">
              <i className="fas fa-long-arrow-alt-right"></i> 
            </span>
        </span>
        <Form inline>
          {checksFormListCorporations}
        </Form>
      </Navbar>}      
      <Row className="mt-2 mb-2"> 
        {corporationsCards}
      </Row>
    </Col>;

    if(this.props.indice === undefined){

      headerStatic = 
        <Container fluid="true" className="h-100">
          <Row>
            <Menu />
          </Row>
          <Row className="bg">
            {containerComponent}
          </Row>
        </Container>;

    }

    return(
      (this.props.indice === undefined) ? headerStatic: containerComponent        
    );

  }

}

export default ProfessionalExperience;