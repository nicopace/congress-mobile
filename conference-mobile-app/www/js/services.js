angular.module('conference.services', [])
.factory('ConferenceData', function() {
  var data = {
    sessions: [
      { title: 'Experiencias de uso de Software Libre en Cooperativas', id: 1, time: '16:00', speaker: 1},
      { title: 'Impulsando el Software Libre en el Estado ', id: 2, time: '17:00', speaker: 2 },
      { title: 'Proyectos Libre y cooperativos ', id: 3, time: '18:00', speaker: 3 },
      { title: 'Legislación y Software Libre ', id: 4, time: '19:00', speaker: 4 },
      { title: 'Cierre con destacados miembros del movimiento cooperativo ', id: 4, time: '20:00', speaker: 5 }
    ],
    speakers: [
      {id:1, title:'charles', description: 'blah'},
      {id:2, title:'mike', description: 'bleh'},
      {id:3, title:'Ivan', description: 'blih'},
      {id:4, title:'Tomas', description: 'bloh'}
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
