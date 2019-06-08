import React from 'react';
import './Others.scss';
import OthersCards from './othersCards/OthersCards';
import ApiOthers from './../api/ApiOthers';
import ApiKnowLedgeTypes from './../api/ApiKnowLedgeTypes';
import Container from 'react-bootstrap/Container';
import Menu from './../menu/Menu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class Others extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    let otherExperienceCards = [];

    let headerStatic, name, description, listIcons = null;

    //Accedemos por enrutamiento
    if(this.props.indice === undefined){

      name = ApiKnowLedgeTypes[3].name;

      description = ApiKnowLedgeTypes[3].description;

      listIcons = ApiKnowLedgeTypes[3].icons.map( (icon, index) => 

        <OverlayTrigger
          key={index}
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-${index}`}>
              {ApiKnowLedgeTypes[3].iconsText[index]}
            </Tooltip>
        }>
      
          <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  

        </OverlayTrigger>
          
      );

      ApiOthers.forEach((other, indice) => {
          
        otherExperienceCards.push(<OthersCards key={indice} other={other}></OthersCards>);
          
      });

    } //Accedemos al componente desde el home.
    else {

      name = this.props.knowLedgeType.name;

      description = this.props.knowLedgeType.description;

      listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 

        <OverlayTrigger
          key={index}
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-${index}`}>
              {this.props.knowLedgeType.iconsText[index]}
            </Tooltip>
        }>
      
          <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  

        </OverlayTrigger>
          
      );

      this.props.others.forEach((other, indice) => {
          
        otherExperienceCards.push(<OthersCards key={indice} other={other}></OthersCards>);
          
      });

    }

    let containerComponentOthers = 
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="Languages border-section-bottom mt-3 mb-3">

      <Row className="border-section background-semitransparent pt-1">
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
        {otherExperienceCards}
      </Row>

    </Col>;

    if(this.props.indice === undefined){

      let minHeightPx = `${window.innerHeight}px`;

      headerStatic = 
      <div className="App bg"
           style={{minHeight: minHeightPx }}>
        <Container fluid="true" className="h-100">
          <Row>
            <Menu/>
          </Row>
          <Row className="bg">
            {containerComponentOthers}
          </Row>
        </Container>
      </div>;

    }

    return(

      (this.props.indice === undefined) ? headerStatic: containerComponentOthers        

    );

  }

}

export default Others;