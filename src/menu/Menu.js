import React from 'react';
import './Menu.scss';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Menu extends React.Component{

  constructor(props){

    super(props);

    this.onInChecksFormsChange = this.handleInChecksFormsChange.bind(this);

  }

  handleInChecksFormsChange(e){

    const checksForm = this.props.checksForm.slice();

    switch(e.target.id){

      case "custom-inline-checkbox-1": 

        checksForm[0] = e.target.checked;

        break;

      case "custom-inline-checkbox-2": 

        checksForm[1] = e.target.checked;

        break;

      case "custom-inline-checkbox-3": 

        checksForm[2] = e.target.checked;

        break;

      case "custom-inline-checkbox-4":

        checksForm[3] = e.target.checked;

        break;

      default: 

    }

    this.props.onInChecksFormsChange(checksForm);

  }

  render() {

    let fechaActual = new Date();
    let weekdays = new Array(7);
    weekdays[0] = "Domingo";
    weekdays[1] = "Lunes";
    weekdays[2] = "Martes";
    weekdays[3] = "Miércoles";
    weekdays[4] = "Jueves";
    weekdays[5] = "Viernes";
    weekdays[6] = "Sábado";
    let diaSemana = weekdays[fechaActual.getDay()];

    let monthNames = new Array(12);
    monthNames[0] = "Enero";
    monthNames[1] = "Febrero";
    monthNames[2] = "Marzo";
    monthNames[3] = "Abril";
    monthNames[4] = "Mayo";
    monthNames[5] = "Junio";
    monthNames[6] = "Julio";
    monthNames[7] = "Agosto";
    monthNames[8] = "Septiembre";
    monthNames[9] = "Octubre";
    monthNames[10] = "Noviembre";
    monthNames[11] = "Diciembre";
    let nombreMes = monthNames[fechaActual.getMonth()];

    let checksFormList;

    if(this.props.knowLedgeTypes === undefined){



    } else {

      checksFormList = this.props.knowLedgeTypes.map((knowLedgeType) => 
      <Form.Check 
        className="no-selectable"
        key={knowLedgeType.id}
        custom
        inline
        onChange={this.onInChecksFormsChange}
        label={knowLedgeType.name}
        type="checkbox"
        id={`custom-inline-checkbox-${knowLedgeType.id}`}
      />
      );

    }

    return (
      <div className="Menu w-100">
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Navbar.Text className="d-none d-lg-block">
            { `${diaSemana}, ${fechaActual.getDate()} de ${nombreMes} de ${fechaActual.getFullYear()}`   }
          </Navbar.Text>
          <Navbar.Brand href="/" className="pl-3">
            <Row>CÉSAR SAN JOSÉ VIEDMA</Row>
            <Row>
              <Navbar.Text className="d-none d-md-block"> 
                React, React Bootstrap, React Navigation, Sass, JavaScript y HTML. 
              </Navbar.Text>
            </Row>            
          </Navbar.Brand>
          <Navbar.Brand href="img/CesarSanJoseViedma.jpg" className="p-0">
              <Image src="img/CesarSanJoseViedma.jpg" roundedCircle className="image-cv"/>
          </Navbar.Brand>      
        </Navbar>
        { (this.props.knowLedgeTypes !== undefined) ? 
          <Navbar bg="dark" variant="dark" className="justify-content-between pt-0 pb-1">
            <span></span>
            <Form inline className="text-white">
              {checksFormList}
              <span className="mr-2"><i className="cursor-pointer fas fa-download"></i> </span>
            </Form>
          </Navbar> : ""}
        
      </div>
    );

  }
}

export default Menu;