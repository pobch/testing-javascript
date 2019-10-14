const { subtract, sum } = require('./math')

function expect(actual) {
  return {
    toBe(expectation) {
      if (actual !== expectation) {
        throw new Error(`${actual} is not equal to expected value: ${expectation}`)
      }
      return true
    }
  }
}

let result

result = subtract(7, 3)
expect(result).toBe(4)

result = sum(10, 2)
expect(result).toBe(12)
