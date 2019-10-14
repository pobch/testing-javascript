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

function test(title, callback) {
  try {
    callback()
    console.log(`PASSED: ${title}`)
  } catch (e) {
    console.log(`FAILED: ${title}`)
    console.error(e)
  }
  console.log(`------------`)
}

// Execute
test('sum adds numbers', () => {
  const result = sum(10, 2)
  expect(result).toBe(12)
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  expect(result).toBe(4)
})
