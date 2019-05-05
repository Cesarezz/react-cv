import React from 'react';
import './OutsideExperience.scss';
import TecnologiesCards from './../tecnologiesCards/TecnologiesCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class OutsideExperience extends React.Component{

  render(){

    const listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
    
      <span className="mr-2" key={index}> <i className={`icono-font fas ${icon}`}></i> </span>  
        
    );


    let outsideExperienceCards = [];

    this.props.outsideExperience.forEach(outsideExperience => {
        
      outsideExperienceCards.push(<TecnologiesCards outsideExperience={outsideExperience}></TecnologiesCards>);
        
    });

    return(

      <Col xl={12} lg={12} md={12} sm={12} xs={12} className="border-section-bottom mt-3 mb-3">

        <Row className="border-section">

            <Col xl={5} lg={6} md={6} sm={6} xs={8}>

              <Row className="mb-2 title-section">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>{this.props.knowLedgeType.name}</Col>
              </Row>
              <Row className="subtitle-section">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>{this.props.knowLedgeType.description} </Col> 
              </Row>

            </Col>
            <Col xl={7} lg={6} md={6} sm={6} xs={4} className="text-right">
                {listIcons}
            </Col>

        </Row>

        <Row className="mt-2 mb-2"> 
          {outsideExperienceCards}
        </Row>

      </Col>

    );
  }

}

export default OutsideExperience;