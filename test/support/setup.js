const accounts = require('./accounts');
const expect = require('chai').expect;
const assert = require('chai').assert;

const handleUnexpectedError = function(error) {
  let errorMessage;
  if (error.response && error.response.text) {
    errorMessage = `${error.message}: ${error.response.text}`;
  } else {
    errorMessage = error.message;
  }
  assert(false, errorMessage);
}

const generateIdempotencyKey =  function(){
  // Generate a UUIDv4 key using magic
  // Do not use for cryptography
  // Adapted from: https://stackoverflow.com/a/2117523
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports = { accounts, expect, assert, handleUnexpectedError, generateIdempotencyKey };
