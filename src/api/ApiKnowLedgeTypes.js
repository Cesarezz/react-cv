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
      description: "Cursos y nivel",
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
      icons: ["fa-user-friends", 'fa-book-open'/*, 'fa-seedling', 'fa-frog', 'mortar-pestle'*/]
    }
];

export default ApiKnowLedgeTypes;