const ApiKnowLedgeTypes = [
    { 
      id: 1, 
      name: "Experiencia Profesional", 
      description: "Proyectos en empresas",
      url: "/professional-experience", 
      icons: ['fa-business-time'],
      iconsText: ["Proyectos en empresas"]
    },
    { 
      id: 2, 
      name: "Conocimientos Extralaborales", 
      description: "Estudios universitarios, MOOCs y proyectos personales",
      url: "/outside-experience",
      constName: "outsideExperience",
      icons: ['fa-graduation-cap', 'fa-coffee', 'fa-home'],
      iconsText: ["Estudios universitarios", "Bendito café para la universidad y el estudio extralaboral", "Amotinamiento en casa y madrugones los findes"]
    },
    { 
      id: 3, 
      name: "Idiomas", 
      description: "",
      url: "/languages", 
      constName: "Languages",
      icons: ["fa-language", "fa-globe-europe"],
      iconsText: ["Idiomas y más", "Nuestro planeta tierra"]
    },
    { 
      id: 4, 
      name: "Otros", 
      description: "Cursos Extraprofesionales",
      url: "/others", 
      constName: "Others",
      icons: ["fa-user-friends", 'fa-book-open', 'fa-coffee'],
      iconsText: ["Compañeros de curso", "Documentación", "Bendito café para el estudio extraprofesional"]
    }
];

export default ApiKnowLedgeTypes;