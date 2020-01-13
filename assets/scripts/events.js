'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// BEGIN GAME LOGIC

const player1 = 'X'
const player2 = 'O'
const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]
let currentTurn = 1
let movesMade = 0
const box = $('.box')

box.on('click', function () {
  // if space is available then run this code
  if (event.target.innerHTML === '') {
    movesMade++

    if (currentTurn === 1) {
      event.target.innerHTML = player1
      gameBoard[event.target.id] = player1
      event.target.style.color = 'red'
      currentTurn++
    } else {
      event.target.innerHTML = player2
      gameBoard[event.target.id] = player2
      event.target.style.color = 'blue'
      currentTurn--
    }
    checkForWinner()
  // else tell them iillegal move
  } else {
    $('#message').text('Invalid Move')
  }
})

function checkForWinner () {
  if (movesMade > 4) {
    // top row win
    if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      $('#message').text(gameBoard[0] + ' wins!')
    } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      $('#message').text(gameBoard[3] + ' wins!')
    } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      $('#message').text(gameBoard[6] + ' wins!')
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      $('#message').text(gameBoard[0] + ' wins!')
    } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      $('#message').text(gameBoard[1] + ' wins!')
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      $('#message').text(gameBoard[2] + ' wins!')
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      $('#message').text(gameBoard[0] + ' wins!')
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      $('#message').text(gameBoard[2] + ' wins!')
    } else if (movesMade > 8) {
      $('#message').text('Draw!')
    }
  }
}

const reset = function () {
  const moves = Array.prototype.slice.call($('.box'))
  moves.map((m) => {
    m.innerHTML = ''
  })
  box.html('')
  currentTurn = 1
  movesMade = 0
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-passwords').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.reset').on('click', reset)
}

module.exports = {
  addHandlers
}
