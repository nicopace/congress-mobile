angular.module('starter.controllers', ['conference.services', 'leaflet-directive'])

.controller('SessionsCtrl', function($scope, ConferenceData) {
  $scope.sessions = ConferenceData.data().sessions;
})
.controller('SpeakersCtrl', function($scope, ConferenceData) {
  $scope.speakers = ConferenceData.data().speakers;
})
.controller('AboutCtrl', function($scope, ConferenceData, $window) {
})
.controller('SpeakerCtrl', function($scope, $stateParams, ConferenceData) {
  var id = parseInt($stateParams.SpeakerId);
  var speakers = ConferenceData.data().speakers;
  for(var idx in speakers) {
    if (speakers[idx].id === id) {
      $scope.speaker = speakers[idx];
    }
  }
})
.controller('TalkCtrl', function($scope, $stateParams, ConferenceData) {
  var id = parseInt($stateParams.SessionId);
  var sessions = ConferenceData.data().sessions;
  for(var idx in sessions) {
    if (sessions[idx].id === id) {
      $scope.session = sessions[idx];
      $scope.session.speakerobj = [];
      var speakers = ConferenceData.data().speakers;
      for (var ids in speakers) {
        for (var idsp in $scope.session.speaker) {
          if (speakers[ids].id == $scope.session.speaker[idsp]) {
            $scope.session.speakerobj.push(speakers[ids]);
          }
        }
      };
      break;
    }
  }
})
.controller('LocationCtrl', function($scope, ConferenceData) {
  var data = ConferenceData.data();
  $scope.location = data.location;
  $scope.when = data.when;
  $scope.osloCenter = {
    lat: data.location.latitude,
    lng: data.location.longitude,
    zoom: 16
  };
  $scope.markers = {
    osloMarker: {
      lat: data.location.latitude,
      lng: data.location.longitude,
      message: data.location.name,
      focus: true,
      draggable: false
    }

  };
})
