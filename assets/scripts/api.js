'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const createGame = data => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }).then((theNewGame) => {
    store.currentGameID = theNewGame.game.id
  })
}

const updateGame = function (gameUpdateData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.currentGameID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: gameUpdateData.index,
          value: gameUpdateData.value
        },
        over: gameUpdateData.over
      }
    }
  }).then(console.log)
}

const getGameStats = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token // SOMEHOW USE STORE TO GET THE TOKEN
    },
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  updateGame,
  getGameStats
}
