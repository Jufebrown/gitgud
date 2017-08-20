'use strict'

app.controller('challengeCtrl', function($scope, challengeFactory, diagramService) {

  // object to track game state. initialized to challenge number 0 - it should increment when the correct answer is given so the next challenge can be loaded, the question boolean is to flag if the game is asking the question and no answer has been given yet. The other 2 booleans should be self-explanatory.
  $scope.gameState = {
    challengeNum: 0,
    answered: false,
    correct: false
  }

  $scope.completedChallenge = () => {
    $scope.classComplete = 'complete';
  }

  $scope.allChallenges = [];

  $scope.getAllChallenges = () => {
    challengeFactory.loadChallenge()
    .then((allOfTheChallenges) => {
      $scope.allChallenges = allOfTheChallenges
      console.log($scope.allChallenges);
    });
  };

  $scope.getAllChallenges();

  $scope.getChallenge = () => {
    challengeFactory.loadChallenge()
    .then((allChallengeObj) => {
      $scope.challengeObject = allChallengeObj[$scope.gameState.challengeNum]
      $scope.updateDiagram();
    })
  }

  $scope.submitAnswer = () => {
    $scope.gameState.answered = true
    if ($scope.answer === $scope.challengeObject.answer) {
      $scope.gameState.correct = true
      $scope.updateDiagram()
    }
  }

  $scope.clearPage = () => {
    $scope.answer = null
    $scope.gameState.answered = false
    $scope.gameState.correct = false
    $scope.updateDiagram()
    $scope.completedChallenge()
  }

  $scope.nextChallenge = () => {
    $scope.gameState.challengeNum++
    $scope.answer = null
    $scope.gameState.answered = false
    $scope.gameState.correct = false
    $scope.getChallenge()
  }

  $scope.updateDiagram = () => {
    let diagram = diagramService[$scope.challengeObject.name];
    if ($scope.gameState.correct) {
      diagram.correct()
    } else {
      diagram.initial()
    }
  }

  $scope.getChallenge()

})
