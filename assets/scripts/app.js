'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#change-passwords').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('.reset').hide()
  authEvents.addHandlers()
})
