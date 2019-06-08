import React from 'react';
import './Languages.scss';
import ApiLanguages from './../api/ApiLanguages';
import ApiKnowLedgeTypes from './../api/ApiKnowLedgeTypes';
import LanguagesCards from './languagesCards/LanguagesCards';
import Container from 'react-bootstrap/Container';
import Menu from './../menu/Menu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Languages extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    let languagesExperienceCards = [];

    let headerStatic, name, listIcons = null;

    //Accedemos por enrutamiento
    if(this.props.indice === undefined){

      name = ApiKnowLedgeTypes[2].name;

      listIcons = ApiKnowLedgeTypes[2].icons.map( (icon, index) => 
      
        <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );

      ApiLanguages.forEach((language, indice) => {
          
        languagesExperienceCards.push(<LanguagesCards key={indice} language={language}></LanguagesCards>);
          
      });

    } //Accedemos al componente desde el home.
    else {

      name = this.props.knowLedgeType.name;

      listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
      
        <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );

      this.props.languages.forEach((language, indice) => {
          
        languagesExperienceCards.push(<LanguagesCards key={indice} language={language}></LanguagesCards>);
          
      });

    }

    let containerComponentLanguages = 
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="Languages border-section-bottom mt-3 mb-3">

      <Row className="border-section background-semitransparent pt-1">

          <Col xl={5} lg={6} md={6} sm={6} xs={8}>
            <span className="title-section" style={{verticalAlign: '-webkit-baseline-middle'}}>{name}</span>            
          </Col>
          <Col xl={7} lg={6} md={6} sm={6} xs={4} className="text-right">
              {listIcons}
          </Col>

      </Row>

      <Row className="mt-2 mb-2"> 
        {languagesExperienceCards}
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
            {containerComponentLanguages}
          </Row>
        </Container>
      </div>;

    }

    return(

      (this.props.indice === undefined) ? headerStatic: containerComponentLanguages        

    );

  }

}

export default Languages;