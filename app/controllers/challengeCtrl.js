'use strict'

app.controller('challengeCtrl', function($scope, challengeFactory) {

  challengeFactory.loadChallenge($scope.gameState.challengeNum)
  .then((challengeObj) => {
    // need to work out how to load in correct answer images
    $scope.originImage = challengeObj.originImage.initial
    $scope.localImage = challengeObj.localImage.initial
    $scope.prompt = challengeObj.prompt
    $scope.answer = challengeObj.answer
  })

})
