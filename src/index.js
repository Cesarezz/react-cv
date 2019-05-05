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

const outsideExperience = [ 
  { 
    id: 1, 
    nombreTecnologia: "Angular.io",
    logoTecnologia: "img/angular.png",
    proyectos: 1,
    nivelExperiencia: 6,
    experienciaUniversitaria: false,
    experienciaTiempoLibre: true,
    enlaces: [
      {
        nombreProyecto: "Mi CV en Angular.io",  
        url: "https://github.com/Cesarezz/cv-angular-front"
      }      
    ]
  },
  { 
    id: 2, 
    nombreTecnologia: "React",
    logoTecnologia: "img/react.svg",
    proyectos: 1,
    nivelExperiencia: 6,
    experienciaUniversitaria: false,
    experienciaTiempoLibre: true,
    enlaces: [
      {
        nombreProyecto: "Mi CV en React",  
        url: "https://github.com/Cesarezz/react-cv"
      }      
    ]
  },
  
  { 
    id: 3, 
    nombreTecnologia: "Sass",
    logoTecnologia: "img/sass.png",
    proyectos: 2,
    nivelExperiencia: 6,
    experienciaUniversitaria: false,
    experienciaTiempoLibre: true,
  },
  { 
    id: 4, 
    nombreTecnologia: "NodeJS",
    logoTecnologia: "img/nodejs.svg",
    proyectos: 0,
    nivelExperiencia: 3,
    experienciaUniversitaria: false,
    experienciaTiempoLibre: true,
  },
  {
    id: 5, 
    nombreTecnologia: "ECMAScript 6",
    logoTecnologia: "img/es6.png",
    proyectos: 0,
    nivelExperiencia: 5,
    experienciaUniversitaria: false,
    experienciaTiempoLibre: true
  },
  {
    id: 6, 
    nombreTecnologia: "Bootstrap",
    logoTecnologia: "img/bootstrap4.jpg",
    proyectos: 2,
    nivelExperiencia: 7,
    experienciaUniversitaria: false,
    experienciaTiempoLibre: true
  },
  { 
    id: 7, 
    nombreTecnologia: "Git",
    logoTecnologia: "img/git.png",
    proyectos: 3,
    nivelExperiencia: 6,
    experienciaUniversitaria: true,
    experienciaTiempoLibre: true
  },
  {
    id: 7, 
    nombreTecnologia: "Spring",
    logoTecnologia: "img/spring.png",
    proyectos: 2,
    nivelExperiencia: 3,
    experienciaUniversitaria: true,
    experienciaTiempoLibre: false,
    enlaces: [
      {
        nombreProyecto: "Hamburguesería Elvis (BACK)",  
        url: "https://bitbucket.org/cesarezz/elvishamburgueseria"
      },
      {
        nombreProyecto: "PFM Videoclub (BACK)",  
        url: "https://bitbucket.org/cesarezz/videoclub"
      }      
    ]
  },
  {
    id: 8, 
    nombreTecnologia: "AngularJS",
    logoTecnologia: "img/angularjs.svg",
    proyectos: 2,
    nivelExperiencia: 9,
    experienciaUniversitaria: true,
    experienciaTiempoLibre: false,
    enlaces: [
      {
        nombreProyecto: "Hamburguesería Elvis (FRONT)",  
        url: "https://bitbucket.org/cesarezz/ngelvishamburguer"
      },
      {
        nombreProyecto: "PFM Videoclub (FRONT)",  
        url: "https://bitbucket.org/cesarezz/ngvideoclub"
      }            
    ]
  },
  {
    id: 9, 
    nombreTecnologia: "AngularJS Material",
    logoTecnologia: "img/angularjsmaterial.svg",
    proyectos: 2,
    nivelExperiencia: 9,
    experienciaUniversitaria: true,
    experienciaTiempoLibre: false,
    enlaces: [
      {
        nombreProyecto: "Hamburguesería Elvis (FRONT)",  
        url: "https://bitbucket.org/cesarezz/ngelvishamburguer"
      },
      {
        nombreProyecto: "PFM Videoclub (FRONT)",  
        url: "https://bitbucket.org/cesarezz/ngvideoclub"
      }            
    ]
  },
  {
    id: 10, 
    nombreTecnologia: "XSLT",
    logoTecnologia: "img/xslt.png",
    proyectos: 4,
    nivelExperiencia: 4,
    experienciaUniversitaria: true,
    experienciaTiempoLibre: false
  },
  {
    id: 11, 
    nombreTecnologia: "Java",
    logoTecnologia: "img/java.jpg",
    proyectos: 3,
    nivelExperiencia: 3,
    experienciaUniversitaria: true,
    experienciaTiempoLibre: false
  }  
];

const languages = [];

const others = [];

ReactDOM.render(<App knowLedgeTypes={knowLedgeTypes}
                     professionalExperience={professionalExperience}
                     outsideExperience={outsideExperience}
                     languages={languages}
                     others={others}/>, 
                document.getElementById('root'));

serviceWorker.unregister();