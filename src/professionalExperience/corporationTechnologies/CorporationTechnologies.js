import React from 'react';
import './CorporationTechnologies.scss';
import TecnologiesCards from '../../tecnologiesCards/TecnologiesCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApiKnowLedgeTypes from '../../api/ApiKnowLedgeTypes';
import Container from 'react-bootstrap/Container';
import Menu from '../../menu/Menu';
import ApiExperienceProfessional from '../../api/ApiExperienceProfessional';
import Card from 'react-bootstrap/Card';

class CorporationTechnologies extends React.Component{

  render(){

    let technologiesCards = [];

    let headerStatic, nombreEmpresa, nombreConsultora, logoEmpresa = null;

    //Si se cumple lo siguiente es que estamos accediendo por enrutamiento
    if(this.props.indice === undefined){

      

    } //Accedemos al componente desde el home en adelante.
    else {

      /* <CorporationTechnologies 
              key={corporation.id} 
              indice={corporation.id} 
              corporation={corporation} 
              experienceProfessional={this.props.experienceProfessional}>
         </CorporationTechnologies> */

      nombreEmpresa = this.props.corporation.nombreEmpresa;
      nombreConsultora = this.props.corporation.nombreConsultora;
      logoEmpresa = this.props.corporation.logoEmpresa;

      const technologiesAll = this.props.experienceProfessional.slice();

      const technologiesCorporation = technologiesAll.filter(technologie => technologie.corporationsKey.indexOf(this.props.corporation.id) !== -1);

    }

    let containerComponentProfessionalExperience = 
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="CorporationTechnologies border-section-bottom mt-3 mb-3">

      <Row className="border-section background-semitransparent pt-1">
        <Col xl={5} lg={6} md={6} sm={6} xs={8} className="pb-1">
          <Row className="mb-2 title-section">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>Experiencia en {nombreEmpresa} </Col>
          </Row>
          { (nombreConsultora) &&            
            <Row className="subtitle-section">
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>Consultora: {nombreConsultora} </Col>
            </Row>
          }       
        </Col>
        <Col xl={7} lg={6} md={6} sm={6} xs={4} className="text-right toolbar-corporation pb-1">
          <Card.Img variant="top" 
                    src={'../../' + logoEmpresa}
                    className="width-logo-top logo-toolbar-corporation"/>
        </Col>
      </Row>

      <Row className="mt-2 mb-2"> 
        {technologiesCards}
      </Row>

    </Col>;

    if(this.props.indice === undefined){

      headerStatic = 
      <Container fluid="true" className="h-100">
        <Row>
          <Menu />
        </Row>
        <Row className="bg">
          {containerComponentProfessionalExperience}
        </Row>
      </Container>;
    }

    return(

      (this.props.indice === undefined) ? headerStatic: containerComponentProfessionalExperience        

    );
  }

}

export default CorporationTechnologies;