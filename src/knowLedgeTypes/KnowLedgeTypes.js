import React from 'react';
import './KnowLedgeTypes.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class KnowLedgeType extends React.Component{

  render() {

    const listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
    
      <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
        
    );

    return(

      <Col xl={3} lg={6} md={6} sm={6} xs={12}>
        <Card style={{ width: '18rem' }} className="KnowLedgeType text-center">
          <Card.Body>
            <Card.Title>{this.props.knowLedgeType.name}</Card.Title>
            <Card.Text>
              {this.props.knowLedgeType.description}
            </Card.Text>
            <Button variant="primary">Ir a {this.props.knowLedgeType.name}</Button>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
              {listIcons}
          </Card.Footer>
        </Card>
      </Col>

    );

  }

}

export default KnowLedgeType;