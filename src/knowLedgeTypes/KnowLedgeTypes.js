import React from 'react';
import './KnowLedgeTypes.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

class KnowLedgeType extends React.Component{

  render() {

    const listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
    
      <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
        
    );

    return(

      <Col xl={3} lg={4} md={6} sm={6} xs={12} className="w-100 mt-3 mb-3">
        <Card className="KnowLedgeType text-center">
          <Card.Body>
            <Card.Title>{this.props.knowLedgeType.name}</Card.Title>
            <Card.Text>
              {this.props.knowLedgeType.description}
            </Card.Text>
            <Button variant="primary" className="button-enlace"> 
              <Link to='/professional-experience'>
                Ir a {this.props.knowLedgeType.name}
              </Link>            
            </Button>
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