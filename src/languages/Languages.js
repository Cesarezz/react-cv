import React from 'react';
import './Languages.scss';
import ApiLanguages from './../api/ApiLanguages';
import ApiKnowLedgeTypes from './../api/ApiKnowLedgeTypes';
import LanguagesCards from './../languagesCards/LanguagesCards';
import Container from 'react-bootstrap/Container';
import Menu from './../menu/Menu';
import Row from 'react-bootstrap/Row';

class Languages extends React.Component{

  render() {

    let languagesExperienceCards = [];

    let headerStatic, name, description, listIcons = null;

    //Accedemos por enrutamiento
    if(this.props.indice === undefined){

      name = ApiKnowLedgeTypes[2].name;

      description = ApiKnowLedgeTypes[2].description;

      listIcons = ApiKnowLedgeTypes[2].icons.map( (icon, index) => 
      
        <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );

      ApiLanguages.forEach((language, indice) => {
          
        languagesExperienceCards.push(<LanguagesCards key={indice} language={language}></LanguagesCards>);
          
      });

    } //Accedemos al componente desde el home.
    else {

      name = this.props.knowLedgeType.name;

      description = this.props.knowLedgeType.description;

      listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
      
        <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );

      this.props.languages.forEach((language, indice) => {
          
        languagesExperienceCards.push(<LanguagesCards key={indice} language={language}></LanguagesCards>);
          
      });

    }

    let containerComponentLanguages = 
      <div className="Languages">

        <Row className="mt-2 mb-2"> 
          {languagesExperienceCards}
        </Row>

      </div>;

    if(this.props.indice === undefined){

      headerStatic = 
      <Container fluid="true" className="h-100">
        <Row>
          <Menu/>
        </Row>
        <Row className="bg">
          {containerComponentLanguages}
        </Row>
      </Container>;

    }

    return(

      (this.props.indice === undefined) ? headerStatic: containerComponentLanguages        

    );

  }

}

export default Languages;