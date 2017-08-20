'use strict'

app.controller('challengeCtrl', function($scope, challengeFactory) {

  challengeFactory.loadChallenge($scope.gameState.challengeNum)

})
