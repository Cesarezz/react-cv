import React from 'react';
import './TecnologiesCards.scss';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ListGroup from 'react-bootstrap/ListGroup';

class TecnologiesCards extends React.Component{

  iconTooltipGenerator(isType, indice, icon, tooltip){

    if(!isType) return;

    return <OverlayTrigger
      key={indice}
      placement="bottom"
      overlay={
        <Tooltip id={`tooltip-${indice}`}>
          {tooltip}
        </Tooltip>
      }>
      
        <span className="mr-2"> <i className={"icono-font fas " + icon}></i> </span>
      
      </OverlayTrigger>;

  }

  render() {

    let tiempoLibreTooltip = "En mi tiempo libre";

    let universitariaTooltip = "Experiencia Universitaria";

    let professionalTooltip = "Experiencia Profesional";

    /*
    
      {
        id: 10, 
        nombreTecnologia: "XSLT",
        logoTecnologia: "img/xslt.png",
        proyectos: 4,
        nivelExperiencia: 4,
        experienciaUniversitaria: true,
        experienciaTiempoLibre: false
      }

    */

    return(

      <Col xl={4} lg={6} md={6} sm={6} xs={12} className="mt-2 mb-2">
        <Card style={{ width: '100%' }} className="TecnologiesCards p-2">
          <Card.Img variant="top" 
                    src={'../../' + this.props.outsideExperience.logoTecnologia}
                    className={'width-logo-top ' + this.props.outsideExperience.nombreTecnologia}/>
          <Card.Body className="pl-0 pr-0 margin-body-card">
            <Card.Title>{this.props.outsideExperience.nombreTecnologia}</Card.Title>    
            <Card.Text>
                Tipo de experiencia
            </Card.Text>    
            <ListGroup className="list-group-flush mb-3">
              <ListGroup.Item style={{background: 'transparent'}}>
                {this.iconTooltipGenerator(this.props.outsideExperience.experienciaProfesional, 1, 'fa-business-time', professionalTooltip)}
                {this.iconTooltipGenerator(this.props.outsideExperience.experienciaUniversitaria, 2, 'fa-graduation-cap', universitariaTooltip)}
                {this.iconTooltipGenerator(this.props.outsideExperience.experienciaTiempoLibre, 3, 'fa-home', tiempoLibreTooltip)}
              </ListGroup.Item>
              <ListGroup.Item style={{background: 'transparent', border: 'none'}}>
               
              </ListGroup.Item>
            </ListGroup>
            <Card.Text>
                Nivel de experiencia
            </Card.Text>    
            <ListGroup className="list-group-flush mb-3">
            
              <ListGroup.Item style={{background: 'transparent'}}>
               
               </ListGroup.Item>
            
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>

    );

  }

}

export default TecnologiesCards;