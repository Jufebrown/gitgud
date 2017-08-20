'use strict'

app.factory('challengeFactory', function($http) {
  return {
    loadChallenge: function(challengeNum) {
      return $http.get('app/assets/challenges/challenges.json')
      .then(function(res){
          return res.data[challengeNum]
      })
    }
  }
})
