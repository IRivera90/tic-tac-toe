'use strict'
const store = require('./store')
const signUpSuccess = function (response) {
  $('#message').text('Successfully signed up')
  console.log(response)
}
const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
  console.log(error)
}
const signInSuccess = function (response) {
  $('#message').text('Successfully signed in')
  console.log(response)
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-passwords').show()
  $('#sign-out').show()
  $('.container').show()
}
const signInFailure = function (error) {
  $('#message').text('Sign in failed!')
  console.log(error)
}
const changePasswordSuccess = function (response) {
  $('#message').text('Password succesfully changed!')
}
const changePasswordFailure = function () {
  $('#message').text('Change password failed')
}
const signOutSuccess = function () {
  $('#message').text('Signed out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-passwords').hide()
  $('#sign-out').hide()
  $('.container').hide()
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
