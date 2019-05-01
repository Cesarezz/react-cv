import React from 'react';
import './App.scss';
import Menu from './menu/Menu';
import KnowLedgeType from './knowLedgeTypes/KnowLedgeTypes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const knowLedgeTypes = [
  { 
    id: 1, 
    name: "Experiencia Profesional", 
    description: "Proyectos en empresas",
    url: "professional-experience", 
    icons: ['fa-business-time']
  },
  { 
    id: 2, 
    name: "Conocimientos Extralaborales", 
    description: "Estudios universitarios, MOOCs y proyectos personales",
    url: "outside-word-environment", 
    icons: ['fa-graduation-cap', 'fa-coffee', 'fa-home', 'fa-book-open']
  },
  { 
    id: 3, 
    name: "Idiomas", 
    description: "Cursos y nivel",
    url: "languages", 
    icons: ["fa-language", "fa-globe-europe"]
  },
  { 
    id: 4, 
    name: "Otros", 
    description: "Cursos Extraprofesionales",
    url: "others", 
    icons: ["fa-user-friends", 'fa-book-open'/*, 'fa-seedling', 'fa-frog', 'mortar-pestle'*/]
  }
];

function App() {

  const listCardsknowLedgeTypes = knowLedgeTypes.map((knowLedgeType) =>
   
      <KnowLedgeType key={knowLedgeType.id} knowLedgeType={knowLedgeType}></KnowLedgeType>

  );

  
  return (
    <div className="App">

      <Container fluid="true">
        <Row>
          <Menu knowLedgeTypes={knowLedgeTypes}/>
        </Row>
        <Row className="mt-4 mb-4"> 
          {listCardsknowLedgeTypes}
        </Row>
      </Container>
      

    </div>
  );
}

export default App;