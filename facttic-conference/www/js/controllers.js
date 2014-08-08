angular.module('starter.controllers', ['conference.services'])

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
    }
  }
})
.controller('LocationCtrl', function($scope, ConferenceData) {
  var data = ConferenceData.data();
  $scope.location = data.location;
  $scope.when = data.when;
  $scope.osloCenter = {
    lat: 59.91,
    lng: 10.75,
    zoom: 12
  };
  $scope.markers = {
    osloMarker: {
      lat: 59.91,
      lng: 10.75,
      message: "I want to travel here!",
      focus: true,
      draggable: false
    }

  };
})
