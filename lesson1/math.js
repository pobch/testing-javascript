// There is a bug...
function sum(a, b) {
  return a - b // ...here
}

function subtract(a, b) {
  return a - b
}

module.exports = {
  sum,
  subtract
}
