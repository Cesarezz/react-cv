import React from 'react';
import './TecnologiesCards.scss';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav'

class TecnologiesCards extends React.Component{

  iconTooltipGenerator(isType, indice, icon, tooltip){

    if(!isType) return;

    return <OverlayTrigger
      key={indice}
      placement="bottom"
      overlay={
        <Tooltip id={`tooltip-${indice}`}>
          {tooltip}
        </Tooltip>
      }>
      
        <span className="mr-2"> <i className={"icono-tec fas " + icon}></i> </span>
      
      </OverlayTrigger>;

  }

  render() {

    let tiempoLibreTooltip = "En mi tiempo libre";

    let universitariaTooltip = "Experiencia Universitaria";

    let professionalTooltip = "Experiencia Profesional";

    const enlacesTechnologie = (this.props.technologie.enlaces) ? this.props.technologie.enlaces.map( (enlace, index) =>
    
      <ListGroup.Item key={index}
                      className="background-transparent pl-2 pr-2"> 
          <Nav.Link href={enlace.url} target="_blank" className="pl-0 pr-0 enlace-git-bit">{enlace.nombreProyecto}</Nav.Link>  
      </ListGroup.Item> 
    
    ) : null;

    const librariesTechnologieCorporation = ((this.props.technologie.libraries) && (Object.values(this.props.technologie.libraries).length > 0) && (this.props.corporationId)) ? this.props.technologie.libraries[this.props.corporationId.toString()].map( (librarie, index) =>
    
      <ListGroup.Item key={index}
                      className="background-transparent pl-2 pr-2"> 
          <Nav.Link href={librarie.url} target="_blank" className="pl-0 pr-0 enlace-git-bit">{librarie.name}</Nav.Link>  
      </ListGroup.Item> 
    
    ) : (((this.props.technologie.libraries) && (Object.values(this.props.technologie.libraries).length > 0) && (!this.props.corporationId)) ? 
    
    this.props.technologie.libraries["outside"].map( (librarie, index) =>
    
      <ListGroup.Item key={index}
                      className="background-transparent pl-2 pr-2"> 
          <Nav.Link href={librarie.url} target="_blank" className="pl-0 pr-0 enlace-git-bit">{librarie.name}</Nav.Link>  
      </ListGroup.Item> 
    
    )
    
    : null);

    /*
    
      {
        id: 10, 
        nombreTecnologia: "XSLT",
        logoTecnologia: "img/xslt.png",
        proyectos: 4,
        nivelExperiencia: 4,
        experienciaUniversitaria: true,
        experienciaTiempoLibre: false
      }

    */

    return(

      <Col xl={4} lg={6} md={6} sm={6} xs={12} className="mt-2 mb-2">
        <Card style={{ width: '100%' }} className="TecnologiesCards p-2">
          <Card.Img variant="top" 
                    src={'../../' + this.props.technologie.logoTecnologia}
                    className={'width-logo-top ' + this.props.technologie.nombreTecnologia}/>
          <Card.Body className="pl-0 pr-0 margin-body-card">
            <Card.Title>{this.props.technologie.nombreTecnologia}</Card.Title>    
            <Card.Text>
                Tipo de experiencia
            </Card.Text>    
            <ListGroup className="list-group-flush mb-3">
              <ListGroup.Item className="background-transparent">
                {this.iconTooltipGenerator(this.props.technologie.experienciaProfesional, 1, 'fa-business-time', professionalTooltip)}
                {this.iconTooltipGenerator(this.props.technologie.experienciaUniversitaria, 2, 'fa-graduation-cap', universitariaTooltip)}
                {this.iconTooltipGenerator(this.props.technologie.experienciaTiempoLibre, 3, 'fa-home', tiempoLibreTooltip)}
              </ListGroup.Item>
            </ListGroup>
            <Card.Text>
                Nivel de experiencia
            </Card.Text>    
            <ListGroup className="list-group-flush mb-3">
            
              <ListGroup.Item className="background-transparent">
                <div className={`bar-colors background-transparent ${((this.props.technologie.nivelExperiencia <= 1)? "color1":((this.props.technologie.nivelExperiencia <= 2)? "color2" : ( (this.props.technologie.nivelExperiencia <= 3) ? "color3": ( (this.props.technologie.nivelExperiencia <= 4) ? "color4": ( (this.props.technologie.nivelExperiencia <= 5) ? "color5": ( (this.props.technologie.nivelExperiencia <= 6) ? "color6": ( (this.props.technologie.nivelExperiencia <= 7) ? "color7": ( (this.props.technologie.nivelExperiencia <= 8) ? "color8": ( (this.props.technologie.nivelExperiencia <= 9) ? "color9": "color10" ) )) ) )) )) )}`}>
                    <div className={`v ${((this.props.technologie.nivelExperiencia === 0) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v2 ${((this.props.technologie.nivelExperiencia <= 1) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v3 ${((this.props.technologie.nivelExperiencia <= 2) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v4 ${((this.props.technologie.nivelExperiencia <= 3) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v5 ${((this.props.technologie.nivelExperiencia <= 4) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v6  ${((this.props.technologie.nivelExperiencia <= 5) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v7 ${((this.props.technologie.nivelExperiencia <= 6) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v8 ${((this.props.technologie.nivelExperiencia <= 7) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v9 ${((this.props.technologie.nivelExperiencia <= 8) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v10 ${((this.props.technologie.nivelExperiencia <= 9) ? " no-color-barcolors": "")}`}></div>
                </div>
              </ListGroup.Item>
            
            </ListGroup>

            {
                enlacesTechnologie && (enlacesTechnologie.length > 0) &&
                (<> 
                  <Card.Text>
                      Github y Bitbucket personal.
                  </Card.Text>    
                  <ListGroup className="list-group-flush mb-3">
                  
                    {enlacesTechnologie}
                  
                  </ListGroup>
                </>)
            }

            {
                librariesTechnologieCorporation && (librariesTechnologieCorporation.length > 0) &&
                (<> 
                  <Card.Text>
                      Libraries.
                  </Card.Text>    
                  <ListGroup className="list-group-flush mb-3">
                  
                    {librariesTechnologieCorporation}
                  
                  </ListGroup>
                </>)
            }

            
          </Card.Body>
        </Card>
      </Col>

    );

  }

}

export default TecnologiesCards;