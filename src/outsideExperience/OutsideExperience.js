import React from 'react';
import './OutsideExperience.scss';
import TecnologiesCards from './../tecnologiesCards/TecnologiesCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApiOutsideExperience from './../api/ApiOutsideExperience';
import ApiKnowLedgeTypes from './../api/ApiKnowLedgeTypes';
import Container from 'react-bootstrap/Container';
import Menu from './../menu/Menu';

class OutsideExperience extends React.Component{

  render(){

    let outsideExperienceCards = [];

    let headerStatic, name, description, listIcons = null;

    //Si se cumple lo siguiente es que estamos accediendo por enrutamiento
    if(this.props.indice === undefined){

      name = ApiKnowLedgeTypes[0].name;

      description = ApiKnowLedgeTypes[0].description;

      listIcons = ApiKnowLedgeTypes[1].icons.map( (icon, index) => 
      
        <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );

      ApiOutsideExperience.forEach(outsideExperience => {
          
        outsideExperienceCards.push(<TecnologiesCards outsideExperience={outsideExperience}></TecnologiesCards>);
          
      });

    } //Accedemos al componente desde el home.
    else {

      name = this.props.knowLedgeType.name;

      description = this.props.knowLedgeType.description;

      listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
      
        <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );

      this.props.outsideExperience.forEach(outsideExperience => {
          
        outsideExperienceCards.push(<TecnologiesCards outsideExperience={outsideExperience}></TecnologiesCards>);
          
      });

    }

    let containerComponentOutsideExperience = 
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

      <Row className="mt-2 mb-2"> 
        {outsideExperienceCards}
      </Row>

    </Col>;

    if(this.props.indice === undefined){

      headerStatic = 
      <Container fluid="true" className="h-100">
        <Row>
          <Menu />
        </Row>
        <Row className="bg">
          {containerComponentOutsideExperience}
        </Row>
      </Container>;

    }

    return(

      (this.props.indice === undefined) ? headerStatic: containerComponentOutsideExperience        

    );
  }

}

export default OutsideExperience;