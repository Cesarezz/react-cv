const ApiKnowLedgeTypes = [
    { 
      id: 1, 
      name: "Experiencia Profesional", 
      description: "Proyectos en empresas",
      url: "/professional-experience", 
      icons: ['fa-business-time']
    },
    { 
      id: 2, 
      name: "Conocimientos Extralaborales", 
      description: "Estudios universitarios, MOOCs y proyectos personales",
      url: "/outside-experience",
      constName: "outsideExperience",
      icons: ['fa-graduation-cap', 'fa-coffee', 'fa-home', 'fa-book-open']
    },
    { 
      id: 3, 
      name: "Idiomas", 
      description: "",
      url: "/languages", 
      constName: "Languages",
      icons: ["fa-language", "fa-globe-europe"]
    },
    { 
      id: 4, 
      name: "Otros", 
      description: "Cursos Extraprofesionales",
      url: "/others", 
      constName: "Others",
      icons: ["fa-user-friends", 'fa-book-open', 'fa-coffee']
    }
];

export default ApiKnowLedgeTypes;