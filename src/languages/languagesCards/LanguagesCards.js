import React from 'react';
import './LanguagesCards.scss';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

class LanguagesCards extends React.Component{

  render() {

    return(

      <Col xl={4} lg={6} md={6} sm={6} xs={12} className="mt-2 mb-2">
        <Card style={{ width: '100%' }} className="LanguagesCards p-2">
          <Card.Img variant="top" 
                    src={'../../' + this.props.language.flag}
                    className="width-logo-top"/>
          <Card.Body className="pl-0 pr-0 margin-body-card">
            <Card.Title>{this.props.language.idioma}</Card.Title>    
            <Card.Text>
                Nivel de experiencia Lectura
            </Card.Text>    
            <ListGroup className="list-group-flush mb-3">
            
              <ListGroup.Item className="background-transparent">
                <div className={`bar-colors background-transparent ${((this.props.language.nivelExperienciaLectura <= 1)? "color1":((this.props.language.nivelExperienciaLectura <= 2)? "color2" : ( (this.props.language.nivelExperienciaLectura <= 3) ? "color3": ( (this.props.language.nivelExperienciaLectura <= 4) ? "color4": ( (this.props.language.nivelExperienciaLectura <= 5) ? "color5": ( (this.props.language.nivelExperienciaLectura <= 6) ? "color6": ( (this.props.language.nivelExperienciaLectura <= 7) ? "color7": ( (this.props.language.nivelExperienciaLectura <= 8) ? "color8": ( (this.props.language.nivelExperienciaLectura <= 9) ? "color9": "color10" ) )) ) )) )) )}`}>
                    <div className={`v ${((this.props.language.nivelExperienciaLectura === 0) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v2 ${((this.props.language.nivelExperienciaLectura <= 1) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v3 ${((this.props.language.nivelExperienciaLectura <= 2) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v4 ${((this.props.language.nivelExperienciaLectura <= 3) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v5 ${((this.props.language.nivelExperienciaLectura <= 4) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v6  ${((this.props.language.nivelExperienciaLectura <= 5) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v7 ${((this.props.language.nivelExperienciaLectura <= 6) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v8 ${((this.props.language.nivelExperienciaLectura <= 7) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v9 ${((this.props.language.nivelExperienciaLectura <= 8) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v10 ${((this.props.language.nivelExperienciaLectura <= 9) ? " no-color-barcolors": "")}`}></div>
                </div>
              </ListGroup.Item>
            
            </ListGroup>

            <Card.Text>
                Nivel de experiencia Escritura
            </Card.Text>    
            <ListGroup className="list-group-flush mb-3">
            
              <ListGroup.Item className="background-transparent">
                <div className={`bar-colors background-transparent ${((this.props.language.nivelExperienciaEscritura <= 1)? "color1":((this.props.language.nivelExperienciaEscritura <= 2)? "color2" : ( (this.props.language.nivelExperienciaEscritura <= 3) ? "color3": ( (this.props.language.nivelExperienciaEscritura <= 4) ? "color4": ( (this.props.language.nivelExperienciaEscritura <= 5) ? "color5": ( (this.props.language.nivelExperienciaEscritura <= 6) ? "color6": ( (this.props.language.nivelExperienciaEscritura <= 7) ? "color7": ( (this.props.language.nivelExperienciaEscritura <= 8) ? "color8": ( (this.props.language.nivelExperienciaEscritura <= 9) ? "color9": "color10" ) )) ) )) )) )}`}>
                    <div className={`v ${((this.props.language.nivelExperienciaEscritura === 0) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v2 ${((this.props.language.nivelExperienciaEscritura <= 1) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v3 ${((this.props.language.nivelExperienciaEscritura <= 2) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v4 ${((this.props.language.nivelExperienciaEscritura <= 3) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v5 ${((this.props.language.nivelExperienciaEscritura <= 4) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v6  ${((this.props.language.nivelExperienciaEscritura <= 5) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v7 ${((this.props.language.nivelExperienciaEscritura <= 6) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v8 ${((this.props.language.nivelExperienciaEscritura <= 7) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v9 ${((this.props.language.nivelExperienciaEscritura <= 8) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v10 ${((this.props.language.nivelExperienciaEscritura <= 9) ? " no-color-barcolors": "")}`}></div>
                </div>
              </ListGroup.Item>
            
            </ListGroup>

            <Card.Text>
                Nivel de experiencia Escucha
            </Card.Text>    
            <ListGroup className="list-group-flush mb-3">
            
              <ListGroup.Item className="background-transparent">
                <div className={`bar-colors background-transparent ${((this.props.language.nivelExperienciaEscucha <= 1)? "color1":((this.props.language.nivelExperienciaEscucha <= 2)? "color2" : ( (this.props.language.nivelExperienciaEscucha <= 3) ? "color3": ( (this.props.language.nivelExperienciaEscucha <= 4) ? "color4": ( (this.props.language.nivelExperienciaEscucha <= 5) ? "color5": ( (this.props.language.nivelExperienciaEscucha <= 6) ? "color6": ( (this.props.language.nivelExperienciaEscucha <= 7) ? "color7": ( (this.props.language.nivelExperienciaEscucha <= 8) ? "color8": ( (this.props.language.nivelExperienciaEscucha <= 9) ? "color9": "color10" ) )) ) )) )) )}`}>
                    <div className={`v ${((this.props.language.nivelExperienciaEscucha === 0) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v2 ${((this.props.language.nivelExperienciaEscucha <= 1) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v3 ${((this.props.language.nivelExperienciaEscucha <= 2) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v4 ${((this.props.language.nivelExperienciaEscucha <= 3) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v5 ${((this.props.language.nivelExperienciaEscucha <= 4) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v6  ${((this.props.language.nivelExperienciaEscucha <= 5) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v7 ${((this.props.language.nivelExperienciaEscucha <= 6) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v8 ${((this.props.language.nivelExperienciaEscucha <= 7) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v9 ${((this.props.language.nivelExperienciaEscucha <= 8) ? " no-color-barcolors": "")}`}></div>
                    <div className={`v10 ${((this.props.language.nivelExperienciaEscucha <= 9) ? " no-color-barcolors": "")}`}></div>
                </div>
              </ListGroup.Item>
            
            </ListGroup>
           

            
          </Card.Body>
        </Card>
      </Col>

    );

  }

}

export default LanguagesCards;