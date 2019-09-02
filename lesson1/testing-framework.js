const sum = (a, b) => a - b
const subtract = (a, b) => a - b

const test = (title, callback) => {
  try {
    callback()
    console.log(`/ ${title} is passed`)
  } catch (error) {
    console.error(`X ${title} is not passed`)
    console.error(error)
  }
}

const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

test('Test sum function', () => {
  const result = sum(7, 3)
  expect(result).toBe(10)
})

test('Test subtract function', () => {
  const result = subtract(7, 3)
  expect(result).toBe(4)
})
