import React from 'react';
import './ProfessionalExperience.scss';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfessionalExperienceCards from './professionalExperienceCards/ProfessionalExperienceCards';
import ApiExperienceProfessional from './../api/ApiExperienceProfessional';
import ApiCorporations from './../api/ApiCorporations';
import ApiKnowLedgeTypes from './../api/ApiKnowLedgeTypes';
import Container from 'react-bootstrap/Container';
import CorporationTechnologies from './corporationTechnologies/CorporationTechnologies';
import Menu from './../menu/Menu';

class ProfessionalExperience extends React.Component{

  constructor(props){

    super(props);

    this.state = {
      checksFormCorporation: (this.props.indice === undefined) ? ApiCorporations.slice().fill(false): this.props.corporations.slice().fill(false)
    };

    this.onChecksFormsCorporationChange = this.handleInChecksFormsCorporationChange.bind(this);

  }

  handleInChecksFormsCorporationChange(e) {

    const checksFormCorporation = this.state.checksFormCorporation.slice();

    switch(e.target.id){

      case "1-check": 

        checksFormCorporation[0] = e.target.checked;

        break;

      case "2-check": 

      checksFormCorporation[1] = e.target.checked;

        break;

      case "3-check": 

        checksFormCorporation[2] = e.target.checked;

        break;

      case "4-check":

        checksFormCorporation[3] = e.target.checked;

        break;
      
      case "5-check":

        checksFormCorporation[4] = e.target.checked;

        break;

      default: 

    }

    this.setState({
      checksFormCorporation: checksFormCorporation
    });

  }

  evaluateCorporationCheckForm(corporation){
  
    return (!this.state.checksFormCorporation[corporation.id - 1]) ? <ProfessionalExperienceCards key={corporation.id} corporation={corporation}></ProfessionalExperienceCards>
      : ((this.props.indice !== undefined) ? (<CorporationTechnologies key={corporation.id} indice={corporation.id} corporation={corporation} experienceProfessional={this.props.professionalExperience}></CorporationTechnologies>)
      : <CorporationTechnologies key={corporation.id} indice={corporation.id} corporation={corporation} experienceProfessional={ApiExperienceProfessional}></CorporationTechnologies>);

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    let corporations = [];
    let corporationsCards = [];

    let checksFormListCorporations;
    let headerStatic, name, description, listIcons = null;

    let { location } = this.props;

    //Si se cumple lo siguiente es que estamos accediendo por enrutamiento
    if(this.props.indice === undefined){

      name = ApiKnowLedgeTypes[0].name;

      description = ApiKnowLedgeTypes[0].description;

      listIcons = ApiKnowLedgeTypes[0].icons.map( (icon, index) => 
    
        <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );    

      ApiCorporations.forEach((corporation, index) => {

          if(corporations.indexOf(corporation.nombreEmpresa) === -1){

            corporations.push(corporation.nombreEmpresa);

          } 

          let professionalExperienceCorporation = this.evaluateCorporationCheckForm(corporation);
          
          corporationsCards.push(professionalExperienceCorporation);
          
      });     

    } 
     //Accedemos al componente desde el home.
    else {

      name = this.props.knowLedgeType.name;

      description = this.props.knowLedgeType.description;

      listIcons = this.props.knowLedgeType.icons.map( (icon, index) => 
    
        <span className="mr-2" key={index} style={{verticalAlign: 'sub'}}> <i className={`icono-font fas ${icon}`}></i> </span>  
          
      );    

      this.props.corporations.forEach(corporation => {

          if(corporations.indexOf(corporation.nombreEmpresa) === -1){

            corporations.push({id: corporation.id, name: corporation.nombreEmpresa});

          } 

          let professionalExperienceCorporation = this.evaluateCorporationCheckForm(corporation);
          
          corporationsCards.push(professionalExperienceCorporation);
          
      });

      checksFormListCorporations = corporations.map((corporation, index) => 

          <Form.Check 
            className="no-selectable"
            key={index}
            custom
            inline
            label={corporation.name} 
            type="checkbox"
            onChange={this.onChecksFormsCorporationChange}
            id={`${corporation.id}-check`}
          />

      );

    }

    let containerComponentProfessionalExperience = 
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="border-section-bottom mt-3 mb-3">
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
      {(this.props.indice === undefined) ? "": <Navbar className="justify-content-between">
        <span>
            <span className="text-white"></span>
        </span>
        <Form inline className="text-white">
          {checksFormListCorporations}
        </Form>
      </Navbar>}      
      <Row className="mt-2 mb-2"> 
        {corporationsCards}
      </Row>
    </Col>;

    if(this.props.indice === undefined){

      headerStatic = 
        <Container fluid="true" className="h-100">
          <Row>
            <Menu imageHref="./../../img/CesarSanJoseViedma.jpg" location={location}/>
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

export default ProfessionalExperience;