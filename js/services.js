angular.module('conference.services', [])
.factory('ConferenceData', function() {
  var data = {
    sessions: [
      { title: 'Experiencias de uso de Software Libre en Cooperativas', id: 1, time: '16:00', speaker: [1, 7], description: 'Por qué tienen una relación privilegiada y cuáles son los puntos en común. Cómo se interrelacionan en la práctica diaria y cómo se potencian.'},
      { title: 'Impulsando el Software Libre en el Estado ', id: 2, time: '17:00', speaker: [2, 3, 4, 5], description: 'Por qué el estado tiene que usar tecnologías libres. Cuáles son los beneficios que tiene aparejado este cambio de paradigma y cuáles son los costos.'},
      { title: 'Proyectos Libre y cooperativos ', id: 3, time: '18:00', speaker: [] },
      { title: 'Legislación y Software Libre ', id: 4, time: '19:00', speaker: [6, 8, 9] },
      { title: 'Cierre con destacados miembros del movimiento cooperativo ', id: 4, time: '20:00', speaker: [] }
    ],
    speakers: [
      {id:1, title:'Pablo Cabello', description: 'Miembro - Itecnova - https://sites.google.com/site/itecnova/'},
      {id:2, title:'Hector Sanchez', description: 'Jefe de Desarrollo - Huayra Linux / Anses - http://huayra.conectarigualdad.gob.ar/'},
      {id:3, title:'Angel Guzmán', description: 'Coordinador del Sistema de Información y Estadística Turística - Ministerio de Turismo de la Nación - http://siet.desarrolloturistico.gov.ar/'},
      {id:4, title:'Ing. Federico Lazcano', description: 'Ministerio de Gobierno y Reforma del Estado - http://www.santafe.gov.ar/'},
      {id:5, title:'Patricia Giardini', description: 'Directora General de Informática en Municipalidad de Rosario - http://www.rosario.gov.ar/'},
      {id:6, title:'Pablo Javkin', description: 'Diputado nacional por Santa Fe - Coalición Cívica ARI UNEN - http://www.pablojavkin.com.ar/perfil'},
      {id:7, title:'Pablo Recepter', description: 'CIO - Banco Credicoop Cooperativo - http://www.bancocredicoop.coop/'},
      {id:8, title:'Silvia Landaburu', description: 'Senadora Nacional por Rio Negro del Frente para la Victorio - http://www.silvinagarcialarraburu.com/'},
      {id:9, title:'Juan Carlos Junio', description: '(Diputado Naciona por Ciudad Autonoma de Buenos Aires del Frente Nuevo Encuentro ) - http://www.juancarlosjunio.com.ar/'}
    ],
    location: {
      longitude: -60.638108,
      latitude: -32.953339,
      address: 'San Martín 1371 Rosario, Pcia. de Santa Fe, Argentina.',
      name: 'Instituto Movilizador de Fondos Cooperativas de la Ciudad de Rosario'
    },
    when: {
      date: '16:00:00Z1983/08/29'
    }
  };

  return {
    data: function() {
      return data
    }
  }

});
