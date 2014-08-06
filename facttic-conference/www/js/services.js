angular.module('conference.services', [])
.factory('ConferenceData', function() {
  var data = {
    sessions: [
      { title: 'Software libre en el estado', id: 1, time: '10:00', speaker: 1},
      { title: 'Como armar una cooperativa de desarrollo', id: 2, time: '11:00', speaker: 2 },
      { title: 'Software libre en grandes cooperativas', id: 3, time: '12:00', speaker: 3 },
      { title: 'La libertad de información', id: 4, time: '13:00', speaker: 4 }
    ],
    speakers: [
      {id:1, title:'charles', description: 'blah'},
      {id:2, title:'mike', description: 'bleh'},
      {id:3, title:'Ivan', description: 'blih'},
      {id:4, title:'Tomas', description: 'bloh'}
    ],
    location: {
      latitude: 0,
      longitude: 0,
      address: 'Avenida Siempreviva 742, Springfield',
      name: 'Casa de los Simpson'
    },
    when: {
      date: '10:00:00Z1983/08/31'
    }
  };

  return {
    data: function() {
      return data
    }
  }

});
