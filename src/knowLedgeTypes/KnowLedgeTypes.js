import React from 'react';
import './KnowLedgeTypes.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class KnowLedgeType extends React.Component{

  render() {

    const listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 

    <OverlayTrigger
      key={index}
      placement="bottom"
      overlay={
        <Tooltip id={`tooltip-${index}`}>
          {this.props.knowLedgeType.iconsText[index]}
        </Tooltip>
      }>
    
        <span className="mr-2" style={{verticalAlign: 'sub'}} key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  

      </OverlayTrigger>
        
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
              <Link to={this.props.knowLedgeType.url}>
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