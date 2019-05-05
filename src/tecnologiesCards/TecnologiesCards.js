import React from 'react';
import './TecnologiesCards.scss';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class TecnologiesCards extends React.Component{

  render() {

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
                    className="width-logo-top"/>
          <Card.Body className="pl-0 pr-0 margin-body-card">
            <Card.Title>{this.props.outsideExperience.nombreTecnologia}</Card.Title>        
          </Card.Body>
        </Card>
      </Col>

    );

  }

}

export default TecnologiesCards;