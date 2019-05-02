import React from 'react';
import './ProfessionalExperienceCards.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

class ProfessionalExperienceCards extends React.Component{

  render() {

    /*
    
      { 
          id: 1, 
          nombreEmpresa: "Gesif", 
          nombreConsultora: null,
          logo: "img/gesif.png",
          desde: "Octubre 2013",
          hasta: "Julio 2014",
          puesto: "Programador SQL",
          tareas: ["ConsultasSQL", "AutomatizaciónDeProcesos"]
      }

    */

    const tareasListGroup = this.props.corporation.tareas.map( (tarea, index) =>
    
      <ListGroup.Item key={index}
                     className="hashtag-style"> #{tarea}</ListGroup.Item>
    
    );

    return(

      <Col xl={4} lg={6} md={6} sm={6} xs={12}>
        <Card style={{ width: '100%' }} className="ProfessionalExperienceCards p-2">
          <Card.Img variant="top" 
                    src={'../../' + this.props.corporation.logoEmpresa}
                    className="width-logo-top"/>
          {this.props.corporation.nombreConsultora !== null &&
            <Card.Img variant="top" 
                      className="width-logo-down mt-2"
                      src={'../../' + this.props.corporation.logoConsultora}/>
          }
          <Card.Body className="pl-0 pr-0 margin-body-card">
            <Card.Title>{this.props.corporation.nombreEmpresa}</Card.Title>
            {this.props.corporation.nombreConsultora !== null &&
              <Card.Text>
                {this.props.corporation.nombreConsultora} (Consultora)
              </Card.Text>
            }
            <ListGroup className="list-group-flush mb-3">
                {tareasListGroup}
            </ListGroup>
            
            <Button variant="primary">Ir a experiencia en {this.props.corporation.nombreEmpresa}</Button>
          </Card.Body>
        </Card>
      </Col>

    );

  }

}

export default ProfessionalExperienceCards;