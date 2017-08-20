'use strict'

app.controller('challengeCtrl', function($scope, challengeFactory) {

  // object to track game state. initialized to challenge number 0 - it should increment when the correct answer is given so the next challenge can be loaded, the question boolean is to flag if the game is asking the question and no answer has been given yet. The other 2 booleans should be self-explanatory.
  $scope.gameState = {
    challengeNum: 0,
    answered: false,
    correct: false
  }


  challengeFactory.loadChallenge($scope.gameState.challengeNum)
  .then((challengeObj) => {
    $scope.challengeObject = challengeObj
  })


  $scope.submitAnswer = () => {
    $scope.gameState.answered = true
    if ($scope.answer === $scope.challengeObject.answer) {
      $scope.gameState.correct = true
    }
  }

  // switch images
  // enable next button
  //clear input
})
