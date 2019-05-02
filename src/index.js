import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
      constName: "outsideExperience",
      icons: ['fa-graduation-cap', 'fa-coffee', 'fa-home', 'fa-book-open']
    },
    { 
      id: 3, 
      name: "Idiomas", 
      description: "Cursos y nivel",
      url: "languages", 
      constName: "Languages",
      icons: ["fa-language", "fa-globe-europe"]
    },
    { 
      id: 4, 
      name: "Otros", 
      description: "Cursos Extraprofesionales",
      url: "others", 
      constName: "Others",
      icons: ["fa-user-friends", 'fa-book-open'/*, 'fa-seedling', 'fa-frog', 'mortar-pestle'*/]
    }
];

const professionalExperience = [
    { 
      id: 5, 
      nombreEmpresa: "Innotec System",
      nombreConsultora: null,
      logoEmpresa: "img/innotec.png",
      logoConsultora: null,
      desde: "Octubre 2016",
      hasta: null, 
      puesto: "Desarrollador Front-End",
      tareas: ["ProgramaciónWeb", "Maquetación", "DiseñoWeb", "HojasDeEstilo", "ExperienciaDeUsuario"]
    },
    { 
      id: 4, 
      nombreEmpresa: "CNMC",
      nombreConsultora: "Connectis CGS",
      logoEmpresa: "img/cnmc.jpg",
      logoConsultora: "img/connectis.jpg",
      desde: "Diciembre 2015",
      hasta: "Octubre 2016", 
      puesto: "Desarrollador Front-End",
      tareas: ["ProgramaciónWeb", "Maquetación", "DiseñoWeb", "HojasDeEstilo", "ExperienciaDeUsuario", "ProcesosTesting"]
    },
    { 
      id: 3, 
      nombreEmpresa: "IECISA", 
      nombreConsultora: "AgioGlobal",
      logoEmpresa: "img/iecisa.jpg",
      logoConsultora: "img/agioglobal.png",
      desde: "Junio 2015",
      hasta: "Diciembre 2015",
      puesto: "Desarrollador Front-End",
      tareas: ["ProgramaciónWeb", "Maquetación", "DiseñoWeb", "HojasDeEstilo", "ExperienciaDeUsuario"]
    },
    { 
      id: 2, 
      nombreEmpresa: "Gesif (Departamento de Informática)", 
      nombreConsultora: null,
      logoEmpresa: "img/gesif.png",
      logoConsultora: null,
      desde: "Agosto 2014",
      hasta: "Junio 2015",
      puesto: "Programador junior",
      tareas: ["ReglasAplicaciónCallCenter", "InformesBIRT", "AutomatizaciónDeProcesos"]
    },
    { 
        id: 1, 
        nombreEmpresa: "Gesif (Departamento de Análisis)", 
        nombreConsultora: null,
        logoEmpresa: "img/gesif.png",
        logoConsultora: null,
        desde: "Octubre 2013",
        hasta: "Julio 2014",
        puesto: "Programador SQL",
        tareas: ["ConsultasSQL", "AutomatizaciónDeProcesos"]
    }  
];

const outsideExperience = [];

const languages = [];

const others = [];

ReactDOM.render(<App knowLedgeTypes={knowLedgeTypes}
                     professionalExperience={professionalExperience}
                     outsideExperience={outsideExperience}
                     languages={languages}
                     others={others}/>, 
                document.getElementById('root'));

serviceWorker.unregister();