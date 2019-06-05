import React from 'react';
import './OthersCards.scss';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class OthersCards extends React.Component{

  render() {

    return(

      <Col xl={4} lg={6} md={6} sm={6} xs={12} className="mt-2 mb-2">
        <Card style={{ width: '100%' }} className="OthersCards p-2">
          <Card.Body className="pl-0 pr-0 margin-body-card">
            <Card.Title>{this.props.other.nombre}</Card.Title>    
            <Card.Text>
                <span className="mr-1">Modalidad</span>  {this.props.other.modalidad}
            </Card.Text>    
            <Card.Text>
            {this.props.other.horas} <span className="ml-1">Horas</span>
            </Card.Text>    
          </Card.Body>
        </Card>
      </Col>

    );

  }

}

export default OthersCards;