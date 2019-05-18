import React from 'react';
import './CorporationTechnologies.scss';
import TecnologiesCards from './../../tecnologiesCards/TecnologiesCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApiCorporations from './../../api/ApiCorporations';
import Container from 'react-bootstrap/Container';
import Menu from './../../menu/Menu';
import ApiExperienceProfessional from './../../api/ApiExperienceProfessional';
import Card from 'react-bootstrap/Card';

class CorporationTechnologies extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){

    let technologiesCards = [];

    let headerStatic, nombreEmpresa, nombreConsultora, logoEmpresa, tareasList, corporation, technologiesCorporation = null;
    let { match, location, history } = this.props;

    //Si se cumple lo siguiente es que estamos accediendo por enrutamiento con un id de empresa / corporación
    if(this.props.indice === undefined){      

      console.log("Id corporation", match.params.id);

      technologiesCorporation = ApiExperienceProfessional.filter(
        technologie => technologie.corporationsKey.indexOf(parseInt(match.params.id)) !== -1
      );

      console.log(corporation);

      corporation = ApiCorporations.filter(corporation => corporation.id === parseInt(match.params.id))[0];

    } //Accedemos al componente desde el home en adelante.
    else {

      /* <CorporationTechnologies 
              key={corporation.id} 
              indice={corporation.id} 
              corporation={corporation} 
              experienceProfessional={this.props.experienceProfessional}>
         </CorporationTechnologies> */

      corporation = this.props.corporation;

      const technologiesAll = this.props.experienceProfessional.slice();

      technologiesCorporation = technologiesAll.filter(technologie => technologie.corporationsKey.indexOf(this.props.corporation.id) !== -1);

    }

    nombreEmpresa = corporation.nombreEmpresa;
    nombreConsultora = corporation.nombreConsultora;
    logoEmpresa = corporation.logoEmpresa;
    tareasList = corporation.tareas.map( (tarea, index) =>
      <span key={index}
            className="hashtag-style-toolbar mr-2"> #{tarea}</span>
    );

    technologiesCorporation.map((technologieCorp, indice) => {
          
      technologiesCards.push(<TecnologiesCards key={indice} technologie={technologieCorp}></TecnologiesCards>);
        
    });

    let containerComponentProfessionalExperience = 
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="CorporationTechnologies border-section-bottom mt-3 mb-3">

      <Row className="border-section background-semitransparent pt-1">
        <Col xl={4} lg={4} md={6} sm={6} xs={8} className="pb-1">
          <Row className="mb-2 title-section">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>Experiencia en {nombreEmpresa} </Col>
          </Row>
          { (nombreConsultora) &&            
            <Row className="subtitle-section">
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>Consultora: {nombreConsultora} </Col>
            </Row>
          }       
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={8} className="pb-1">
            <Row className="tareas-tags">
              {tareasList}
            </Row>
        </Col>
        <Col xl={2} lg={2} md={6} sm={6} xs={4} className="text-right toolbar-corporation pb-1">
          <Card.Img variant="top" 
                    src={'../../' + logoEmpresa}
                    className="width-logo-top logo-toolbar-corporation"/>
        </Col>
      </Row>

      <Row className="mt-2 mb-2"> 
        {technologiesCards}
      </Row>

    </Col>;

    if(this.props.indice === undefined){

      headerStatic = 
      <Container fluid="true" className="h-100">
        <Row>
          <Menu imageHref="./../../../img/CesarSanJoseViedma.jpg" location={location}/>
        </Row>
        <Row className="bg">
          {containerComponentProfessionalExperience}
        </Row>
      </Container>;
    }

    return(

      (this.props.indice === undefined) ? headerStatic: containerComponentProfessionalExperience        

    );
  }

}

export default CorporationTechnologies;